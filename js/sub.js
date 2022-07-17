'use strict';

{
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');
const op5 = document.getElementById('op5');
const op6 = document.getElementById('op6');

const pra1 = document.getElementById('pra1');
const pra2 = document.getElementById('pra2');
const pra3 = document.getElementById('pra3');
const pra4 = document.getElementById('pra4');
const pra5 = document.getElementById('pra5');
const pra6 = document.getElementById('pra6');

const mask = document.getElementById('mask');
const batu = document.getElementById('batu');


op1.addEventListener('click', () => {
  pra1.classList.remove('hidden');
  mask.classList.remove('hidden');
  batu.classList.remove('hidden');
});

op2.addEventListener('click', () => {
  pra2.classList.remove('hidden');
  mask.classList.remove('hidden');
  batu.classList.remove('hidden');
});

op3.addEventListener('click', () => {
  pra3.classList.remove('hidden');
  mask.classList.remove('hidden');
  batu.classList.remove('hidden');
});

op4.addEventListener('click', () => {
  pra4.classList.remove('hidden');
  mask.classList.remove('hidden');
  batu.classList.remove('hidden');
});

op5.addEventListener('click', () => {
  pra5.classList.remove('hidden');
  mask.classList.remove('hidden');
  batu.classList.remove('hidden');
});

op6.addEventListener('click', () => {
  pra6.classList.remove('hidden');
  mask.classList.remove('hidden');
  batu.classList.remove('hidden');
});

batu.addEventListener('click', () => {
  pra1.classList.add('hidden');
  pra2.classList.add('hidden');
  pra3.classList.add('hidden');
  pra4.classList.add('hidden');
  pra5.classList.add('hidden');
  pra6.classList.add('hidden');
  mask.classList.add('hidden');
  batu.classList.add('hidden');
});

mask.addEventListener('click', () => {
  pra1.classList.add('hidden');
  pra2.classList.add('hidden');
  pra3.classList.add('hidden');
  pra4.classList.add('hidden');
  pra5.classList.add('hidden');
  pra6.classList.add('hidden');
  mask.classList.add('hidden');
  batu.classList.add('hidden');
});
}