/* Manages frontend validation and asynch creation of account */

import { supabase } from "../settings/db-conn.js";

// Validation
function validateFormInput() {
    // getting input data
    let submitBtn = document.getElementById('submitBtn');
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // validation
    let isErrorCommitted = false; // flag checking if frontend backend error has been committed
    let emailErrorText = ''
    let passwErrorText = ''
    if (email.length > 50) {
        submitBtn.disabled = false;
        emailErrorText += 'Email length must be 50 characters or less';
        isErrorCommitted = true
    }
    if (email.includes('@')) {
        submitBtn.disabled = false;
        emailErrorText += '\nEnter email in proper format (eg: abc@gmail.com)';
        isErrorCommitted = true;
    }
    if (password.length > 150) {
        submitBtn.disabled = false;
        passwErrorText += 'Password length must be 150 characters or less';
        isErrorCommitted = true
    }

    if (emailErrorText != '') document.getElementById('emailError').innerHTML = emailErrorText;
    if (passwErrorText != '') document.getElementById('passwError').innerHTML = passwErrorText;

    // creating account if validation error committed
    if (!isErrorCommitted) createAccount(email, password);
}

// creates account
async function createAccount(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })
    if (error == null) window.location.href = '../admin/category.php'; // if signup successful, go to category.php   
}