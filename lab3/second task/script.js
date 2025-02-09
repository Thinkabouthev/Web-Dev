document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    let todos = JSON.parse(localStorage.getItem('todos') || '[]');

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(function(todo) {
            const todoElement = createTodoElement(todo);
            todoList.appendChild(todoElement);
        });
    }

    function createTodoElement(todo) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        if (todo.completed) {
            todoItem.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('todo-checkbox');
        checkbox.checked = todo.completed;

        const todoText = document.createElement('span');
        todoText.classList.add('todo-text');
        todoText.textContent = todo.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = '❌';

        checkbox.addEventListener('change', function() {
            todo.completed = checkbox.checked;
            todoItem.classList.toggle('completed');
            saveTodos();
        });

        deleteBtn.addEventListener('click', function() {
            todos = todos.filter(function(t) {
                return t.id !== todo.id;
            });
            todoItem.remove();
            saveTodos();
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteBtn);

        return todoItem;
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const text = input.value.trim();

        if (text) {
            const todo = {
                id: Date.now(),
                text: text,
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
