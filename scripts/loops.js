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

for ( i = 0; i < 5; i+= 2) {
    console.log(i); //0,2,4
}

// write a for loop that prints the 
//multiplication table of 5 from 1 to 10

const NUM = 5;
for ( let i = 0; i <= 10; i++) {
    console.log(`${5} x ${i} = ${NUM * i}`);
}