/* Created 19 Sep '25 */

/* login.js : performs frontend auth on data input in login form */

function validateFormInput() {
    // getting input data
    let submitBtn = document.getElementById('submitBtn');
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // validation
    let emailErrorText = ''
    let passwErrorText = ''
    if (email.length > 50) {
        submitBtn.disabled = false;
        emailErrorText += 'Email length must be 50 characters or less';
    }
    if (email.includes('@')) {
        submitBtn.disabled = false;
        emailErrorText += '\nEnter email in proper format (eg: abc@gmail.com)';
    }
    if (password.length > 150) {
        submitBtn.disabled = false;
        passwErrorText += 'Password length must be 150 characters or less';
    }

    if (emailErrorText != '') document.getElementById('emailError').innerHTML = emailErrorText;
    if (passwErrorText != '') document.getElementById('passwError').innerHTML = passwErrorText;
}