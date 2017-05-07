<?php 

// Establish connection to the server
$conn = mysqli_connect("localhost", "root", "sqlbeast", "gamestories");

// Check for errors
if (mysqli_connect_error()) {
	die("Could not connect to database! Be the system admin to see why!");
}

// Statement Preparation
$stmt = $conn->prepare("INSERT INTO projects (PROJECT_NAME, PROJECT_STATEMENT, PROJECT_DESC) VALUES (?, ?, ?)");

$stmt -> bind_param("sss", $pr_name, $pr_stmt, $pr_desc);

$stmt -> execute();

// Set variables for above statement and execute
$pr_name= $_POST['pr_name'];
$pr_stmt= $_POST['pr_stmt'];
$pr_desc= $_POST['pr_desc'];
$stmt->execute();

// Send the user back to the pages they were on. 
header("Location: {$_SERVER['HTTP_REFERER']}");

// Close connection and statement. 
$stmt->close();
$conn->close();

 ?>