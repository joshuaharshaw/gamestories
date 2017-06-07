<?php 

// Establish connection to the server
$conn = mysqli_connect("localhost", "root", "sqlbeast", "gamestories");

// Check for errors
if (mysqli_connect_error()) {
	die("Could not connect to database! Be the system admin to see why!");
}

// Statement Preparation
$stmt = $conn->prepare("INSERT INTO projects (MISSION_NAME, MISSION_CRAFT MISSION_TYPE, MISSION_CREW, MISSION_DESC) VALUES (?, ?, ?, ?, ?)");

$stmt -> bind_param("sssss", $mi_name, $mi_craft, $mi_type, $mi_crew, $mi_desc);

$stmt -> execute();

// Set variables for above statement and execute
$mi_name= $_POST['mi_name'];
$mi_craft= $_POST['mi_craft'];
$mi_type= $_POST['mi_type'];
$mi_crew= $_POST['mi_crew'];
$mi_desc= $_POST['mi_desc'];

$stmt->execute();

// Send the user back to the page they were on. 
header("Location: {$_SERVER['HTTP_REFERER']}");

// Close connection and statement. 
$stmt->close();
$conn->close();

 ?>