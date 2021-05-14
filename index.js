
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  bodyEl: document.querySelector('body'),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.btnStart.addEventListener('click', onClickStart);
refs.btnStop.addEventListener('click', onClickStop);

function changeBcgColor(color) {
  refs.bodyEl.style.backgroundColor = color;
};

function randomIndex() {
  randomNumber = randomIntegerFromInterval(0, 5);
  changeBcgColor(colors[randomNumber]);
};

let changeColor = 0;

function onClickStart() {
  changeColor = setInterval(randomIndex, 1000);
  refs.btnStop.removeAttribute('disabled');
  refs.btnStart.setAttribute('disabled', true);
};

function onClickStop() {
  clearInterval(changeColor);
    refs.btnStart.removeAttribute('disabled');
    refs.btnStop.setAttribute('disabled', true);
};









