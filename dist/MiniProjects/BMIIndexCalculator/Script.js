const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || height == 0 || isNaN(height)) {
    results.innerHTML = `plese give valid  height${height}`;
  } else if (weight == 0 || weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give  valid weight  ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `BMI Index value is <span> ${bmi} <span> `;
    if (bmi < 18.6) {
      weightguide.innerHTML = "Under Weight";
    } else if (bmi > 18.6 && bmi < 24.9) {
      weightguide.innerHTML = "Normal Range";
    } else if (bmi > 24.9) {
      weightguide.innerHTML = "Over Weight";
    }
  }
});
