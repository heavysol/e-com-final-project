/* Class handling model layer for CRUD customer ops */
import { createUserAuth, fetchUserAuth, updateUserAuth } from "../settings/db-conn.js";

export class Customer {
    constructor() {
        this.id = null;
        this.email = null;
        this.password = this.password;
    }

    // create customer in db
    createCusto(email, password) {
        createUserAuth(email, password);
    }

    // retrieve customer
    retrieveCusto() {
        fetchUserAuth()
    }

    // update customer
    updateCusto(email) {
        updateUserAuth(email)
    }
}