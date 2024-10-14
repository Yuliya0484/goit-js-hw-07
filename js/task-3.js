const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  output.textContent = event.currentTarget.value;
  if (textInput.value === '') {
    output.textContent = `Anonymous`;
  } else {
    output === textInput.value.trim();
  }
});

console.log(output);
