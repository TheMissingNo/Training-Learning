const inputTask = document.querySelector('.newtask');
const btnTask =document.querySelector('.addtask');
const tasks = document.querySelector('.tasks');
clearInput();
getSavedTasks();

function createListItem(){
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', function(e){
    if (e.keyCode===13){
        if (!inputTask.value)return; /*addpopup*/
        createTask(inputTask.value);
    }
});

function createTask(textIn){
    const li =createListItem()
    li.innerText = textIn;
    tasks.appendChild(li);
    clearInput()
    createDelete(li);
    saveTask();
}

function clearInput(){
    inputTask.value='';
    inputTask.focus();
}
function createDelete(li){
    li.innerText+= ' ';
    const btnDelete = document.createElement ('button');
    btnDelete.innerText = 'Delete';
    li.appendChild(btnDelete);
    btnDelete.setAttribute('class', 'delete');

}

btnTask.addEventListener('click', function(e){
if (!inputTask.value)return; /*addpopup*/
createTask(inputTask.value);
});

document.addEventListener('click', function(e){
    const el=e.target;

    if (el.classList.contains('delete')){
        el.parentElement.remove();
        saveTask();
    }
});

function saveTask(){
    const liTasks = tasks.querySelectorAll('li');
    const listTasks =[];
    for (let task of liTasks){
       let taskText = task.innerText.replace('Delete','').trim();
       listTasks.push(taskText);
    }
    const taskJSON = JSON.stringify(listTasks);
    localStorage.setItem('taskslist', taskJSON);
}

function getSavedTasks(){
    const tasks = localStorage.getItem('taskslist');
    const listTasks = JSON.parse(tasks);
    for (let task of listTasks){
        createTask(task);
    }
}