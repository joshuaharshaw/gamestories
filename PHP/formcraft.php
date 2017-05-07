<?php 

// Establish connection to the server
$conn = mysqli_connect("localhost", "root", "sqlbeast", "gamestories");

// Check for errors
if (mysqli_connect_error()) {
	die("Could not connect to database! Be the system admin to see why!");
}

// Statement Preparation
$stmt = $conn->prepare("INSERT INTO projects (CRAFT_NAME, CRAFT_TYPE, CRAFT_DESC) VALUES (?, ?, ?, ?)");

$stmt -> bind_param("sssi", $cr_name, $cr_type, $cr_desc, $cr_program);

$stmt -> execute();

// Set variables for above statement and execute
$cr_name= $_POST['cr_name'];
$cr_type= $_POST['cr_type'];
$cr_desc= $_POST['cr_desc'];
$cr_program= $_POST['cr_program'];
$stmt->execute();

// Send the user back to the page they were on. 
header("Location: {$_SERVER['HTTP_REFERER']}");

// Close connection and statement. 
$stmt->close();
$conn->close();

 ?>