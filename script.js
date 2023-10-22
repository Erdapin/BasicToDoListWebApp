//Sample Tasks
const tasks = ['Learn Web Development','Build a To-Do App','Deploy the App'];

//Function to render Tasks
function renderTasks(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML='';

    tasks.forEach(task =>{
        const li = document.createElement('li');
        li.textContent = task;
        li.onclick = () => removeTask(task);
        taskList.appendChild(li);
    });
}

//Function to add new Task
function addTask(){
    const newTaskInput = document.getElementById('newTask');
    const newTask = newTaskInput.value.trim();
    if(newTask !== ''){
        tasks.push(newTask);
        newTaskInput.value = '';
        renderTasks();
    }
}

//Function to remove task
function removeTask(task){
    const taskIndex = tasks.indexOf(task);
    if(taskIndex !== -1){
        tasks.splice(taskIndex,1);
        renderTasks();
    }
}

//Initial Render
renderTasks();