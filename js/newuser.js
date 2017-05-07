// Logic for the Modal Forms for the Project, Craft, and Mission Parameters
function showForm (e) {

	$(`#${e.target.dataset.formType}`).css('display', "block");
}	

function hideForm (e) {

 	$(`#${e.target.dataset.formType}`).css('display', "none");
}	

//Add event listeners to parameter form buttons
$('.btn-add').click(showForm);

$('.closeButton').click(hideForm);


//----------------------------------------

// Logic for transferring the Project, Craft, and Mission Lists into the Side Parameter Display
function getParamList(e) {

	var param = e.target.textContent;

 	$.ajax({
 		type: 'GET',
 		url:'http://localhost:1234/getparamlist.php',
 		data: { param:`${param}`},
 		complete: function (response) {
 			$('#project-types').html(response.responseText);},
 		success: callBackParams,
 		error: errFunc
 	});
} 

$('.btn-show').click(getParamList); //Add event listeners to program buttons


//----------------------------------------

// Logic for transferring a target parameter into the main viewport 

var param = getParamList.param; //set param to the value of the targeted param name from the previous operation above.

function showParameter(e) {

	var param = window.param;

	var typeID = e.target.dataset.typeID;

	console.log('Function showParam triggered!!');

	$.ajax({
	  type:'GET', 
	  url:'http://localhost:1234/showparam.php',
	  data:{param:`${param}`, typeID: `${typeID}`},
	  success: function (r) {
	  		$('#target-project').html(r.responseText);
	  },
	  error:errFunc
	})
}

//----------------------------------------
function callBackParams () { //Callback Function: Add event listeners to program buttons

	$('.param-item').click(showParameter);

}


function errFunc () { //Error Function: Handle errors. Add actual functionality later.
	console.log("You failed!!"); 
}