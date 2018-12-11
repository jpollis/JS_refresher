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

var firstName = "John";
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

*/

/**********************************************
* Operator Precedence

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

*/

/**********************************************
* coding challenge


var markMass, markHeight, johnMass, johnHeight;
markMass = 79;
markHeight = 2;
johnMass = 75;
johnHeight = 1.8;

var johnBmi = johnMass / johnHeight * johnHeight;
var markBmi = markMass / markHeight * markHeight;

var markHigherBmi = markBmi > johnBmi;
console.log("Is Mark's BMI higher than John's? " + markHigherBmi);

*/

/**************************************************
* If/else statements

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

*/

/**************************************
* Boolean logic


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

*/

/*****************************************
* Truthy and Falsy values and equality operators


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

*/

/*************************************
* Functions


function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn);

//modified exercise for retirement calculator
function yearsUntilRetirement(firstName, birthYear) {
	var age = calculateAge(birthYear);
	var retirement = 65 - age;
	//adding if/else statement to check if retirement var is a negative number.
	//converting to positive number if negative
	if (retirement < 0) {
		retirement *= -1
		console.log(firstName + " should have retired " + retirement + " years ago.");
	} else {
	console.log(firstName + " retires in " + retirement + " years.");
	}
}

yearsUntilRetirement("Joe", 1948);

// switch statement version of modified exercise above
function yearsUntilRetirement(firstName, birthYear) {
	var age = calculateAge(birthYear);
	var retirement = 65 - age;
	switch (true) {
		case retirement < 0:
		  retirement *= -1
		  console.log(firstName + " should have retired " + retirement + " years ago.");
		  break;
		case retirement === 0:
		  console.log(firstName + " should retire this year");
		  break;
		default:
		  console.log(firstName + " retires in " + retirement + " years.");
	}
}

yearsUntilRetirement("Joe", 1985);

*/

/******************************************************
* Function statements and expressions


// function declaration
// function name(argument) {}

// function expression
var whatDoYouDo = function(job, firstName) {
	switch(job) {
		case 'teacher':
		  return firstName + ' teaches kids to code';
		case 'driver':
		  return firstName + ' drives people';
		case 'designer':
		  return firstName + ' designs websites';
		default:
		  return firstName + ' does something else.';
	}
}

console.log(whatDoYouDo('teacher', 'Joe'));

*/

/*****************************************
* Arrays


// initialize new array
var names = ['John', 'Joe', 'Mike'];
var years = new Array(1990, 1938, 1989);

console.log(names[0]);
console.log(names.length);
console.log(names[2]);

// mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// made function to add element to last position of array
var addName = function(name) {
	names[names.length] = name;
	console.log(names);
}


addName('leah');
addName('greg');
addName('Matt');
console.log(names);

// different data types

var john = ['John', 'Smith', 1990, 'designer', false];
var joe = ['Joe', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

// function to check for string and index in array
var checkJobIndex = function(nameArray, job) {
	
var isJob = nameArray.indexOf(job) === -1 ? nameArray[0] + ' is not a ' + job : nameArray[0] + ' is a ' + job 
+ '. The index is: ' + nameArray.indexOf(job) ;

return isJob;

}

console.log(checkJobIndex(joe, 'teacher'));

*/

/*********************************************
* Objects and Properties


// Object literal
var john = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

*/

/****************************
* Objects and Methods
*/

// my way using current year as the argument
var john = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function(currentYear) {
		this.age = currentYear - this.birthYear;
	}
};

john.calcAge(2018);
console.log(john);

// using 'this' keyword (doing it the course's way with 2018 in the function)
var john = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function() {
		return 2018 - this.birthYear;
	}
};

john.age = john.calcAge();

console.log(john.age);

// setting the key in the function
var john = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function() {
		this.age = 2018 - this.birthYear;
	}
};

john.calcAge();
console.log(john);














