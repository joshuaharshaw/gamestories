<?php 

// Establish connection to the server
$conn = mysqli_connect("localhost", "root", "sqlbeast", "gamestories");

// Check for errors
if (mysqli_connect_error()) {
	die("Could not connect to database! Be the system admin to see why!");
}

// Statement Preparation
<<<<<<< HEAD
$stmt = $conn->prepare("INSERT INTO crafts (CRAFT_NAME, TYPE_ID, CRAFT_DESC, PROJECT_ID, LENGTH, WIDTH, HEIGHT, MASS_DRY, MASS_WET, CREW, PART_COUNT) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt -> bind_param("sisiiiiiiii", $cr_name, $cr_type, $cr_desc, $cr_program, $cr_length, $cr_width, $cr_height, $cr_dry, $cr_wet, $cr_crew, $cr_parts);
=======
$stmt = $conn->prepare("INSERT INTO projects (CRAFT_NAME, CRAFT_TYPE, CRAFT_DESC) VALUES (?, ?, ?, ?)");

$stmt -> bind_param("sssi", $cr_name, $cr_type, $cr_desc, $cr_program);
>>>>>>> ad1c9f7422259f6149aed83743248cd47655ab6b

$stmt -> execute();

// Set variables for above statement and execute
$cr_name= $_POST['cr_name'];
$cr_type= $_POST['cr_type'];
$cr_desc= $_POST['cr_desc'];
<<<<<<< HEAD
$cr_program= $_POST['cr_project'];
$cr_length= $_POST['cr_length'];
$cr_width= $_POST['cr_width'];
$cr_height= $_POST['cr_height'];
$cr_dry= $_POST['cr_dry'];
$cr_wet= $_POST['cr_wet'];
$cr_crew= $_POST['cr_crew'];
$cr_parts= $_POST['cr_parts'];
$stmt->execute();

print_r($_POST);
=======
$cr_program= $_POST['cr_program'];
$stmt->execute();

>>>>>>> ad1c9f7422259f6149aed83743248cd47655ab6b
// Send the user back to the page they were on. 
header("Location: {$_SERVER['HTTP_REFERER']}");

// Close connection and statement. 
$stmt->close();
$conn->close();

 ?>