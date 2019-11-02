var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bg-gradient");
var rgbCode = document.getElementById("gradient_value");


function ChangeGradient(){
	body.style.background =
	 "Linear-Gradient(to right, "
	  + color1.value 
	  +", "
	  + color2.value
	  + ")";
	 rgbCode.textContent = body.style.background + ";";
}

color1.addEventListener("input", ChangeGradient);
color2.addEventListener("input", ChangeGradient);

