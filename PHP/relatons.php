<?php 
//Instantiate key variables for following operations
$typeID= $_GET['typeID'];

// Statement Preparation
$sql = "SELECT * FROM crafts WHERE PROJECT_ID = {$typeID}";

$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_array($result); // is this the correct command to display multiple rows? Probably not. 


print_r($_POST);


// Send the user back to the page they were on. 
header("Location: {$_SERVER['HTTP_REFERER']}");


 ?>
{row[1]}


if ($param == 'Craft') {
 $topBlock = 
 "<div id="top-block">
      <img src="#" width="512px" height="512px" id="img-craft"></img>
      <div id="top-content">  
        <h1>{row[1]}</h1>  
        <p>
          Part of project: <span>{row[2]}</span> <br />
          Variants: None Currently
        </p>
        
        <ul id="craft-stats">
          <h3>Craft Stats</h3>
          <li>Dimensions (LxWxH) : {row[5]}x{row[6]}x{row[7]}m</li>
          <li>Mass (Dry): {row[8]}t</li><li>Mass (Wet): {row[9]}t</li>
          <li>Maximum Crew: {row[10]} Kerbals</li><li>Part Count: {row[11]} parts</li>
        </ul>
      </div>    
     </div>";	
}




if ($param == 'Project') {
	
	// SQL Query to retrieve relevant craft
	$cr_sql = "SELECT * FROM crafts WHERE PROJECT_ID = {$typeID}";
	
	$labor = mysqli_query($conn, $cr_sql);


	while ($fruits = mysqli_fetch_array($labor)) {
			$craft .= "<span class="projCraft" data->{$fruits[1]} </span>"
	}

    $topBlock = 

      "<div id='top-block'>
     <img src='#' width='250px' height='150px' id='img-craft'></img>
   	 <div id='top-content'>  
      <h1>{$row[1]}</h1>  
      <p>
        Project Statement: <i>{$row[3]}</i> <br />
        Associated Craft: {$craft}    
      </p>
     </div>  
    </div>"

	
}
