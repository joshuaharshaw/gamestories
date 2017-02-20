function makeCraft () {
	const viewport = document.getElementById('viewport');

	viewport.innerHTML = 

	`
     <form method="post" action="handle.php" class="form-group material-sm ">
      
        <h2>New Craft</h2>
      
        <!-- Craft Name-->
      	<label for="craft"> Craft Name <br /><input class="form-control" type="text" name="craft" ></input></label>
      
      	<br />
        <!-- Craft Type-->
        <label for="type">Craft Type <br />
          <select class="form-control" name="type">
            <option value="lifter">Lifter</option>
            <option value="ship">Ship</option>
            <option value="plane">Plane</option>
            <option value="lander">Lander</option>
            <!-- Add Option to be able to add custom vehicle types-->
          </select>
        </label>

	      <!-- Craft Program-->
	      <label for="program"> Craft Program <br />
	        <select class="form-control" name="program">
	          <option value="astral-might">Astral Might</option>
	          <option value="astral-reach">Astral Reach</option>
	          <option value="first-steps">First Steps</option>
	        </select>
	      </label>

	      <br />
	      <!-- Craft Description-->
	      <label for="describe"><textarea class="form-control" type="textarea" rows="4" cols="50" name="describe" placeholder="Description/Notes Here" ></textarea></label>

	      <br />

	      <!-- Submit Button-->
	      <label for="submit"><input class="btn btn-default" type="submit" name="mission" value="Submit Log"></input></label>
    </form>
	`;
}

function makeProgram () {

	const viewport = document.getElementById('viewport');

	viewport.innerHTML = 

	`
     <form method="post" action="handle.php" class="form-group material-sm">
      
        <h2>New Space Program</h2>
        <hr />

      <label for="program"> Program Name <br /><input class="form-control" type="text" name="program" ></input></label>
      
      <br />
        <label for="craft">Program Craft <br /><input class="form-control" type="text" name="craft" ></input></label>
      <br />
      <label for="statement"> Program Mission Statement <br /><input class="form-control" type="text" name="statement" ></input></label>
      <br />
      <label for="describe"><textarea class="form-control" type="textarea" rows="4" cols="50" name="describe" placeholder="Description/Notes Here" ></textarea></label>

    <br />

      <label for="submit"><input class=" btn btn-default" type="submit" name="program" value="Submit Program"></input></label>
    </form>
	`;
}


function makeMission () {

	const viewport = document.getElementById('viewport');

	viewport.innerHTML = 

	`
	<form method="post" action="handle.php" class="form-group material-sm">
      
        <h2>New Mission Report</h2>
        <hr />

      <label for="mission"> Mission Name <br /><input class="form-control" type="text" name="mission" ></input></label>
      
      <br />
        <label for="craft">Mission Craft <br /><input class="form-control" type="text" name="craft" ></input></label>
      <br />
      <label for="type"> Mission Type <br /><input class="form-control" type="text" name="type" ></input></label>
      <br />
      <label for="crew">Crew <br /><input class="form-control" type="text" name="crew" ></input></label>
      <br />
      <label for="describe"><textarea class="form-control" type="textarea" rows="4" cols="50" name="describe" placeholder="Description/Notes Here" ></textarea></label>

    <br />

      <label for="submit"><input class=" btn btn-default" type="submit" name="mission" value="Submit Log"></input></label>
    </form>
	`;


}

const craft = document.getElementById('craft');
const program = document.getElementById('program');
const mission = document.getElementById('mission');

craft.addEventListener('click', makeCraft);
program.addEventListener('click', makeProgram);
mission.addEventListener('click', makeMission);