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
 */

// step -1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  console.log("withdraw btn clicked");

  // get input field data from
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawFieldAmount = parseFloat(withdrawField.value);
  console.log(withdrawFieldAmount);

  const withdrawAmount = document.getElementById("withdraw-amount");
  const withdrawAmountTotal = parseFloat(withdrawAmount.innerText);
  console.log(withdrawAmountTotal);

  withdrawAmount.innerText = withdrawAmountTotal + withdrawFieldAmount;

  withdrawField.value = "";

  const balanceAmount = document.getElementById("balance-amount");
  const balanceAmountTotal = parseFloat(balanceAmount.innerText);
  balanceAmount.innerText = balanceAmountTotal - withdrawFieldAmount;
});
