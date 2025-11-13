<!DOCTYPE html>
<html>
<head>
    <!-- NB: recipe-feed.html is in pages folder -->
	<title> Admin Dashboard </title>
	<meta name = 'viewport' content = 'width = device-width, initial-scale = 1.0'>
    <link rel = 'stylesheet' href = '../css/overlay-form.css?v=<?php echo time(); ?>'>
</head>
 
<body onload = 'getData()'>
	<h1> Admin Dashboard </h1>

    <div id = 'overlay'></div>

    <script type = 'module' src = '../js/overlay-form.js?v=<?php echo time(); ?>'></script>
    <script src = '../js/category.js?v=<?php echo time(); ?>'></script>
</body>
</html>