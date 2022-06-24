const textInput = document.querySelector('#text-input');
const imageSelect = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const templates = document.querySelectorAll('.meme-template');

function changeContainerBorder(border) {
  const memeContainer = document.querySelector('#meme-image-container');
  memeContainer.style.border = border;
}

textInput.addEventListener('input', (event) => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = event.target.value;
});

imageSelect.addEventListener('input', (event) => {
  const input = event.target;

  if (input.files.length > 0) {
    const filePath = URL.createObjectURL(input.files[0]);
    memeImage.src = filePath;
  }
});

fireButton.addEventListener('click', () => {
  changeContainerBorder('3px dashed red');
});

waterButton.addEventListener('click', () => {
  changeContainerBorder('5px double blue');
});

earthButton.addEventListener('click', () => {
  changeContainerBorder('6px groove green');
});

for (let i = 0; i < templates.length; i += 1) {
  templates[i].addEventListener('click', (event) => {
    memeImage.src = event.target.src;
  });
}
