//  requisito 3
const loginForm = document.querySelector('.trybewarts-login');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const buttonSignIn = document.querySelector('#sign-in');
const mobileBackdrop = document.querySelector('#m-login-backdrop');
const mobileContainer = document.querySelector('#m-login-container');
const mobileEmail = document.querySelector('#m-email');
const mobilePassword = document.querySelector('#m-password');
const mobileBtnSignIn = document.querySelector('#m-sign-in');

function login() {
  let emailInput;
  let passwordInput;

  if (window.innerWidth > 768) {
    emailInput = email.value;
    passwordInput = password.value;
  } else {
    emailInput = mobileEmail.value;
    passwordInput = mobilePassword.value;
  }

  if (emailInput === 'tryber@teste.com' && passwordInput === '123456') {
    alert('Olá, Tryber!');
    mobileBackdrop.style.display = 'none';
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
buttonSignIn.addEventListener('click', () => {
  if (window.innerWidth > 768) {
    login();
  } else {
    mobileBackdrop.style.display = 'initial';
  }
});

mobileBackdrop.addEventListener('click', (event) => {
  if (event.target === mobileBackdrop || event.target === mobileContainer) {
    mobileBackdrop.style.display = 'none';
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && mobileBackdrop.style.display !== 'none') {
    mobileBackdrop.style.display = 'none';
  }
});
mobileBtnSignIn.addEventListener('click', login);

// requisito 18
const agreementCheckbox = document.querySelector('#agreement');

agreementCheckbox.addEventListener('change', () => {
  const submitButton = document.querySelector('#submit-btn');
  submitButton.disabled = !agreementCheckbox.checked;
});

// requisito 20
const textArea = document.querySelector('#textarea');

textArea.addEventListener('input', () => {
  const counter = document.querySelector('#counter');
  counter.innerText = 500 - (textArea.value.length);
});

//  requisito 21
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const houseInput = document.querySelector('#house');
const radiosFamily = document.querySelectorAll('.radios');
const subjects = document.querySelectorAll('.subject');
const avaliation = document.querySelectorAll('.radios-avaliation');
const textAreaUser = document.querySelector('#textarea');
const formData = document.querySelector('#form-data');
const evaluationForm = document.querySelector('#evaluation-form');

function studentName() {
  if (inputName.value !== '' && inputLastName !== '') {
    const span = document.createElement('span');
    span.id = 'user-full-name';
    span.innerHTML = `Nome: ${inputName.value} ${inputLastName.value}`;
    formData.appendChild(span);
  }
}

function studentEmail() {
  if (inputEmail.value !== '') {
    const span = document.createElement('span');
    span.id = 'user-email';
    span.innerHTML = `Email: ${inputEmail.value}`;
    formData.appendChild(span);
  }
}

function studentHouse() {
  for (let index = 0; index < houseInput.length; index += 1) {
    if (houseInput[index].selected) {
      const span = document.createElement('span');
      span.id = 'user-house';
      span.innerHTML = `Casa: ${houseInput[index].innerHTML}`;
      formData.appendChild(span);
    }
  }
}

function studentFamily() {
  for (let index = 0; index < radiosFamily.length; index += 1) {
    if (radiosFamily[index].checked) {
      const span = document.createElement('span');
      span.id = 'user-family';
      span.innerHTML = `Família: ${radiosFamily[index].value}`;
      formData.appendChild(span);
    }
  }
}

function studentSubjects() {
  let chosenSubjects = '';
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      chosenSubjects += `${subjects[index].value}, `;
    }
  }
  const span = document.createElement('span');
  span.id = 'user-subjects';
  let chosenSubjectsRemove = chosenSubjects.slice(0, -1);
  chosenSubjectsRemove = chosenSubjectsRemove.slice(0, -1);
  span.innerHTML = `Matérias: ${chosenSubjectsRemove}`;
  formData.appendChild(span);
}

function studentAvaliation() {
  for (let index = 0; index < avaliation.length; index += 1) {
    if (avaliation[index].checked) {
      const span = document.createElement('span');
      span.id = 'user-avaliation';
      span.innerHTML = `Avaliação: ${avaliation[index].value}`;
      formData.appendChild(span);
    }
  }
}

function studentObservations() {
  if (textAreaUser.value !== '') {
    const span = document.createElement('span');
    span.id = 'user-observations';
    span.innerHTML = `Observações: ${textAreaUser.value}`;
    formData.appendChild(span);
  }
}

function studentInfo() {
  evaluationForm.style.display = 'none';
  studentName();
  studentEmail();
  studentHouse();
  studentFamily();
  studentSubjects();
  studentAvaliation();
  studentObservations();
}

evaluationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  studentInfo();
});
