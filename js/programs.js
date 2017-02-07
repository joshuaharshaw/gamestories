const programs = [
  {name: "Astral Might", craft:[], statement:"To Reuse so that we may go further."},
  {name: "Astral Reach", craft:[], statement:"To reach beyond Kerbin for all Kerbalkind"},
  {name: "First Steps", craft:[], statement:"To explore that which is closest to us."},
              ];


var count= 0;

const constructPrograms = programs.forEach((program) => {
             
         const item = document.createElement('li');

         item.innerHTML = 
                 ` 
             <div class="program">
              <img src="#" width="100" height="100" id="img-thumb"></img>
              <div class="program-content">
                <h1>${program.name}</h1>
                <span>Type: ${program.type}</span> |
                <span>Program: ${program.program}</span> 
                <p>Description: ${program.desc}</p>
              </div>
              <div class="xfer-program" data-index="${count}">
                  <span class="glyphicon glyphicon-open"></span>
              </div>
         </div>
             </div>
              <hr />
             `;


   			 const target = document.getElementById('program-list');

        
   		   target.appendChild(item);
          
          count++
             });


function showProgram (e) {
 const viewport = document.getElementById('viewport');
      
 const targetIndex = e.target.dataset.index;
    
  viewport.innerHTML = 
        `
  <div id="program-port">
     <h1 id="port-program"><i>Space Program:</i> ${programs[targetIndex].name}</h1>
     <img src="#" width="1100" height="450" id="img-port"></img>
     <div class="craft-content">
        <span>Associated Craft: ${programs[targetIndex].craft}</span> |
        <span>Program: ${programs[targetIndex].program}</span> 
        <p class="port-desc">Statement: "${programs[targetIndex].statement}"</p>
     </div>
   </div>
        `;
}

const transferProgram = document.getElementsByClassName('xfer-program');

for (i = 0; i < transferProgram.length; i++) {
    transferProgram[i].addEventListener('click', showProgram);
}
