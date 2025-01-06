let tasks = [];

const addTask = () => {
  const taskInput = document.querySelector("#taskInput");
  const text = taskInput.ariaValueMax.trim();

  if (text) {
    tasks.push({ text: text, completed: false });

    updateTaskList();
  }
};

const updateTaskList = () => {
  const taskList = document.querySelector("#task-list");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
    <div class="taskItem">
        <div class="task ${task.completed?'completed':''}">
            <input type="checkbox" name="" class="checkbox" ${task.completed?'checked':''}/>
            <p>${task.text}</p>
        </div>
        <div class="icons">
        <i class="ri-delete-bin-line" onClick="editTask(${index})"></i>
        <i class="ri-edit-box-line" onClick="deleteTask(${index})"></i>
            
        </div>
    </div>
        `;
        listItem.addEventListener('change',()=>toggleTaskComplete(index))
        taskList.append(listItem)
  });
};

document.getElementById("newTask").addEventListener("click", function (e) {
  e.preventDefault();

  addTask();
});
