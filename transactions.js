const billData = {
  company: "",
  begBalance: "",
  dueDate: "",
  paymentAmt: "",
  autoPay: "",
};

function getBillData() {
  billData.company = document.getElementById("company").value.toUpperCase();
  billData.begBalance = document.getElementById("beginning-balance").value;
  billData.begBalance = parseFloat(billData.begBalance);
  billData.dueDate = document.getElementById("due-date").value;
  billData.paymentAmt = document.getElementById("payment-amount").value;
  billData.autoPay = document.getElementById("auto-pay").checked;
  return billData;
}

let btnSubmit = document.getElementById("btn-bill-submit");
btnSubmit.addEventListener("click", getBillData);
