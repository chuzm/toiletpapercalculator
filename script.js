function calculateRolls() {
	const resultrolls = document.getElementById('resultrolls').value;
	const resultdays = document.getElementById('resultdays').value;
	const resultppl = document.getElementById('resultppl').value;
	const resultrdays = document.getElementById('resultrdays').value;


	const paperDays = resultrolls*resultrdays/resultppl;
	const percentage = Math.round(paperDays/resultdays*100);
	const percentageDiv = document.getElementById('survival');

	if (percentage>=100){
		var emoji = '😁';
		percentageDiv.innerText = 'Your survival rate will be:  ' + percentage + '%  of your Quarantine.  ' + emoji;	
	} else{
		var emoji = '💩';
		percentageDiv.innerText = 'Your survival rate will be:  ' + percentage + '%  of your Quarantine.  '+ emoji;
	}	
};

var rollsSlider = document.getElementById("resultrolls");
var rollsoutput = document.getElementById("rolls");
rollsoutput.innerHTML = rollsSlider.value;
rollsSlider.oninput = function() {
  rollsoutput.innerHTML = this.value;
  calculateRolls();
}

var daysSlider = document.getElementById("resultdays");
var daysoutput = document.getElementById("days");
daysoutput.innerHTML = daysSlider.value;
daysSlider.oninput = function() {
  daysoutput.innerHTML = this.value;
  calculateRolls();
}

var pplSlider = document.getElementById("resultppl");
var pploutput = document.getElementById("ppl");
pploutput.innerHTML = pplSlider.value;
pplSlider.oninput = function() {
  pploutput.innerHTML = this.value;
  calculateRolls();
}

var rdaysSlider = document.getElementById("resultrdays");
var rdaysoutput = document.getElementById("rdays");
rdaysoutput.innerHTML = rdaysSlider.value;
rdaysSlider.oninput = function() {
  rdaysoutput.innerHTML = this.value;
  calculateRolls();
}




