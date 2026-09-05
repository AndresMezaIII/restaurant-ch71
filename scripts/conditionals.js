console.log("Conditionals");

//if-statement condition (y/n)
//syntax
//if(condition){
//--code to run if condition is true
//}
// > < == !

let result = 70;

if (result > 60) {
  console.log("You passed the course.");
}

//if-else statement
// ---syntax----
//if(condition){
//--code to run if condition is true
//}else{
//--code to run if condition is false
//}

let points = 90;
if (points > 60) {
  console.log("You won!");
} else {
  console.log("Try again.");
}

let waterTemp = 90;
if (waterTemp >= 100) {
  console.log("The water is boiling.");
} else {
  console.log("The water is not boiling.");
}

//else-if condition
//if(condition){
//--code to run if condition is true
//}else if(condition){
//--code to run if condition is true
//}else{
//--code to run if condition is false
//}

/*let age = 100;
if (age <= 13) {
  console.log("You are a child.");
} else if (age > 13 && age <= 21) {
  console.log("You are a teenager.");
} else if (age > 21 && age <= 54) {
  console.log("You are an adult.");
} else if (age > 54 && age <= 100) {
  console.log("You are a senior.");
} else {
  console.error("Invalid age.");
}*/

/*function checkAge() {
  let age = prompt("Please enter your age: ");
  if (age <= 12) {
    movieTicketPrice = 5;
  } else if (age > 12 && age <= 18) {
    movieTicketPrice = 8;
  } else {
    movieTicketPrice = 10;
  }
  console.log(`The price of your movie is $${movieTicketPrice}.`);
}
checkAge();*/

/*
function getOutfit() {
  let temp = Number(prompt("Enter the current temperature in Celsius: "));
  if (temp <= 15) {
    console.log("You should wear a jacket.");
  } else if (temp >= 15 && weather <= 25) {
    console.log("You should wear a sweater.");
  } else if (temp > 25) {
    console.log("You should wear a t-shirt.");
  }
}
console.log(getOutfit());
*/

let hour = 13;
if (hour >= 12 && hour <= 16) {
  console.log("Lunch time!");
}

let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("The restaurant is closed.");
} else {
  console.log("The restaurant is open.");
}

//boolean parameter
function getGreeting(isVIP) {
  if (isVIP) {
    return "Welcome, valued customer!";
  } else {
    return "Welcome, consider joining our membership.";
  }
}

console.log(getGreeting(true));
console.log(getGreeting(false));

/*let role = prompt("Please enter your role (admin, user, guest): ");

if (role == "Admin") {
  console.log("Full access granted.");
} else if (role == "Editor") {
  console.warn("Limited access granted.");
} else {
  console.error("Restricted; no access!");
}*/

//adjust to perform the calculation
function getDiscount(total) {
  if (total < 15) {
    discount = 0;
  } else if (total >= 15 && total < 30) {
    discount = 5;
  } else if (total >= 30 && total < 50) {
    discount = 10;
  } else if (total >= 50) {
    discount = 15;
  }
  console.log(`Your discount is ${discount}%.`);
}

getDiscount(14);
getDiscount(15);
getDiscount(30);
getDiscount(50);
