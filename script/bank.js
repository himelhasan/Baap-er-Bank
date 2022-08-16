/* 
// Amount field

id="deposite-amount"
id="withdraw-amount"
id="balance-amount "


// deposite field
id="deposite-field"
id="btn-deposite" 

// withdraw field
id="withdraw-field"
id="btn-withdraw" 
*/

document.getElementById("deposite-field").addEventListener("keyup", function (event) {
  const text = event.target.value;
  console.log(text);

  const btnDeposite = document.getElementById("btn-deposite");

  if (text.length == 0) {
    // btnDeposite.setAttribute("disabled");
    // prompt("Please enter a number");
    alert("Are you feeling lucky");
  } else {
    btnDeposite.removeAttribute("disabled");
  }
});

// add event listeners to the deposite button
document.getElementById("btn-deposite").addEventListener("click", function () {
  console.log("deposite btn clicked");
  // get the deposite amount from the deposite input field
  const depositeField = document.getElementById("deposite-field");
  const depositeFieldAmount = parseFloat(depositeField.value);
  console.log(typeof depositeFieldAmount);
  // get current deposit total
  const depositeAmount = document.getElementById("deposite-amount");
  const depositeAmountTotal = parseFloat(depositeAmount.innerText);
  console.log(typeof depositeAmountTotal);

  const updatedDepositeAmount = depositeAmountTotal + depositeFieldAmount;

  depositeAmount.innerText = updatedDepositeAmount;

  // clear deposite field
  depositeField.value = "";

  // get balance total

  const balanceAmount = document.getElementById("balance-amount");
  const balanceAmountTotal = parseFloat(balanceAmount.innerText);

  balanceAmount.innerText = balanceAmountTotal + depositeFieldAmount;
});

/* 
// * 

1.adding event handler to withdraw button
2. get the withdraw amount form the withdraw input field
2.a  convert input data from sting to number with parseFloat
3. get previous withdraw amount total
4. Caclulate total withdraw amount total
5. clear the input field
6. Caclulate the total Balance Amount
 */

// step -1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  console.log("withdraw btn clicked");

  //  step -2
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawFieldAmount = parseFloat(withdrawField.value);
  //  step -3
  const withdrawAmount = document.getElementById("withdraw-amount");
  const withdrawAmountTotal = parseFloat(withdrawAmount.innerText);

  // step -4
  const updatedwithdrawAmount = withdrawAmountTotal + withdrawFieldAmount;
  withdrawAmount.innerText = updatedwithdrawAmount;
  // step -5
  withdrawField.value = "";

  // step-6
  const balanceAmount = document.getElementById("balance-amount");
  const balanceAmountTotal = parseFloat(balanceAmount.innerText);
  balanceAmount.innerText = balanceAmountTotal - withdrawFieldAmount;
});

console.log("working");

document.getElementById("withdraw-field").addEventListener("keyup", function (event) {
  const text = event.target.value;
  console.log(text);

  const btnWithdraw = document.getElementById("btn-withdraw");

  if (text.length == 0) {
    // btnDeposite.setAttribute("disabled");
    // prompt("Please enter a number");
    alert("Are you feeling lucky");
  } else {
    btnWithdraw.removeAttribute("disabled");
  }
});
