function groceryTracker(amount1, amount2, amount3) {
  return amount1 + amount2 + amount3;
}

function calculateTotal() {
  const grocery1 = parseFloat(document.getElementById("grocery1").value) || 0;
  const grocery2 = parseFloat(document.getElementById("grocery2").value) || 0;
  const grocery3 = parseFloat(document.getElementById("grocery3").value) || 0;

  const total = groceryTracker(grocery1, grocery2, grocery3);

  document.getElementById("result").innerText = `Total grocery amount spent: $${total.toFixed(2)}`;
}
