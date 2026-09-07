console.log("assignment4.js connected");

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

function getDayLabel(sales) {
  if (sales >= 600) {
    return label = "Excellent day";
  } else if (sales < 600 && sales >= 400) {
    return label = "Good day";
  } else if (sales < 400 && sales > 250) {
    return label = "Average day";
  } else {
    return label = "Slow day";
  }
}

function generateReport() {
  let output = "";
  let total = 0;
  for (let i = 0; i < DAYS.length; i++) {
    //console.log(total);
    let label = getDayLabel(SALES[i]);
    total += SALES[i];
    output += `<p>${DAYS[i]}      $${SALES[i].toFixed(2)}     ${label}</p>`;
    //console.log(getDayLabel(sales));
    
    //console.log(averageSales.toFixed(2));
  }
  document.getElementById("report").innerHTML += output;
  document.getElementById("report").innerHTML += `<br><br>Weekly Sales Total: $${total.toFixed(2)}`;
  document.getElementById("report").innerHTML += `<br>Weekly Average Sale: $${(total / SALES.length).toFixed(2)}`;

}

generateReport();
