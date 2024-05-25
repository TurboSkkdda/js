const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
  if(myCheckbox.checked){
   subResult.textContent = "You are now subscribed ";
  }
  else {
    subResult.textContent = "You are not subscribed ";

  }
  if (visaBtn.checked)
  paymentResult.textContent ="You are using Visa credit card"
  else if (masterBtn.checked)
  paymentResult.textContent ="You are paying with MasterCard credit card"
else if(payPalBtn.checked)
paymentResult.textContent = "You are paying with PayPal credit card"
 else{
  paymentResult.textContent ="You havent choosen any card"
 }
}
