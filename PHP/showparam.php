<?php 
//Instantiate and define key variables needed for the SQL Query.
$param = $_GET['param']; 

$db = strtolower($param). "s";

$type = strtoupper($param);

$typeID= $_GET['typeID'];

$img = strtolower($param);


//Establish Server connection and handle errors. 
$conn = mysqli_connect("localhost", "root", "sqlbeast", "gamestories");

if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}

//#1 Construct SQL Query and execute, storing the result in a variable $result.

$sql= "SELECT * FROM {$db} WHERE {$type}_ID = {$typeID}"; 

$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_array($result);

// IF statement - "Project" parameter. Used to build Top Block of the finished innerHTML.
if ($param == 'Project') {
  
  // SQL Query to retrieve relevant craft
  $cr_sql = "SELECT * FROM crafts WHERE PROJECT_ID = {$typeID}";
  
  $labor = mysqli_query($conn, $cr_sql);

  $craft = "";

  while ($fruits = mysqli_fetch_array($labor)) {
      $craft .= "<span class='projCraft' data-typeID ='{$typeID}'>{$fruits[1]} </span>";
  }

    $topBlock = 

      "<div id='top-block'>
     <img src='#' width='250px' height='150px' id='img-{$img}'></img>
     <div id='top-content'>  
      <h1>{$row[1]}</h1>  
      <p>
        Project Statement: <i>{$row[3]}</i> <br />
        Associated Craft: {$craft}    
      </p>
     </div>  
    </div>";

    $desc = "{$row[4]}";
}

// IF statement - "Project" parameter. Used to build Top Block of the finished innerHTML.
if ($param == 'Craft') {
 
  $pr_sql = "SELECT * FROM projects WHERE PROJECT_ID = {$row[4]}";

  $pr_labor = mysqli_query($conn, $pr_sql);

  $pr_fruits = mysqli_fetch_array($pr_labor);


 $topBlock = 
 "<div id='top-block'>
      <img src='#' width='512px' height='512px' id='img-craft'></img>
      <div id='top-content'>  
        <h1>{$row[1]}</h1>  
        <p>
          Part of project: <span>{$pr_fruits[1]}</span> <br />
          Variants: None Currently
        </p>
        
        <ul id='craft-stats'>
          <h3>Craft Stats</h3>
          <li>Dimensions (LxWxH) : {$row[5]}x{$row[6]}x{$row[7]}m</li>
          <li>Mass (Dry): {$row[8]}t</li><li>Mass (Wet): {$row[9]}t</li>
          <li>Maximum Crew: {$row[10]} Kerbals</li><li>Part Count: {$row[11]} parts</li>
        </ul>
      </div>    
     </div>"; 

     $desc = "{$row[3]}";
}


$photoList = "There's nothing here! Add some photos to change that!" ; //Complete this bit of code that compiles a full list of pictures associated with the parameter.

// // Construct finished element to be inserted. 
$newList = 

   "{$topBlock}

   <div id='project-gallery'>
      {$photoList}
   </div> 

   <div id='bottom-block'>
     <h1>Description</h1>
     <p>{$desc}</p>
   </div>";

//#2 Construct SQL Query  and execute, storing the result in a variable $result.




//echo finished element, you are done!!
echo $newList;

 ?>





