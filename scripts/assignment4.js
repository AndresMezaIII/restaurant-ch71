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
  for (i = 0; i < DAYS.length; i++) {
    total += SALES[i];
    console.log(total);
    sales = SALES[i];
    console.log(getDayLabel(sales));
    averageSales = total / SALES.length;
    console.log(averageSales.toFixed(2));
  }
}

generateReport();
