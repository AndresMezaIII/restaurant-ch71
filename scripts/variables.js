//single line comments
//console.log(10 + 2) --this is a line of code that will not run because
// it is a comment

/*multi-
line-
comments*/

//strings (data type) are text always wrapped in single quotes or double quotes

//to create a variable we have eto perform some steps:
/*
1. declare it with a name
2. initialize it with a value (optional)
*/

let firstName = "Andy";
//the javascript convention is to use camel case in naming variables

let thisIsAnExampleForAVariable;
thisIsAnExampleForAVariable = "example";
let city = "Chicago";

console.log("Hello World from variables.js");
console.log(city);
console.log(firstName, thisIsAnExampleForAVariable);

//We can update a let variable

firstName = "John";
console.log(firstName);

// Numbers (data type) integers and floating type

let age = 44;
console.log(age);

//Boolean (data type), true or false. booleans represent a condition or state...start boolean variables with is...isName...
let isStudent = true;
isLoggedIn = false;

console.log(isStudent, isLoggedIn);

//Arithmetic operators
let numOne = 10;
let numTwo = 3;
let sum = numOne + numTwo;
let sub = numOne - numTwo;
let mul = numOne * numTwo;
let div = numOne / numTwo;

console.log(sum, sub, mul, div);

console.log("Sum: ", sum);
console.log("Subtraction: ", sub);
console.log("Multiplication: ", mul);
console.log("Division: ", div);
//build strings with variables
//concatenation

console.log("My name is " + firstName + " and I live in " + city);

//template literals use ``

console.log(`My name is ${firstName} and I live in ${city}.`);
