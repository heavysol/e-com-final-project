// Settings/core.php
<?php
session_start();


//for header redirection
ob_start();

//funtion to check for login
function checkLogin() {
    if (!isset($_SESSION['id'])) {
        header("Location: ../Login/login_register.php");
        exit;
    }   
}

//function to get user ID
function getUserID() {
    if (isset($_SESSION['id'])) return true; 
    else return false;
}

//function to check for role (admin, customer, etc)
function checkUserRole() {
    if ($_SESSION['role'] == 2) return true; 
    else if ($_SESSION['role']) return false;
}


?>