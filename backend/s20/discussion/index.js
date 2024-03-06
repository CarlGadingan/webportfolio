console.log("Hello World");

// [SECTION] Variables:

// It is used to contain data
// Any information that is used by an application is stored in what we call a "memory"
// When we create variables, certain portions of a device's memory is given a "name" that we call "variables"
// This makes it easier for us to associate information in our devices to actual "names" about information

// Declaring variables

// Declaring variables  -  this tells our device that a variable name is created and is ready to store data
// Declaring a variable without giving it a value will automatically assing it with the value of "undefined", meaning the variable's value was "not defined"

// Syntax

// let is a keyword that is usually used in declaring a variable
let myVariable

console.log(myVariable);

let hello;
console.log(hello);


/* Guides in writing variables:
    1. Use the 'let' keyword followed by the variable name of your choosing and use the assignment operator (=) to assign a value.
    2. Variable names should start with a lowercase character, use camelCase for multiple words.
    3. For constant variables, use the 'const' keyword.
    4. Variable names should be indicative (or descriptive) of the value being stored to avoid confusion.

Best practices in naming variables:

    1. When naming variables, it is important to create variables that are descriptive and indicative of the data it contains.

        let firstName = "Michael"; - good variable name
        let pokemon = 25000; - bad variable name

    2. When naming variables, it is better to start with a lowercase letter. We usually avoid creating variable names that starts with capital letters. Because there are several keywords in JS that start in capital letter.

        let FirstName = "Michael"; - bad variable name
        let firstName = "Michael"; - good variable name

    3. Do not add spaces to your variable names. Use camelCase for multiple words, or underscores.

        let first name = "Mike";

    camelCase is when we have first word in small caps and the next word added without space but is capitalized:

        lastName emailAddress mobileNumber

    Underscores sample:

    let product_description = "lorem ipsum"
    let product_id = "250000ea1000"
*/




// Declaring and initializing variables
// Initializing variables - the instance when a variable is given its starting value
let productName = 'desktop computer';
console.log(productName);

let productPrice = 18999;
console.log(productPrice);

// This is the best way to prevent applications from suddenly breaking or performing in ways that are not intended
const interest = 3.539;

// let - we usually use let if we want to reassing the values in our variable

// Reassigning variable values
// Reassigning a variable means changing it's initial or previous value into another value

// in our example, we already initialized a value with the use of let in productName. Let's try to re assign it with the new value
productName = 'Laptop';
console.log(productName);

// let variable cannot be re-declared within its scope
let friend = 'kate';
friend = 'jane';
console.log(friend)

// this will return an error
// let friend	= 'kate';
// let friend = 'jane'; 
//error: identifier 'friend' has already been declared

// values of const cannot be changed and will return an error
// interest = 4.489;

// Reassinging variables vs initializing variables
// Declares a variable first
let supplier;
// Initialization is done after the variable has been declared
// This is considered as initialization because it is the first time that a value has been assinged to a variable
supplier = "John Smith Tradings";

// This is considered as reassignment because it's initial value was already declared
supplier = "Zuitt Store";
console.log(supplier);

// [SECTION] Data types

// Strings
// Strings are a series of characters that create a word, a phrase, a sentence or anything related to creating text
// Strings in JavaScript can be written using either a single ('') or double("") quote
let country = 'Philippines';
let province = "Metro Manila";

// Concatenating strings
// Multiple string values can be combined to create a single string using the + symbol
let fullAddress = province + ', ' + country;
console.log(fullAddress);

let greeting = "I live in the " + country;
console.log(greeting);


// The escape character (\) in strings in combination with other characters can produce different effects
// "\n" refers to creating a new line in between text
let mailAddress = 'Metro Manila\n\nPhilippines';
console.log(mailAddress);

// Using double quotes along with the single quotes can allow us to easily include quotes in texts without using the escape character
let message = "John's employees went home early";
console.log(message);

message = 'John\'s employees went home early';
console.log(message); 

// Numbers
// Integers/Whole Numbers
let headcount = 26;
console.log(headcount);

// Decimal Numbers/Fractions
let grade = 98.7;
console.log(grade);

// Exponential Notation
let planetDistance = 2e10;
console.log(planetDistance);

console.log("John's grade last quarter is " + grade);

// Boolean
// Boolean values are normally used to store values relating to the state of certain things
// This will be useful in further discussions about creating logic to make our application respond to certain scenarios
let isMarried = false;
let inGoodConduct = true;
console.log("isMarried: " + isMarried);
console.log("inGoodConduct: " + inGoodConduct);

// Arrays
// Arrays are a special kind of data type that's used to store multiple values
// Arrays can store different data types bit is normally used to store different data types

// Similar data types
let grades = [98.7, 92.1, 90.2, 94.6];
console.log(grades);

// Different data types
let detail = ["John", "Smith", 32, true];
console.log(detail);

// Objects
// Objects are another special kind of data type that's used to mimic real world objects/items
// They're used to create complex data that contains pieces of information that are relevant to each other
// Every individual piece of information is called a property of the object

let person = {
	fullName: 'Juan Dela Cruz',
	age: 35,
	isMarried: false,
	contact: ["+63917 123 4567", "8123 4567"],
	address: {
		houseNumber: '345',
		city: 'Manila'
	}
}

console.log(person);

let myGrades = {
	firstGrading: 98.7,
	secondGrading: 92.1,
	thirdGrading: 90.2,
	fourthGrading: 94.6
}

console.log(myGrades);

console.log(typeof myGrades);
console.log(typeof message);

// Null
// It is used to intentionally express the absence of a value in a variable/declaration/initialization
// Null simply means that a data type was assinged to a variable but it does not hold any value/amount
let spouse = null;

// Undefined
// Represents the state of a variable that has been declared but without an assinged value
let fullName;
console.log(fullName);

// Undefined vs Null
// One clear difference between undefined and null is that for undefined, a variable was created but was not provided a value
// Null means that a certain variable was created and was assigned a value that does not hold any value/amount

let varA = null;
console.log(varA);

let varB;
console.log(varB);


