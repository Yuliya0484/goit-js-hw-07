function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const pageColor = document.body;
const btn = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  pageColor.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
});
