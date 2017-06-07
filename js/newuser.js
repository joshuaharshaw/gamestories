<<<<<<< HEAD
//------ Once Document Loaded-------
(function () {
 	
 	$.ajax({
 		type: 'GET',
 		url:'http://localhost:1234/onload.php',
 		complete: function (response) {
 		$('[name="cr_project"]').html(response.responseText);

 		console.log(response.responseText);
 		},
 		error: errFunc
 	});

})();

//------ Logic for the Modal Forms for the Project, Craft, and Mission Parameters-------
=======
// Logic for the Modal Forms for the Project, Craft, and Mission Parameters
>>>>>>> ad1c9f7422259f6149aed83743248cd47655ab6b
function showForm (e) {

	$(`#${e.target.dataset.formType}`).css('display', "block");
}	

function hideForm (e) {

 	$(`#${e.target.dataset.formType}`).css('display', "none");
}	

//Add event listeners to parameter form buttons
$('.btn-add').click(showForm);

$('.closeButton').click(hideForm);


<<<<<<< HEAD
//--Logic for transferring the Project, Craft, and Mission Lists into the Side Parameter Display--
var param

function getParamList(e) {

	var param = e.target.textContent;
	window.param = e.target.textContent;

 	$.ajax({
 		type: 'GET',
 		url:'http://localhost:1234/getparamlist.php',
 		data: { param:`${param}`},
 		complete: function (response) {
 			$('#project-types').html(response.responseText);},
 		error: errFunc
 	});
} 

$('.btn-show').click(getParamList); //Add event listeners to program buttons

//----------------Logic for transferring a target parameter into the main viewport ------------------------

function showParameter(e) {

	var typeID = e.target.dataset.type;

	var param = window.param;

	console.log('Function showParam triggered!!', e.target, typeID);
=======
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
>>>>>>> ad1c9f7422259f6149aed83743248cd47655ab6b

	$.ajax({
	  type:'GET', 
	  url:'http://localhost:1234/showparam.php',
	  data:{param:`${param}`, typeID: `${typeID}`},
<<<<<<< HEAD
	  complete: function (r) {
=======
	  success: function (r) {
>>>>>>> ad1c9f7422259f6149aed83743248cd47655ab6b
	  		$('#target-project').html(r.responseText);
	  },
	  error:errFunc
	})
}

<<<<<<< HEAD
$(document).on('click', '.param-item', showParameter);

//-----------------Helper Functions and other miscellaneous code-----------------------

function errFunc () { //Error Function: Handle errors. Add actual functionality later.

=======
//----------------------------------------
function callBackParams () { //Callback Function: Add event listeners to program buttons

	$('.param-item').click(showParameter);

}


function errFunc () { //Error Function: Handle errors. Add actual functionality later.
>>>>>>> ad1c9f7422259f6149aed83743248cd47655ab6b
	console.log("You failed!!"); 
}