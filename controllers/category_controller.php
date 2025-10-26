<?php

require_once '../classes/customer_class.php';

function add_category_ctr($kwargs) {
    $cat = new Category();
    $cat->addCategory($kwargs);
}

?>