console.log("Assignment 3: \n\n");

function checkDelivery(total) {
  if (Number(total) >= 30) {
    console.log("Your order qualifies for free delivery.\n\n");
  } else {
    console.log("Delivery fees apply.\n\n");
  }
}

checkDelivery(30);
checkDelivery(40);
checkDelivery(15);

function getMenuType(hour) {
  if (Number(hour) >= 7 && Number(hour) <= 11) {
    console.log("Breakfast menu is available.\n\n");
  } else if (Number(hour) >= 12 && Number(hour) <= 16) {
    console.log("Lunch menu is available.\n\n");
  } else if (Number(hour) >= 17 && Number(hour) <= 22) {
    console.log("Dinner menu is available.\n\n");
  } else {
    console.error("We are closed. Please come back during our business hours.\n\n");
  }
}

getMenuType(10);
getMenuType(14);
getMenuType(19);
getMenuType(24);
getMenuType(5);

function applyMemberDiscount(price, isMember) {
  if (isMember == true) {
    let discount = price * 0.1;
    let total = price - discount;
    return total;
  } else {
    return price;
  }
}

console.log(
  `Because you are a member, your total is $${applyMemberDiscount(23, true).toFixed(2)}.\n\n`,
);
console.log(
  `You are not a member. Your total is $${applyMemberDiscount(23, false).toFixed(2)}.\n\n`,
);

function calculateTotal(price, tax) {
  let taxes = price * tax;
  let total = price + taxes;
  return total;
}

function printOrderSummary(dish, price, isMember) {
  console.log("Order Summary: \n");
  console.log(`Dish: ${dish}`);
  console.log(`Regular Price: $${price.toFixed(2)}`);
  console.log(
    `Total with taxes applied: $${calculateTotal(price, 0.08).toFixed(2)}`
  );
  
  if (isMember == true) {
    console.log(
      `Member Discount: $${(price - applyMemberDiscount(price, isMember)).toFixed(2)}`
    );
  } else {
    console.log(`Member Discount: $0.00`);
  }
  checkDelivery(price);
  console.log("\n");
}

printOrderSummary("Steak", 43, true);
printOrderSummary("Vegan Bowl", 25, false);
