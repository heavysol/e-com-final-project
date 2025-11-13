<?php

include '../controllers/category_controller.php';

echo "dites pas putain";
$cats = get_all_cat_ctr();
header('Content-Type: application/json');
echo json_encode($cats);

?>