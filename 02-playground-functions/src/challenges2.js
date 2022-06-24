// Desafio 11
function getOccurrences(value, array) {
  let occurences = 0;

  for (const item of array) {
    if (value === item) {
      occurences += 1;
    }
  }

  return occurences;
}

function isValidNumber(number) {
  let isValid = true;

  if (number < 0 || number > 9) {
    isValid = false;
  }

  return isValid;
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (const number of numbers) {
    if (!isValidNumber(number) || getOccurrences(number, numbers) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  const phoneNumber = `(${numbers[0]}${numbers[1]}) `
    + `${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-`
    + `${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const lines = [lineA, lineB, lineC];
  let otherLines;
  let isTriangle = true;

  for (let index = 0; index < lines.length; index += 1) {
    otherLines = lines.slice();
    otherLines.splice(index, 1);

    if (
      otherLines[0] + otherLines[1] < lines[index]
      || Math.abs(otherLines[0] - otherLines[1]) > lines[index]
    ) {
      isTriangle = false;
      break;
    }
  }

  return isTriangle;
}

// Desafio 13
function hydrate(inputText) {
  const numbers = inputText.match(/\d/g).map(Number);
  let cups = 0;
  let outputText = '';

  for (const number of numbers) {
    cups += number;
  }

  if (cups > 1) {
    outputText = `${cups} copos de água`;
  } else if (cups === 1) {
    outputText = '1 copo de água';
  }

  return outputText;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
