<?php

require_once '../settings/db_class.php';

/**
 * 
 */
class Category extends db_connection
{
    private $cat_id;
    private $cat_name;

    public function __construct($cat_id = null)
    {
        parent::db_connect();
        if ($cat_id) {
            $this->cat_id = $cat_id;
            $this->loadCategory();
        }
    }

    private function loadCategory($cat_id = null)
    {
        if ($cat_id) {
            $this->cat_id = $cat_id;
        }
        if (!$this->cat_id) {
            return false;
        }
        $stmt = $this->db->prepare("SELECT * FROM customer WHERE cat_id = ?");
        $stmt->bind_param("i", $this->cat_id);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_assoc();
        if ($result) {
            $this->cat_name = $result['cat_name'];
        }
    }

    public function createCategory($n)
    {
        $stmt = $this->db->prepare("INSERT INTO categories (cat_name) VALUES (?)");
        $stmt->bind_param("ssssi", $n);
        if ($stmt->execute()) {
            return $this->db->insert_id;
        }
        return false;
    }

    public function get($name)
    {
        $stmt = $this->db->prepare("SELECT * FROM categories WHERE cat_name = ?");
        $stmt->bind_param("s", $name);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }
}
