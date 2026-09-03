function showRestaurantName() {
  console.log("The Royal Lounge");
}

showRestaurantName();

function greetCustomer(customer) {
  console.log(
    `Hello ${customer}, we are happy to have you at The Royal Lounge!`,
  );
}

greetCustomer("Andres Meza");
greetCustomer("John Doe");
greetCustomer("Jane Smith");

function calculateTotal(price, tax) {
  let taxes = price * tax;
  let total = price + taxes;
  return total;
}

console.log(
  "The price of a steak dinner is $" + calculateTotal(43, 0.08) + "."
);

console.log(
  "The price of the vegan special is $" + calculateTotal(25, 0.08) + "."
);

console.log(
  "The price of the famer's fresh salad is $" +
    calculateTotal(19.99, 0.08).toFixed(2) +
    ".",
);

function calculateTip(total, tipPercent) {
  let tip = total * tipPercent;
  return tip;
}

console.log(
  `Dish: Chicken Kebabs \nPrice: $23\nTotal: $${calculateTotal(23, 0.08)}\nTip:$${calculateTip(calculateTotal(23, 0.08), 0.15).toFixed(2)}`,
);
