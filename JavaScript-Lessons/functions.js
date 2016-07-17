/*====== Intro ======*/

/*var speed = 65;

if (speed > 80) console.log("Slow down!");
else console.log("Drive safe!");*/

/*====== A function looks like: ======*/

/*var divideByThree = function (number) {
	var val = number / 3;
	document.write(val);
};

divideByThree(15);*/

/*====== Function syntax ======*/

/*var greeting = function (name) {
	console.log("Great to see you," + " " + name);
};

greeting("Ioancho");*/

/*====== How does function work? ======*/

/*var foodDemand = function (food)  {
	console.log("I want to eat" + " " + food);
};

foodDemand("Pizza");*/

/*====== Don't repeat yourself (D.R.Y) ======*/

/*var orangeCost = function (price) {
	console.log(price * 5);
};

orangeCost(4.50);*/

/*===== Return keyword ======*/

/*var timesTwo = function(number) {
	return number * 2;
};

var newNumber = timesTwo(4);
console.log(newNumber);*/

/*====== Functions, return and if / else ======*/

/*var quarter = function (number) {
	return number / 4;
};

if (quarter(12) % 3 === 0) console.log("The statement is true");
else console.log("the statement is false");*/

/*====== Functions with two parameters ======*/

/*var perimeterBox = function (length, width) {
	return (length + width) * 2;
};

var result = perimeterBox(3, 5);
console.log(result);*/

/*====== Global variables vs local variables ======*/

/*var my_number = 7; // this has global scope

var timesTwo = function(number) {
	var my_number = number * 2;
	console.log("Inside the function my_number is: " + my_number);
};

timesTwo(9);

console.log("Outside the function my_number is: " + my_number);*/

/*====== Function recap ======*/

/*var nameString = function (name) {
	return "Hi, I am" + " " + name;
};

console.log(nameString("Ioan"));*/

/*====== Functions & if / else ======*/

/*var sleepCheck = function (numHours) {
	if (numHours >= 8) {
		return "You're getting plenty of sleep! Maybe even too much!";
	} else {
		return "Get some more shut eye!";
	}
};

console.log(sleepCheck(10));*/

/*====== Build "Rock, paper, scissors" Game ======*/

