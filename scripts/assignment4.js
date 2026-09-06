console.log("Assignment 4 JS linked.")

const RESTAURANTNAME = "The Royal Lounge";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const SALES = [320, 410, 290, 505, 480, 620, 710];

function calculateTotal(price, tax) {
  let taxes = price * tax;
  let total = price + taxes;
  return total;
}

function applyMemberDiscount(price, isMember) {
  if (isMember == true) {
    let discount = price * 0.1;
    let total = price - discount;
    return total;
  } else {
    return price;
  }
}

function checkDelivery(total) {
  if (Number(total) >= 30) {
    console.log("Your order qualifies for free delivery.\n\n");
  } else {
    console.log("Delivery fees apply.\n\n");
  }
}