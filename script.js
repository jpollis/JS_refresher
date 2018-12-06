/***********************
*variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// these are the variable naming rules
var years = 3;
var johnMark = 'John and Mark';
*/

/***********************
*variable mutation and type coercion
*/

/*var firstName = "John";
var age = 28;

//type coercion
console.log(firstName + " is " + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '
 + job + '. Is he married? ' + isMarried); 

 // variable mutation
 age = 'twenty eight';
 job = 'driver';
 
 alert(firstName + ' is a ' + age + ' year old '
 + job + '. Is he married? ' + isMarried); 

 var lastName = prompt("what is his last name?");
 console.log(firstName + ' ' + lastName);
*/

/*******************************************
* Basic operators
*/

var year, yearJohn, yearMark;
year = 2018;
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = year - 28;
yearMark = year - 33;

console.log(yearJohn);

console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof ageJohn);


/**********************************************
* Operator Precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More Operators
// x = x * 2; is the same as...
x *= 2;
console.log(x);
x += 10;
console.log(x);
// x += 1; is the same as...
x++;


/**********************************************
* coding challenge
*/

var markMass, markHeight, johnMass, johnHeight;
markMass = 79;
markHeight = 2;
johnMass = 75;
johnHeight = 1.8;

var johnBmi = johnMass / johnHeight * johnHeight;
var markBmi = markMass / markHeight * markHeight;

var markHigherBmi = markBmi > johnBmi;
console.log("Is Mark's BMI higher than John's? " + markHigherBmi);


/**************************************************
* If/else statements
*/

var firstName = 'John';
var civilStatus = 'single';

var isMarried = true;
if (isMarried) {
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' will hopefully marry soon');
}


var markMass, markHeight, johnMass, johnHeight;

markMass = 79;
markHeight = 2;

johnMass = 90;
johnHeight = 1.8;

var johnBmi = johnMass / johnHeight * johnHeight;
var markBmi = markMass / markHeight * markHeight;

if (markBmi > johnBmi) {
	console.log("Mark's BMI is higher than John's");
} else {
	console.log("John's BMI is higher than Mark's");
}
// var markHigherBmi = markBmi > johnBmi;
// console.log("Is Mark's BMI higher than John's? " + markHigherBmi);


/**************************************
* Boolean logic
*/

/*
var firstName = 'John';
var age = 23;

if (age < 13) {
	console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20){
	console.log(firstName + ' is a teenager');
} else if (age >= 20 && age <= 30) {
	console.log(firstName + ' is a young man');
} else {
	console.log(firstName + ' is a man');
}
*/

/******************************
* The Ternary Operator and Switch Statements
*/

// Ternary operator
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');


var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


//Switch statement
var job = 'cop';
switch (job) {
	case 'teacher':
	  console.log(firstName + ' teaches kids how to code');
	  break;
	case 'driver':
	  console.log(firstName + ' drives uber');
	  break;
	case 'designer':
	  console.log(firstName + ' designs websites');
	  break;
	default:
	  console.log(firstName + ' does something else.');
}

/*
var firstName = 'John';
var age = 23;

if (age < 13) {
	console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20){
	console.log(firstName + ' is a teenager');
} else if (age >= 20 && age <= 30) {
	console.log(firstName + ' is a young man');
} else {
	console.log(firstName + ' is a man');
}
*/

var firstName = 'John';
var age = 31;

switch (true) {
	case age < 13:
	  console.log(firstName + ' is a boy');
	  break;
	case age >= 13 && age < 20:
	  console.log(firstName + ' is a teenager');
	  break;
	case age >= 20 && age <=30:
	  console.log(firstName + ' is a young man');
	  break;
	default:
	  console.log(firstName + ' is a man.');
}



/*****************************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN 
// truthy values: all values that are not falsy

var height;

height = 23;

if (height || height === 0) {
console.log('variable is defined');
} else {
	console.log('variable has not been defined');
}


// Equality operators

if (height === '23') {
	console.log('the == operator does type coercion');
}

var johnTeam, mikeTeam;

var johnTeam = (89 + 120 + 103) / 3;
var mikeTeam = (89 + 120 + 103) / 3;
var maryTeam = (89 + 120 + 103) / 3;

switch (true) {
	case johnTeam > mikeTeam && johnTeam > mikeTeam:
	  console.log("John's team scored more on average than Mary and Mike's team, with an average of " + johnTeam + " points per game");
	  break;
	case mikeTeam > johnTeam && mikeTeam > maryTeam:
	  console.log("Mike's team scored more on average than John's team, with an average of " + mikeTeam + " points per game");
	  break;
	case maryTeam > johnTeam && maryTeam > mikeTeam:
	  console.log("Mary's team scored more on average than Mike and John's team, with an average of " + maryTeam + " points per game");
	  break;
	default:
	  console.log("John, Mary, and Mike's team scored on average the same amount of points");
}
























