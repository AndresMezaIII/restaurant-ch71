console.log("loops.js connected successfully");

//session - 4 for loops
/*
document.write("<p>2 x 1 = 2</p>");
document.write("<p>2 x 2 = 4</p>");
document.write("<p>2 x 3 = 6</p>");
document.write("<p>2 x 4 = 8</p>");
document.write("<p>2 x 5 = 10</p>");
document.write("<p>2 x 6 = 12</p>");
document.write("<p>2 x 7 = 14</p>");
document.write("<p>2 x 8 = 16</p>");
document.write("<p>2 x 9 = 18</p>");
document.write("<p>2 x 10 = 20</p>");
*/
/*const NUM = 2;
for (let i = 0; i <= 10;i++) {
    document.write(`<p>${NUM} x ${i} = ${i*NUM} </p>`);
}
*/
//the anatomy of a loop
//1. where do we start? (i = 0)
//2. what is the condition? (i <= 10)
//3. what is the increment? (i++)
//for (start; condition; increment) {
//  --code--
//}
/*
for ( i = 0; i < 5; i+= 2) {
    console.log(i); //0,2,4
}

// write a for loop that prints the 
//multiplication table of 5 from 1 to 10

const NUM = 5;
for ( let i = 0; i <= 10; i++) {
    console.log(`${5} x ${i} = ${NUM * i}`);
}
*/
/*arrays
arrays are index based starting at position 0
             0   1  2  3  4  */
/*let temps = [30,45,60,75,90];
console.log(`the value at temps array position 4 is ${temps[4]}.`);
console.log(`the value at temps array position 2 is ${temps[2]}.`);
console.log(`the value at temps array position 0 is ${temps[0]}.`);
console.log(temps);
/*it is better to use the temps.length method rather than hardcoding an index position because .lngth will always retrieve the total number of elements, even if it is unknown to the developer.*/
/*for (let i = 0; i < temps.length; i++) {
    console.log(`Day ${i + 1}: ${temps[i]}C.`);
}*/
//accumulator pattern
//how to calculate a total and average from an array
/*
let total = 0; //start at 0 before the loop
for(let i = 0; i < temps.length; i++) {
    total = total + temps[i];
    average = total / temps.length;

}

console.log(`The average temperature is ${average}C.`);

//two parallel arrays
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const SALES = [320, 410, 290, 505, 480, 620, 710];

/*days[0] = "Monday" and sales[0] = 320, pair them. in the for loop, because both arrays have the same length which is validated with the if statement, iterate over either one, you don't have to iterate over both.*/
/*
if(DAYS.length == SALES.length) {
    for(let i = 0; i < DAYS.length; i++) {
        console.log(DAYS[i] + ": $" + SALES[i])
    }
}
*/
/*Arrays and the Accumulatr Pattern
give the array of menu prices:
const PRICES = [12.50, 8.00, 15.75, 6.25, 20.00];
Use a loop to calculate and print the total and the average price. Use toFixed(2).*/
/*
//let total = 0;
const PRICES = [12.50, 8.00, 15.75, 6.25, 20.00];

for (i = 0; i < PRICES.length; i++) {
    if (PRICES[i] >= 400) {
        console.log(`${DAYS[i]}: $${PRICES[i]});
    }

    /*
    total = total + PRICES[i];
    
}
//initialize averageCost outside of the for loops and console.log outside to prevent doing the calculation over and over.
const averageCost = total / PRICES.length;
    console.log(`The total is $${total.toFixed(2)}, and the average is $${averageCost.toFixed(2)}.`);
*/
//Loop + if
/* using the sales and days arrays, write a loop that prints only the days where sales were above $400, skip the rest*/

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const SALES = [320, 410, 290, 505, 480, 620, 710];

for (i = 0; i < SALES.length; i++) {
    if (SALES[i] >= 400) {
        console.log(`${DAYS[i]}: $${SALES[i]}.`);
    }
}

// Building output for the page
let output = "";

for(let i = 0; i < DAYS.length; i++) {
    output += `<p> ${DAYS[i]}: $${SALES[i]} </p><br/>`;
}
//innerHTML & document.write are deprecated
document.getElementById("sales").innerHTML = output;
