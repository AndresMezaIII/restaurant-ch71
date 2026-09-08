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
    let label = getDayLabel(SALES[i]);
    total += SALES[i];
    output += `<p class="paragraph"><span class="zero-span">${DAYS[i]}</span><span class="span-1">$${SALES[i].toFixed(2)}</span><span>${label}</span></p>`;
  }
  document.getElementById("report").innerHTML += output;
  document.getElementById("report").innerHTML += `<br><p class="paragraph-2"><span>Weekly Sales Total:</span><span class="span-2">$${total.toFixed(2)}</span></p>`;
  document.getElementById("report").innerHTML += `<p class="paragraph-2"><span>Weekly Average Sales:</span><span class="span-2">$${(total / SALES.length).toFixed(2)}</span></p>`;

}

generateReport();


