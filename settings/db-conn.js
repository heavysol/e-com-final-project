/* Initialisation of connection with Supabase project with its dbs */

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gizyyugpvcqvlbjoaotd.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey) // Supabase client 'connect-point'

// insert data to Supabase db
export async function insertDataToSupabase(supaObj, tableName, ...fieldData) {
    // testerId, levelId, duration, pourNumber
    const dataToInsert = {}; // initialising object with data to be added to respective fields in db table
    fieldData.forEach(field => dataToInsert[field[0]] = field[1]) // adding data to be added to db to dataTotInsert; index 0 of field in loop is field name, 1 is field datum
    console.log(dataToInsert)

    const { error } = await supaObj
        .from(tableName)
        .insert(dataToInsert);
    console.log(error);
}

// Fetch data from Supabase db
export async function fetchDataFromSupabase(supaObj, tableName, fieldName, fieldValue) {
    const { data, error } = await supaObj // checking for value
        .from(tableName)
        .select()
        .eq(fieldName, fieldValue);
    console.log(error);
    console.log(data)
    return data;
}