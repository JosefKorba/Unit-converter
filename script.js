const METER_TO_FEET = 3.281;
const FEET_TO_METER = 1 / METER_TO_FEET;
const LITER_TO_GALLON = 0.264;
const GALON_TO_LITER = 1 / LITER_TO_GALLON;
const KILOGRAM_TO_POUND = 2.204;
const POUND_TO_KILOGRAM = 1 / KILOGRAM_TO_POUND;

const mfEl = document.getElementById("meterFeet-el");
const lgEL = document.getElementById("litersGallons-el");
const kpEL = document.getElementById("kilogramsPounds-el");
const numEL = document.getElementById("number-el");

const convertBTN = document.getElementById("convertButton");

convertBTN.addEventListener("click", function () {
  mfEl.textContent = "";
  lgEL.textContent = "";
  kpEL.textContent = "";

  let unit = numEL.value;

  mfEl.textContent += `${unit} meters = ${(unit * METER_TO_FEET).toFixed(2)} feet | ${unit} feet = ${(unit * FEET_TO_METER).toFixed(2)} meters`;

  lgEL.textContent += `${unit} liters = ${(unit * LITER_TO_GALLON).toFixed(2)} gallons | ${unit} gallons = ${(unit * GALON_TO_LITER).toFixed(2)} liters`;

  kpEL.textContent += `${unit} kilograms = ${(unit * KILOGRAM_TO_POUND).toFixed(2)} pounds | ${unit} pounds = ${(unit * POUND_TO_KILOGRAM).toFixed(2)} kilograms`;
});
