/* Initialisation of connection with Supabase project with its dbs */

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gizyyugpvcqvlbjoaotd.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey) // Supabase client 'connect-point'

// insert data to Supabase db
export async function insertDataToSupabase(tableName, ...fieldData) {
    // testerId, levelId, duration, pourNumber
    const dataToInsert = {}; // initialising object with data to be added to respective fields in db table
    fieldData.forEach(field => dataToInsert[field[0]] = field[1]) // adding data to be added to db to dataTotInsert; index 0 of field in loop is field name, 1 is field datum
    console.log(dataToInsert)

    const { error } = await supabase
        .from(tableName)
        .insert(dataToInsert);
    console.log(error);
}

// Fetch one item of data from table of particular field
export async function fetchDataFromSupabase(tableName, fieldName, fieldValue) {
    const { data, error } = await supabase // checking for value
        .from(tableName)
        .select()
        .eq(fieldName, fieldValue);
    console.log(error);
    console.log(data)
    return data;
}

// Fetch all data from particular table
export async function fetchAllDataFromSupabase(tableName) {
    const { data, error } = await supabase // checking for value
        .from(tableName)
        .select()
    console.log(error);
    console.log(data)
    return data;
}

// update data in field in table
export async function updateDataFromSupabase(tableName, fieldName, primaryKey, primaryKeyVal,newValue) {
    const { error } = await supabase
        .from(tableName)
        .update({ fieldName: newValue })
        .eq(primaryKey, primaryKeyVal) // primaryKey and primaryKeyVal will be used to identify the record to be updated
}

// Fetch all data from particular table
export async function deleteDataFromSupabase(tableName, primaryKey, primaryKeyVal) {
    const response = await supabase // checking for value
        .from(tableName)
        .delete()
        .eq(primaryKey, primaryKeyVal) // primaryKey and primaryKeyVal will be used to identify the record to be updated
}