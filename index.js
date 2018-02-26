const btnMinus = document.getElementById('btn-minus');
const btnAdd = document.getElementById('btn-add');
const btnReset = document.getElementById('btn-reset');
const counter = document.getElementById('counter-number');

// Valor del contador
let count = 0;

function addToCounter() {
  // Logica para sumar al contador
  counter.innerText = count;
}

function removeToCounter() {
  // Logica para restar al contador
  counter.innerText = count;
}

function resetCounter() {
  // Logica para colocar en 0 el contador
  counter.innerText = count;
}


btnMinus.addEventListener('click', removeToCounter);
btnAdd.addEventListener('click', addToCounter);
btnReset.addEventListener('click', resetCounter);
