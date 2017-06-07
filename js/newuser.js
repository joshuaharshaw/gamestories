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
function showForm (e) {

	$(`#${e.target.dataset.formType}`).css('display', "block");
}	

function hideForm (e) {

 	$(`#${e.target.dataset.formType}`).css('display', "none");
}	

//Add event listeners to parameter form buttons
$('.btn-add').click(showForm);

$('.closeButton').click(hideForm);


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

	$.ajax({
	  type:'GET', 
	  url:'http://localhost:1234/showparam.php',
	  data:{param:`${param}`, typeID: `${typeID}`},
	  complete: function (r) {
	  		$('#target-project').html(r.responseText);
	  },
	  error:errFunc
	})
}

$(document).on('click', '.param-item', showParameter);

//-----------------Helper Functions and other miscellaneous code-----------------------

function errFunc () { //Error Function: Handle errors. Add actual functionality later.

	console.log("You failed!!"); 
}