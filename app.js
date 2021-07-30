
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// load event listeners
loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
}

// add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }

// create a list item

const li = document.createElement('li');
//add class

li.className = 'collection-item';

//text node & append
li.appendChild(document.createTextNode(taskInput.value));

// link element
const link = document.createElement('a');

link.className = 'delete-item secondary-content';

link.innerHTML = '<i class="fa fa-remove"></i>';

//append link to li
li.appendChild(link);

//appenf li to ul
taskList.appendChild(li);

//clear input

taskInput.value = '';
    e.preventDefault();

}