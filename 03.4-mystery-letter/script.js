function getRandomClasses() {
  const classList = [
    ['newspaper', 'magazine1', 'magazine2'],
    ['medium', 'big', 'reallybig'],
    ['rotateleft', 'rotateright'],
    ['skewleft', 'skewright'],
  ];
  const classes = [];

  for (let i = 0; i < classList.length; i += 1) {
    const randomIndex = Math.floor(Math.random() * classList[i].length);
    classes.push(classList[i][randomIndex]);
  }
  return classes.join(' ');
}

function clearCards() {
  const cards = document.querySelectorAll('span');
  for (let i = 0; i < cards.length; i += 1) {
    cards[i].remove();
  }
}

function createCards() {
  const inputText = document.querySelector('#carta-texto');
  const words = inputText.value.split(' ').filter((word) => word !== '');
  const cardContainer = document.querySelector('#carta-gerada');
  if (words.length === 0) {
    cardContainer.innerText = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  cardContainer.innerText = '';
  for (let i = 0; i < words.length; i += 1) {
    const newCard = document.createElement('span');
    newCard.innerText = words[i];
    newCard.className = getRandomClasses();
    newCard.addEventListener('click', (event) => {
      const card = event.target;
      card.className = getRandomClasses();
    });
    cardContainer.appendChild(newCard);
  }
}

function showCardNumber() {
  const counter = document.querySelector('#carta-contador');
  const cards = document.querySelectorAll('span');

  counter.innerText = cards.length;
}

const createButton = document.querySelector('#criar-carta');
createButton.addEventListener('click', () => {
  clearCards();
  createCards();
  showCardNumber();
});
