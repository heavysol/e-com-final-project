<?php

include '../controllers/category_controller.php';

$cats = add_category_ctr($kwargs);
echo json_encode($cats);

?>