/*jshint esversion: 6 */
// Declare variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const add_button = document.querySelector('#task-form .btn');
const clear_btn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

// Load All event listeners
loadEventListeners();

function loadEventListeners(){
    // Add task
    form.addEventListener('submit', addNewTask);
    // Remove task
    taskList.addEventListener('click', removeTask);
    // lear Tasks
    clear_btn.addEventListener('click', clearTasks);
    // filter through tasks
    filter.addEventListener('keyup', filterTasks);
}


function addNewTask(e){
    if ( taskInput.value === '' ) {
        alert('Add a task');
        return;
    }
    // create li item
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // add text
    li.appendChild(document.createTextNode(taskInput.value));
    // create link
    const link = document.createElement('a');
    link.className = ('delete-item secondary-content');
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // append link to li
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li);

    // cleat taskInput
    taskInput.value = '';

    e.preventDefault();

}

function removeTask(e) {
    $target = e.target;

    if ( $target.classList.contains('fa-remove') ) {
        if ( confirm('Are you sure?') ) {
            $target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}

function clearTasks(e) {
    while ( taskList.hasChildNodes() ) {
        taskList.removeChild(taskList.lastElementChild);
    }
}

function filterTasks(e) {
    let text = e.target.value.toLowerCase();
    let allLi = document.querySelectorAll('.collection-item');

    allLi.forEach(item => {
        let item_text = item.textContent.toLowerCase();
        if ( item_text.indexOf(text) != -1 ) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
