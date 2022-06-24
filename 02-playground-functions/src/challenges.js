// Desafio 1
function compareTrue(a, b) {
  let allTrue = false;
  if (a === true && b === true) {
    allTrue = true;
  }
  return allTrue;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  const sentenceArray = sentence.split(' ');
  return sentenceArray;
}

// Desafio 4
function concatName(strings) {
  const lastAndFirst = `${strings[strings.length - 1]}, ${strings[0]}`;
  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  const points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let counter = 0;

  for (const number of numbers) {
    if (number > highestNumber) {
      highestNumber = number;
      counter = 1;
    } else if (number === highestNumber) {
      counter += 1;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mousePos, cat1Pos, cat2Pos) {
  const distanceCat1 = Math.abs(cat1Pos - mousePos);
  const distanceCat2 = Math.abs(cat2Pos - mousePos);

  let closer;

  if (distanceCat1 < distanceCat2) {
    closer = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    closer = 'cat2';
  } else {
    closer = 'os gatos trombam e o rato foge';
  }

  return closer;
}

// Desafio 8
function getFizzBuzz(number) {
  let result = '';

  if (number % 3 === 0) {
    result += 'fizz';
  }
  if (number % 5 === 0) {
    result += result !== '' ? 'Buzz' : 'buzz';
  }

  return result !== '' ? result : 'bug!';
}

function fizzBuzz(numbers) {
  let myArray = [];
  let currentFizzBuzz;

  for (const number of numbers) {
    currentFizzBuzz = getFizzBuzz(number);
    myArray.push(currentFizzBuzz);
  }

  return myArray;
}

// Desafio 9
function encodeCharacter(character) {
  const encodeTable = ['a', 'e', 'i', 'o', 'u'];
  let encodedCharacter = character;

  for (let index = 0; index < encodeTable.length; index += 1) {
    if (character === encodeTable[index]) {
      encodedCharacter = index + 1;
      break;
    }
  }

  return encodedCharacter;
}

function encode(sentence) {
  let sentenceArray = sentence.split('');

  for (let index = 0; index < sentenceArray.length; index += 1) {
    sentenceArray[index] = encodeCharacter(sentenceArray[index]);
  }

  return sentenceArray.join('');
}

function decodeCharacter(character) {
  const decodeTable = ['a', 'e', 'i', 'o', 'u'];
  let decodedCharacter = character;

  for (let index = 0; index < decodeTable.length; index += 1) {
    if (character === (index + 1).toString()) {
      decodedCharacter = decodeTable[index];
      break;
    }
  }

  return decodedCharacter;
}

function decode(sentence) {
  let sentenceArray = sentence.split('');

  for (let index = 0; index < sentenceArray.length; index += 1) {
    sentenceArray[index] = decodeCharacter(sentenceArray[index]);
  }

  return sentenceArray.join('');
}

// Desafio 10
function techList(list, name) {
  if (list.length === 0 || name === '') {
    return 'Vazio!';
  }

  const myName = name;
  const sortedList = list.sort();

  let techObjects = [];
  for (const item of sortedList) {
    techObjects.push({
      tech: item,
      name: myName,
    });
  }

  return techObjects;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
