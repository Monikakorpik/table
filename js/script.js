{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-done");
        
        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });

        const removeButtons = document.querySelectorAll(".js-remove");
        
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
               <li class="tasks__item js-task">
                   <button class="tasks__button tasks__button--done js-done">
                   ${task.done ? "✔" : ""}
                </button>
                <span class="tasks__content${ task.done ? " tasks__content--done" : ""}">
                   ${task.content}</span>
                <button class="tasks__button tasks__button--remove js-remove">🗑
                </button>
               </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;
        bindEvents();
    };
    const onFormSubmit =  (event) => {
        event.preventDefault();
        const newTaskItem = document.querySelector(".js-newTask");
        const newTaskContent = newTaskItem.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskItem.value = "";
        }
    };
    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
}
    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="section__listItem">
                    <button class="js-done section__buttonDone">${task.done ? "✔" : ""}</button>
                    <span class="section__taskContent${task.done ? " section__listItem--done" : ""}">${task.content}</span> 
                    <button class="js-remove section__buttonDelete">🗑</button>
                </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const input = document.querySelector(".js-newTask");
        const newTaskContent = input.value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
        input.value = "";
        input.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
