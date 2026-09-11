let balance = 500000;

const balanceText = document.getElementById('balanceText');
const message = document.getElementById('message');

function formatMoney(n){
  return n.toLocaleString('en-IN');
}

function renderBalance(){
  balanceText.textContent = formatMoney(balance);
}

function deposit(){
  let num = Number(prompt("How much money you want to deposit :"));
  if(num > 0){
    balance = balance + num;
    renderBalance();
    message.textContent = "Deposited Rs " + formatMoney(num) + ". New balance Rs " + formatMoney(balance);
  }
}

function withdraw(){
  let num2 = Number(prompt("How much money you want to withdraw :"));
  if(num2 <= balance){
    balance = balance - num2;
    renderBalance();
    message.textContent = "Withdrew Rs " + formatMoney(num2) + ". New balance Rs " + formatMoney(balance);
  } else {
    message.textContent = "Insufficient balance!";
  }
}

document.getElementById('btnDeposit').addEventListener('click', deposit);
document.getElementById('btnWithdraw').addEventListener('click', withdraw);
