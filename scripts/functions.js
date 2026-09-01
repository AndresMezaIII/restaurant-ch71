console.log("Functions JS");
//1. declare fn (create the function)

function login() {
  console.log("Welcome to the system");
}

//2. Call the function in code, console, or from the user

login();

//example 2: Fn with 1 parameter

function logout(user) {
  console.log("Goodbye " + user + ", see you later!");
}

logout("Andy");
logout("Noah");
logout("Cameron");
logout("Angie");
logout("Isaac");

//example 3: 2 or three parameter functions
//template literals or string interpolation's must use a variable, a value, or an expressions such as operations

function gradeExam(student, correctItems, points) {
  let totalPoints = correctItems * points;
  console.log(`${student}'s grade on the exam is: ${totalPoints}`);
}

gradeExam("Andy", 10, 1);
gradeExam("Angie", 9, 1);
gradeExam("Isaac", 8, 1);

function doubleNumber(number) {
  console.log(number * 2);
}

doubleNumber(23);
doubleNumber(10);
doubleNumber(5);

//example 4: the return

function add(numOne, numTwo) {
  let total = numOne + numTwo;
  return total;
}

let x = add(5, 4);
console.log(`The result is: ${x}`);
//nothing after the return will be computed
//example: 5 using the return value in another calculation

function applyDiscount(price, discountPercentage) {
  let discount = price * discountPercentage;
  return price - discount;
}

function addDeliveryFee(total, fee) {
  return total + fee;
}

let originalPrice = 100;
let priceAfterDiscount = applyDiscount(originalPrice, 0.15);
let finalPrice = addDeliveryFee(priceAfterDiscount, 5);

console.log("$" + originalPrice + " is the original price.");
console.log("After discount the price is $" + priceAfterDiscount.toFixed(2));
console.log("Final price with delivery fee is $" + finalPrice.toFixed(2));

//combine names

function combineNames(firstName = "Unknown", lastName = "Unknown") {
  return `${firstName} ${lastName}`;
}

console.log(combineNames("Andres", "Meza"));
console.log(combineNames());

//convertToSeconds challenge

function convertToSeconds(minutes) {
  console.log(`${minutes} is equal to ${minutes * 60} seconds.`);
  return minutes * 60;
}

let y = convertToSeconds(30);

let z = convertToSeconds(60);

console.log(y);
console.log(z);
