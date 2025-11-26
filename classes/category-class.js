/* Class handling model layer for CRUD category ops */
import { deleteDataFromSupabase, fetchAllDataFromSupabase, insertDataToSupabase, updateDataFromSupabase } from "../settings/db-conn.js";

class Category {
    constructor() {
        this.id = null;
        this.name = null;
        this.tableName = 'categories'
    }

    // add/create category in db
    addCategory(name) {
        insertDataToSupabase(this.tableName, ['cat_name', name])
    }

    // view all categories
    viewAllCategories() {
        return fetchAllDataFromSupabase(this.tableName)
    }

    // edit category
    editCategory(id, name) {
        updateDataFromSupabase(this.tableName, 'cat_name', 'cat_id', id, name)
    }

    // delete category
    deleteCategory(id, name) {
        deleteDataFromSupabase(this.tableName, id, name)
    }
}