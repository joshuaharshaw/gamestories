<?php 
//Instantiate and define key variables needed for the SQL Query.
$param = $_GET['param']; 

$db = strtolower($param). "s";

$type = strtoupper($param);

$typeID= $_GET['typeID'];


//Establish Server connection and handle errors. 
$conn = mysqli_connect("localhost", "root", "sqlbeast", "gamestories");
if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}

//Construct SQL Query and execute, storing the result in a variable $result.

$sql= "SELECT * FROM {$db} WHERE {$type}_ID = {$typeID}"; 

$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_array($result);

// Construct finished element to be inserted. 
$newList = 

   "<div id='top-block'>
     <img src='#' width='250px' height='150px' id='img-craft'></img>
   	 <div id='top-content'>  
      <h1>{$row[1]}</h1>  
      <p>
        Project Statement: <i>{$row[3]}</i> <br />
        Associated Craft: <a href='>Ursa</a>, <a href='>Eurobird</a>, <a href='>Wren</a>      
      </p>
     </div>  
    </div>

   <div id='project-gallery'>
   {$fullList}
   </div> 

   <div id='bottom-block'>
     <h1>Description</h1>
     <p>{$row[4]}</p>
   </div>";

//echo finished element, you are done!!
echo $newList;

 ?>





