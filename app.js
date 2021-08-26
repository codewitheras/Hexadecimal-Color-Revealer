const colorInput = document.getElementById('colorBox');
const colorReveal = document.getElementById('showColor');
const colorBorder = document.getElementById('colorBorder');

colorInput.addEventListener('input', (e) => {
  const color = e.target.value;
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  if (color.match(hexColorRegex)) {
    colorReveal.style.backgroundColor = color;
    colorBorder.style.borderColor = color;
  } else {
    colorInput.style.borderColor = 'rgb(226, 226, 226)';
  }
});