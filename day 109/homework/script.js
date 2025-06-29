function addTask() {
    const task = document.getElementById("taskInput").value;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
    }

    function displayTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const list = document.getElementById("taskList");

        list.innerHTML = "";
        tasks.forEach((t) => {
            const li = document.createElement("li");
            li.innerText = t;
            list.appendChild(li);
        });
    }

    
    window.onload = displayTasks();

document.addEventListener('click', addTask());