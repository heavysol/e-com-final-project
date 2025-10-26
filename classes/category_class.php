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
        $stmt->bind_param("s", $n);
        if ($stmt->execute()) {
            return $this->db->insert_id;
        }
        return false;
    }

    public function createCategoryForm() {
        echo "<button onclick = 'off()'> Exit form </button>";
        echo "<form>";
        echo "<h1> Add/update category </h1>";
        echo "<label for='cname'>Name:</label>";
        echo "<input type='text' id='cname' name='cname'>";
        echo "<button type='submit' id = 'submitBtn' onclick = 'validateFormInput()'>Submit</button>";
        echo "</form>";
    }

    // get category
    public function get($name)
    {
        $stmt = $this->db->prepare("SELECT * FROM categories WHERE cat_name = ?");
        $stmt->bind_param("s", $name);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    // get all categories
    public function getAll() {
        $result = $this->db->prepare("SELECT * FROM categories");
        $result->execute();
        if ($result->num_rows > 0){
            // Start table and add table headers
            echo "<table border='1'>";
            echo "<tr> <th>Id</th> <th>Category name</th> </tr>";
            
            // output data of each row
            while($row = $result->fetch_assoc()){
                echo "<tr>";
                echo "<td>".$row["cat_id"]."</td>";
                echo "<td>".$row["cat_name"]."</td>";
                echo "<td> <button onclick = 'update(" . $row['cat_id'] . "" . ")'> Update </button> <button onclick = 'del(" . $row['cat_id'] . "" . ")'> Delete </button> </td>";
                echo "</tr>";                  
            }
            echo "<tr>";
            echo "<td> <button onclick = 'add()'> Create category </button> </td>";
            echo "</tr>";
            echo "</table>";
        } else {
            echo "<h1>0 results</h1>";
            echo "<button onclick = 'add()'> Create category </button>";
        }
    }

    // delete category
    public function delete($n) {
        $stmt = $this->db->prepare("DELETE FROM categories WHERE cat_name = ?");
        $stmt->bind_param("s", $name);
        $stmt->execute();
    }

    public function update($oldn, $newn) {
        $stmt = $this->db->prepare("UPDATE categories SET cat_name = ? WHERE cat_name = ?");
        $stmt->bind_param("ss", $newn, $oldn);
        $stmt->execute();
    }
}
