async function getData() {
    const response = await fetch("../actions/fetch_category_action.php?action=get_all_cat_ctr");
    const data = await response.json();
    console.log(data);

    let html = '<table><tr><td>Id</td><td>Name</td>'
    data.forEach(cat => {
      
    });

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

async function validateFormInput() {
    // getting input data
    let submitBtn = document.getElementById('submitBtn');
    let name = document.getElementById('catName').value;
    const data = {
        name: name
    }

    try {
    const response = await fetch("../admin/category.php", {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Tell PHP you're sending JSON
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Network response was not ok");

    // Parse JSON response from PHP
    const result = await response.json();
    console.log("Response from PHP:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}