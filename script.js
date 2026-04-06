const input = document.getElementById("input");
const convertBtn = document.getElementById("btn-convert");
const resetBtn = document.getElementById("btn-reset");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

convertBtn.addEventListener("click", function () {
  if (input.value != "") {
    length.innerHTML = `${input.value} meters = ${(input.value * 3.281).toFixed(3)} feet | ${(input.value / 3.281).toFixed(3)} meters`;
    volume.innerHTML = `${input.value} liters = ${(input.value * 0.264).toFixed(3)} gallons | ${(input.value / 0.264).toFixed(3)} liters`;
    mass.innerText = `${input.value} kilos = ${(input.value * 2.204).toFixed(3)} pounds | ${(input.value / 2.204).toFixed(3)} kilos`;
  }
});

resetBtn.addEventListener("click", function () {
  window.location.reload();
});
