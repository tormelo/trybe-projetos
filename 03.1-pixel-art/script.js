// 2, 3 e 12 - Populando paleta de cores
const paletteSize = 4;
const paletteContainer = document.querySelector('#color-palette');

function getRandomColor() {
  const colorArray = [];

  for (let i = 0; i < 3; i += 1) {
    colorArray.push(Math.floor(Math.random() * 256));
  }

  const color = `rgb(${colorArray.join(', ')})`;

  return color;
}

function populateColorPalette() {
  for (let i = 0; i < paletteSize; i += 1) {
    const color = i === 0 ? 'black' : getRandomColor();
    const paletteColor = document.createElement('div');
    paletteColor.className = 'color';
    paletteColor.style.backgroundColor = color;
    paletteContainer.appendChild(paletteColor);
  }
}

populateColorPalette();

// 4 - Populando quadro de pixels
const boardSize = 5;
const pixelBoard = document.querySelector('#pixel-board');

function createPixelBoard(size) {
  for (let i = 0; i < size; i += 1) {
    const line = document.createElement('div');
    line.className = 'board-line';
    pixelBoard.appendChild(line);
    for (let j = 0; j < size; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      line.appendChild(pixel);
    }
  }
}

createPixelBoard(boardSize);

// 6 - Defina preto como a primeira cor selecionada
const colors = document.querySelectorAll('.color');
const firstColor = document.querySelector('.color');

function selectColor(color) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].className = colors[i] === color ? 'color selected' : 'color';
  }
}

selectColor(firstColor);

// 7 - Adiciona evento de clicar para selecionar cor na paleta
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', (event) => {
    selectColor(event.target);
  });
}

// 8 - Adicina evento aos pixels que os pinta com cor selecionada
function paintPixel(pixel) {
  const selectedColor = document.querySelector('.color.selected');
  const currentPixel = pixel;
  currentPixel.style.backgroundColor = selectedColor.style.backgroundColor;
}

function attachEventsToPixels() {
  const pixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', (event) => {
      paintPixel(event.target);
    });
    pixels[i].addEventListener('mousemove', (event) => {
      if (event.buttons === 1) {
        paintPixel(event.target);
      }
    });
  }
}

attachEventsToPixels();

// 9 - Adiciona função de limpar quadro
const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

// 10 e 11 - Adiciona Input para mudar tamanho do quadro
const generateButton = document.querySelector('#generate-board');
const sizeInput = document.querySelector('#board-size');
sizeInput.min = 1;

function clearBoard() {
  const lines = document.querySelectorAll('.board-line');
  for (let i = 0; i < lines.length; i += 1) {
    lines[i].remove();
  }
}

generateButton.addEventListener('click', () => {
  if (sizeInput.value === '') {
    return alert('Board inválido!');
  }

  let size = sizeInput.value;
  if (size < 5) {
    size = 5;
  }
  if (size > 50) {
    size = 50;
  }

  clearBoard();
  createPixelBoard(size);
  attachEventsToPixels();
});
