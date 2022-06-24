const tasksContainer = document.querySelector('#lista-tarefas');
const inputElement = document.querySelector('#texto-tarefa');
const addTaskButton = document.querySelector('#criar-tarefa');
const clearAllButton = document.querySelector('#apaga-tudo');
const clearCompletedButton = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
const upButton = document.querySelector('#mover-cima');
const downButton = document.querySelector('#mover-baixo');
const removeSelectedButton = document.querySelector('#remover-selecionado');

function selectTask(event) {
  const task = event.target;
  const tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i] === task) {
      tasks[i].style.backgroundColor = 'grey';
      tasks[i].id = 'selected';
    } else {
      tasks[i].style.backgroundColor = '';
      tasks[i].id = '';
    }
  }
}

function toggleCompleted(event) {
  const task = event.target;
  task.className = task.className === '' ? 'completed' : '';
}

function addTaskEvents(element) {
  element.addEventListener('click', (event) => {
    selectTask(event);
  });
  element.addEventListener('dblclick', (event) => {
    toggleCompleted(event);
  });
}

function addTask() {
  const task = document.createElement('li');
  task.innerText = inputElement.value;
  addTaskEvents(task);
  inputElement.value = '';
  tasksContainer.appendChild(task);
}

function clearTasks(removeAll) {
  const tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
    if (removeAll || tasks[i].className === 'completed') {
      tasks[i].remove();
    }
  }
}

function removeSelected() {
  const selected = document.querySelector('#selected');
  if (selected !== null) {
    selected.remove();
  }
}

function moveTaskUp() {
  const selected = document.querySelector('#selected');
  if (selected !== null && selected !== tasksContainer.firstChild) {
    tasksContainer.insertBefore(selected, selected.previousSibling);
  }
}

function moveTaskDown() {
  const selected = document.querySelector('#selected');
  if (selected !== null && selected !== tasksContainer.lastChild) {
    selected.nextSibling.insertAdjacentElement('afterend', selected);
  }
}

function saveTasks() {
  const tasksHTML = tasksContainer.innerHTML;
  localStorage.userTasks = JSON.stringify(tasksHTML);
}

function loadTasks() {
  if (localStorage.userTasks !== undefined) {
    const tasksHTML = JSON.parse(localStorage.userTasks);
    tasksContainer.innerHTML = tasksHTML;

    const tasks = document.querySelectorAll('li');
    for (let i = 0; i < tasks.length; i += 1) {
      addTaskEvents(tasks[i]);
    }
  }
}

addTaskButton.addEventListener('click', addTask);
inputElement.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
clearAllButton.addEventListener('click', () => {
  clearTasks(true);
});
clearCompletedButton.addEventListener('click', () => {
  clearTasks(false);
});
saveButton.addEventListener('click', saveTasks);
upButton.addEventListener('click', moveTaskUp);
downButton.addEventListener('click', moveTaskDown);
removeSelectedButton.addEventListener('click', removeSelected);

loadTasks();
