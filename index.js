const btnMinus = document.getElementById('btn-minus');
const btnAdd = document.getElementById('btn-add');
const btnReset = document.getElementById('btn-reset');
const counter = document.getElementById('counter-number');

// Valor del contador
let count = 0;

function addToCounter() {
  count += 1;
  counter.innerText = count;
}

function removeToCounter() {
  count -= 1;
  counter.innerText = count;
}

function resetCounter() {
  count = 0;
  counter.innerText = count;
}


btnMinus.addEventListener('click', removeToCounter);
btnAdd.addEventListener('click', addToCounter);
btnReset.addEventListener('click', resetCounter);
