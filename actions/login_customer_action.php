<?php

header('Content-Type: application/json');

session_start();

$response = array();

// TODO: Check if the user is already logged in and redirect to the dashboard
if (isset($_SESSION['user_id'])) {
    $response['status'] = 'error';
    $response['message'] = 'You are already logged in';
    echo json_encode($response);
    exit();
}

require_once '../controllers/customer_controller.php';

$email = $_POST['email'];
$password = $_POST['password'];
$role = $_POST['role'];

$user_id = login_customer_ctr($email)['customer_id'];

if ($user_id) {
    $response['status'] = 'success';
    $response['message'] = 'Logged in successfully';
    $response['user_id'] = $user_id;

    // setting session vars of user
    $_SESSION['email'] = $email;
    $_SESSION['password'] = $password;
    $_SESSION['role'] = $role;
} else {
    $response['status'] = 'error';
    $response['message'] = 'Failed to log in';
}

echo json_encode($response);