var numSquare = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode button event listener
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
			// if(this.textContent === "Easy"){
			// 	numSquare = 3;
			// }else {
			// 	numSquare = 6;
			// }
			reset();
		});
	}

	for (var i = 0; i < squares.length; i++) {
		//add click listeners to the sqaure
		squares[i].addEventListener("click", function(){
			//grab the color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}

	reset();
}


function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquare);
	//pick a new random colors from the array
	pickedColor = pickColor();
	//change color display to match pickedColor
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent =  "New Colors";
	//change colors of the squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}
// easyBtn.addEventListener("click", function(){
// 	h1.style.backgroundColor = "steelblue";
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquare = 3;
// 	colors = generateRandomColors(numSquare);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	h1.style.backgroundColor = "steelblue";
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquare = 6;
// 	colors = generateRandomColors(numSquare);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function(){
	/*//generate all new colors
	colors = generateRandomColors(numSquare);
	//pick a new random colors from the array
	pickedColor = pickColor();
	//change color display to match pickedColor
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent =  "New Colors";
	//change colors of the squares
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";*/
	reset();
});

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each colors to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make empty array, fill array with random colors, return array
	var arr = [];
	//to loop and populate array 
	for (var i = 0; i < num; i++) {
		//pick random color and push into array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256)
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256)

	return "rgb("+ r +", "+g+", "+b+")";
}