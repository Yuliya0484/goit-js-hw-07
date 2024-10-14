const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

let sizes = 30;

btnCreate.addEventListener('click', createMarkup);
btnDestroy.addEventListener('click', () => {
  input.value = '';
  clear();
});

function createMarkup() {
  if (input.value < 1 || input.value > 100) {
    console.log('error');
    return alert(`ВВедіть число від 1 до 100`);
  }
  createBoxes(input.value);
}
function clear() {
  boxes.innerHTML = '';
  sizes = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  clear();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${sizes}px`;
    box.style.height = `${sizes}px`;
    box.style.backgroundColor = getRandomHexColor();
    console.log(box);
    boxes.append(box);
    sizes += 10;
  }
}
