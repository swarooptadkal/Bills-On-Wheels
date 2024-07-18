// Calculate total amount
const totalAmount = document.getElementById('total-amount');
let total = 0;
const rows = document.getElementById('bill-table').rows;
for (let i = 1; i < rows.length; i++) {
  const price = parseInt(rows[i].cells[3].textContent);
  total += price;
}
totalAmount.textContent = total;