function getBillData() {
  let begBalance = parseFloat(document.getElementById("beg-balance").value);
  if (isNaN(begBalance)) {
    begBalance = 0;
  }
  const dueDate = Number(document.getElementById("due-date").value);
  const dueDateError = document.getElementById("due-date-error");
  dueDateError.textContent = "";
  if (dueDate < 1 || dueDate > 31) {
    dueDateError.textContent = "Please enter a value between 1 and 31.";
    return;
  }

  let paymentAmt = parseFloat(document.getElementById("payment-amt").value);
  if (isNaN(paymentAmt)) {
    paymentAmt = 0;
  }

  const billData = {
    company: document.getElementById("company").value.toUpperCase(),
    begBalance: parseFloat(begBalance),
    dueDate: Number(dueDate),
    paymentAmt: parseFloat(paymentAmt),
    autoPay: document.getElementById("auto-pay").checked,
  };

  return billData;
}

let btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function () {
  const data = getBillData();
  console.log(data);
});
