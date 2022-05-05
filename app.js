const colorBtn = document.getElementById('colorpick-button');

function changeBackground(color) {
  document.body.style.background = color;
}

function randomColor() {
  const hexColor = '#' + Math.random().toString(16).slice(2, 8);
  function changeText() {
    const innerText = document.querySelector('div h1');
    innerText.textContent = `Background Color: ${hexColor}`;
  }
  changeText();
  return hexColor;
}

colorBtn.addEventListener('click', function () {
  changeBackground(randomColor());
});
