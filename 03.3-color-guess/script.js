const correctColor = document.querySelector('#rgb-color');
const scoreElement = document.querySelector('#score');
const colorOptions = document.querySelectorAll('.ball');
const answerElement = document.querySelector('#answer');
const newGameButton = document.querySelector('#reset-game');
let score = 0;

function getRandomColor() {
  const colorArray = [];

  for (let i = 0; i < 3; i += 1) {
    colorArray.push(Math.floor(Math.random() * 256));
  }

  const color = `rgb(${colorArray.join(', ')})`;

  return color;
}

function generateGame() {
  const correctIndex = Math.floor(Math.random() * colorOptions.length);

  for (let i = 0; i < colorOptions.length; i += 1) {
    colorOptions[i].style.pointerEvents = 'auto';
    colorOptions[i].style.border = '';
    colorOptions[i].style.backgroundColor = getRandomColor();
  }

  correctColor.innerText = colorOptions[correctIndex].style.backgroundColor.replace('rgb', '');
  answerElement.innerText = 'Escolha uma cor';
}

function checkGame(colorButton) {
  const currentButton = colorButton;

  for (let i = 0; i < colorOptions.length; i += 1) {
    colorOptions[i].style.pointerEvents = 'none';
    if (`rgb${correctColor.innerText}` === colorOptions[i].style.backgroundColor) {
      colorOptions[i].style.border = '5px solid #33F36D';
    }
  }

  if (`rgb${correctColor.innerText}` === currentButton.style.backgroundColor) {
    score += 3;
    scoreElement.innerText = score;
    answerElement.innerText = 'Acertou!';
  } else {
    currentButton.style.border = '5px solid red';
    answerElement.innerText = 'Errou! Tente novamente!';
  }
}

for (let i = 0; i < colorOptions.length; i += 1) {
  colorOptions[i].addEventListener('click', (event) => {
    checkGame(event.target);
  });
}

newGameButton.addEventListener('click', generateGame);

generateGame();
