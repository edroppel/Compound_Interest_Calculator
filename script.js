const calculateAndUpdate = () => {
  const principal = parseFloat(document.getElementById("principal").value) || 0;
  const years = parseFloat(document.getElementById("years").value) || 0;
  const apr = parseFloat(document.getElementById("apr").value) / 100 || 0;
  const period = parseFloat(document.getElementById("period").value) || 1;

  if (principal <= 0 || years <= 0 || period <= 0) {
    document.getElementById("accumulated").textContent = "0.00";
    document.getElementById("amount").textContent = "0.00";
    return;
  }

  const amount = principal * (1 + apr / period) ** (period * years);
  const interestAccumulated = amount - principal;

  document.getElementById("accumulated").textContent =
    interestAccumulated.toFixed(2);
  document.getElementById("amount").textContent = amount.toFixed(2);
};

document
  .querySelectorAll("#principal, #years, #apr, #period")
  .forEach((input) => {
    input.addEventListener("input", calculateAndUpdate);
  });

document.getElementById("apr").addEventListener("input", function () {
  document.getElementById("aprText").textContent = this.value;
});

calculateAndUpdate();
