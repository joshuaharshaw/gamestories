function showForm (e) {

		document.getElementById(e.target.dataset.formType).style.display= "block";
}	

function hideForm (e) {

		console.log(e.target.dataset.formType);

		document.getElementById(e.target.dataset.formType).style.display= "none";
}	

const showProject = document.getElementById('showProject');
const showCraft = document.getElementById('showCraft');
const showMission = document.getElementById('showMission');

showProject.addEventListener('click', showForm);
showCraft.addEventListener('click', showForm);
showMission.addEventListener('click', showForm);


const closeButton = document.getElementsByClassName('closeButton');

for (i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', hideForm);
}

