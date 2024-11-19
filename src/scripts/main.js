'use strict';

const values = document.querySelectorAll('.population');
const avarage = document.querySelector('.average-population');
const total = document.querySelector('.total-population');
let totl = 0;
let items = 0;

if (avarage && total) {
  for (let i = 0; i < values.length; i++) {
    const value = parseFloat(values[i].textContent);

    if (!isNaN(value)) {
      totl += value;
      items++;
    }
  }

  const avg = Math.round(totl / items);

  avarage.textContent = avg;

  total.textContent = totl;
}
