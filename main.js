// Pops up an alert
// alert('Hi');

console.log("Apply directly to the console");

// Prompt gets a value from the user
// var name = prompt("What is your name?");

// You could use a double equal sign for comparison
// But I will think you are a bad person
1 == 1 // true

// Instead you should use a ===
// Because kittens

1 === 1

// Do not use auto incrementing operators
var x = 0;
++x;
x++; // Don't use these ever.
x += 1; // I don't even like this as much

x = x + 1;

// BASIC DATATYPES - primitives

var name = "David";
var age = 31;
var awesome = true;

// We have arrays
var colors = ["red", "green", "blue"];

// We have array methods
colors.push("purple");
colors.pop(); // We MUST invoke methods with (), even if there are no args

// Don't be creepy, and don't leave out semicolons;
// I love cooking, my kids, and pets.

// CONTROL STRUCTURES

var heightInInches = prompt("How tall are you?");
if(heightInInches >= 60) {
  console.log("You may ride");
} else {
  console.log("Come back in a few years");
}

// Sometimes you need multiple statements

var holyNumber = prompt("What number did you count to?");
if(holyNumber > 3) {
  console.log("Four shalt thou not count. Five is right out");
} else if(holyNumber < 3) {
  console.log("Neither count though two or one, excepting that though then proceed to three");
} else {
  console.log("Throw the holy hand grenade");
}









