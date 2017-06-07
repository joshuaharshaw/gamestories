<?php 

//Establish Server connection and handle errors. 
$conn = mysqli_connect("localhost", "root", "sqlbeast", "gamestories");

if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}


//Code related to Initial loading of projects into the "Craft" form.
$projects = "";

$sql= "SELECT * FROM projects"; //Get related projects

$labor = mysqli_query($conn, $sql);

while ($fruits = mysqli_fetch_array($labor)) {
 $projects .= "<option value='{$fruits[0]}'>{$fruits[1]}</option>"; 
 //Loop: Build selected projects into finished HTML
}

echo $projects; //Echo finished HTML!!
 ?>