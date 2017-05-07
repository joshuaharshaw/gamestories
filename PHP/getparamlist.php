<?php 
//Instantiate and define key variables needed for the SQL Query.
$param = $_GET['param']; 

$db = strtolower($param). "s";

//Establish Server connection and handle errors. 
$conn = mysqli_connect("localhost", "root", "sqlbeast", "gamestories");
if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}

//Construct SQL Query and execute, storing the result in a variable $result. 
$sql= "SELECT * FROM {$db}"; //TO solve: make query work with this: WHERE USER_ID = {$userID}

$result = mysqli_query($conn,$sql);

// Construct ul of all parameter items. 
$fullList = "";

while ($row = mysqli_fetch_array($result)) {
    $fullList .= "<a href='#' data-typeID ='{$row[0]}' class='param-item'><li>{$row[1]}</li></a><hr>";
}

// Construct finished element to be inserted. 
$newList = 
"<h3 id='cats-head'>{$param} List</h3>
    <hr />
    <ul>
    {$fullList}
    </ul>";

//echo finished element, you are done!!
echo $newList;
 ?>