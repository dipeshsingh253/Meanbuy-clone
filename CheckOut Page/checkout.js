let product = {
  name: "3D BENZ AMG WHEEL WATCH",
  image1:
    "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI1XC9SZWRfbl8zXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
  image2:
    "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI1XC9SZWRfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
  image3:
    "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI1XC9SZWRfbl8yXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
  price: "8999",
  offer: "21",
  rating: "1.8",
  avaliable: true,
  summary:
    "Lose yourself in the world of luxury with the Turbo Rim watch face. This eye-catching accessory is inspired by a remarkable and timeless rim and is hand-made to precision from robust 3D stainless steel. The luxurious dial is finished with a scratch-resistant finish to give you this elite watch that is created to last. With its sleek design and striking looks, the Turbo Rim watch face is perfect for anyone who loves driving fast and looking good doing it. Order your watch today and experience true luxury!",
  includes: "1 x 3D Mercedes AMG Wheel watch in the high-quality package.",
  features:
    "3D BENZ AMG WHEEL WATCH, Stainless steel case , Sapphire glass , Stainless steel band",
  category: "watch",
  id: 1,
};
let quantity = 2;
//console.log(product);

// to make this page dynamic I need two variables quantity and product

const pay_now = document.getElementById("pay_now");
pay_now.addEventListener("click", pay_nowAction);

function pay_nowAction() {
  // console.log(product);
  let delivery = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address_1: document.getElementById("address_1").value,
    address_2: document.getElementById("address_2").value,
    state: document.getElementById("state").value,
    city: document.getElementById("city").value,
    country: document.getElementById("country").value,
    pincode: document.getElementById("pincode").value,
  };
  //console.log(delivery);
  //console.log(name, phone, address_1, address_2, state, city, country, pincode);
}

function changetoAccepted1() {
  let square_1 = document.getElementById("square_1");
  let color = square_1.style.color;
  if (color == "rgb(249, 141, 41)") {
    square_1.style.color = "#cdcdcd";
  } else {
    square_1.style.color = "#F98D29";
  }
}
function changetoAccepted2() {
  let square_2 = document.getElementById("square_2");
  let color = square_2.style.color;
  if (color == "rgb(249, 141, 41)") {
    square_2.style.color = "#cdcdcd";
  } else {
    square_2.style.color = "#F98D29";
  }
}

function creditCardOpt() {
  let credit_card = document.querySelector("#credit_card");
  let net_banking = document.querySelector("#net_banking");
  let emi = document.querySelector("#emi");
  let upi = document.querySelector("#upi");
  if (credit_card.style.borderBottom == "5px solid rgb(249, 141, 41)") {
    credit_card.style.borderBottom = "transparent";
  } else {
    credit_card.style.borderBottom = "5px solid #F98D29";
  }
  net_banking.style.borderBottom = "transparent";
  emi.style.borderBottom = "transparent";
  upi.style.borderBottom = "transparent";
}

function netBankingOpt() {
  let credit_card = document.querySelector("#credit_card");
  let net_banking = document.querySelector("#net_banking");
  let emi = document.querySelector("#emi");
  let upi = document.querySelector("#upi");
  if (net_banking.style.borderBottom == "5px solid rgb(249, 141, 41)") {
    net_banking.style.borderBottom = "transparent";
  } else {
    net_banking.style.borderBottom = "5px solid #F98D29";
  }
  credit_card.style.borderBottom = "transparent";
  emi.style.borderBottom = "transparent";
  upi.style.borderBottom = "transparent";
}

function emiOpt() {
  let credit_card = document.querySelector("#credit_card");
  let net_banking = document.querySelector("#net_banking");
  let emi = document.querySelector("#emi");
  let upi = document.querySelector("#upi");
  if (emi.style.borderBottom == "5px solid rgb(249, 141, 41)") {
    emi.style.borderBottom = "transparent";
  } else {
    emi.style.borderBottom = "5px solid #F98D29";
  }
  credit_card.style.borderBottom = "transparent";
  net_banking.style.borderBottom = "transparent";
  upi.style.borderBottom = "transparent";
}

function upiOpt() {
  let credit_card = document.querySelector("#credit_card");
  let net_banking = document.querySelector("#net_banking");
  let emi = document.querySelector("#emi");
  let upi = document.querySelector("#upi");
  if (upi.style.borderBottom == "5px solid rgb(249, 141, 41)") {
    upi.style.borderBottom = "transparent";
  } else {
    upi.style.borderBottom = "5px solid #F98D29";
  }
  credit_card.style.borderBottom = "transparent";
  net_banking.style.borderBottom = "transparent";
  emi.style.borderBottom = "transparent";
}

// showProductDetails ==> this function take care of the whole right section of checkout page

function showProductDetails(product, quantity) {
  //console.log(product);
  let delivery_date = new Date(
    Date.now() + 3 * (24 * 3600 * 1000)
  ).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  console.log(delivery_date);
  let cart_product = document.getElementById("cart_product");
  cart_product.innerHTML = `
    <span>
    <p>${quantity} x ${product.name} </p>
    <span>
        <span>
            <span>Delivery Date:</span>
            <p><b>${delivery_date}</b></p>
        </span>
        <p>₹${quantity * product.price}</p>
        </span>
    </span>
    <p>Edit Cart</p>
    `;
  let subtotal = document.getElementById("subtotal");
  subtotal.innerHTML = `
    <span>
    <p>Subtotal: <span>₹${quantity * product.price}</span></p>
    <p>Shiiping Free</p>
    </span>
    <span>
        <p>Total: <span>₹${quantity * product.price}</span></p>
        <p>Or 3 intrest free payments of <span>₹${Math.floor((quantity * product.price)/3)}</span></p>
    </span>
    <span>
        <p>Get up to ₹500.00 OFF on your First Time Prepaid Order (COD Excluded) with coupon <span>PREPAID</span></p>
    </span>
    <span>
        <p>Got a promotional Code &quest; Use below</p>
    </span>
    <span>
        <input type="text" placeholder="Promotional Code">
        <button>Apply Code</button>
    </span>
    <span>
        <img src="meanbuy_slogan.png" alt="">
    </span>
    `;
}

showProductDetails(product, quantity);
