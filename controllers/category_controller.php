<?php

require_once '../classes/customer_class.php';

function add_category_ctr($kwargs) {
    $cat = new Category();
    $cat->createCategory($kwargs);
}

function get_all_cat_ctr() {
    $cat = new Category();
    return $cat->getAll();
}

?>