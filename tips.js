const tips = [
  "Use === instead of ==",
  "Declare variables with let or const",
  "Use array.map() for transformations",
  "Always handle errors with try/catch",
  "Use template literals with ``"
];

function showTip() {
  const random = Math.floor(Math.random() * tips.length);
  document.getElementById('tip-box').textContent = tips[random];
}
