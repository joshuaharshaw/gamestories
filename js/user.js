const ships = [
  {name: "Ursa", type:"Spaceplane", program:"Astral Might", desc:"None now."},
  {name: "Eurobird", type:"Spaceplane", program:"Astral Might", desc:"None now."},
  {name: "Manta", type:"Mothership", program:"Astral Reach", desc:"None now."},
              ];

var count= 0;

const constructCraft = ships.forEach((craft) => {
             
         const item = document.createElement('li');

         item.innerHTML = 
                 ` 
             <div class="craft">
              <img src="#" width="100" height="100" id="craft-thumb"></img>
              <div class="craft-content">
                <h1>${craft.name}</h1>
                <span>Type: ${craft.type}</span> |
                <span>Program: ${craft.program}</span> 
                <p>Description: ${craft.desc}</p>
              </div>
              <div class="xfer-craft" data-index="${count}">
                  <span class="glyphicon glyphicon-open"></span>
              </div>
         </div>
             </div>
              <hr />
             `;


   			 const target = document.getElementById('craft-list');

        
   		   target.appendChild(item);
          
          count++
             });


function showCraft (e) {
 const viewport = document.getElementById('viewport');
      
 const targetIndex = e.target.dataset.index;
    
  viewport.innerHTML = 
        `
  <div id="craft-port">
     <h1 id="port-craft">${ships[targetIndex].name}</h1>
     <img src="#" width="1100" height="450" id="img-port"></img>
     <div class="craft-content">
        <span>Type: ${ships[targetIndex].type}</span> |
        <span>Program: ${ships[targetIndex].program}</span> 
        <p class="port-desc">${ships[targetIndex].desc}</p>
     </div>
   </div>
        `;
}

const transferCraft = document.getElementsByClassName('xfer-craft');

for (i = 0; i < transferCraft.length; i++) {
    transferCraft[i].addEventListener('click', showCraft);
}


function clearPort () {
    const viewport = document.getElementById('viewport');

    viewport.innerHTML= "";
}


document.getElementById('clear-button').addEventListener('click', clearPort);