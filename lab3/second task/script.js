document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');
    const todoTemplate = document.getElementById('todo-template');


    let todos = JSON.parse(localStorage.getItem('todos') || '[]');

   
    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const todoElement = createTodoElement(todo);
            todoList.appendChild(todoElement);
        });
    }


    function createTodoElement(todo) {
        const template = todoTemplate.content.cloneNode(true);
        const todoItem = template.querySelector('.todo-item');
        const checkbox = template.querySelector('.todo-checkbox');
        const todoText = template.querySelector('.todo-text');
        const deleteBtn = template.querySelector('.delete-btn');

        todoItem.dataset.id = todo.id;
        checkbox.checked = todo.completed;
        todoText.textContent = todo.text;

        if (todo.completed) {
            todoItem.classList.add('completed');
        }


        checkbox.addEventListener('change', () => {
            todo.completed = checkbox.checked;
            todoItem.classList.toggle('completed');
            saveTodos();
        });


        deleteBtn.addEventListener('click', () => {
            todos = todos.filter(t => t.id !== todo.id);
            todoItem.remove();
            saveTodos();
        });

        return template;
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        
        if (text) {
            const todo = {
                id: Date.now(),
                text,
                completed: false
            };

            todos.push(todo);
            const todoElement = createTodoElement(todo);
            todoList.appendChild(todoElement);
            saveTodos();
            input.value = '';
        }
    });

    renderTodos();
});