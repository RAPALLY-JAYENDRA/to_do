document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-items');
    const addTodoForm = document.getElementById('add-todo-form');
    const addNoteForm = document.getElementById('add-note-form');

    // Function to add a new todo item
    function addTodoItem(todoText, noteText) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const todoTextElement = document.createElement('span');
        todoTextElement.textContent = todoText;
        const noteTextElement = document.createElement('p');
        noteTextElement.textContent = noteText;
        li.appendChild(checkbox);
        li.appendChild(todoTextElement);
        if (noteText) {
            li.appendChild(noteTextElement);
        }
        todoList.appendChild(li);
    }

    // Event listener for adding a new todo item
    addTodoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoInput = document.getElementById('new-todo');
        const noteInput = document.getElementById('new-note');
        const todoText = todoInput.value.trim();
        const noteText = noteInput.value.trim();
        if (todoText) {
            addTodoItem(todoText, noteText);
            todoInput.value = '';
            noteInput.value = '';
        }
    });

    // Event listener for adding a note to a todo item
    addNoteForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const noteInput = document.getElementById('new-note');
        const noteText = noteInput.value.trim();
        const selectedTodo = document.querySelector('input[type="checkbox"]:checked');
        if (selectedTodo && noteText) {
            const noteTextElement = document.createElement('p');
            noteTextElement.textContent = noteText;
            selectedTodo.parentNode.appendChild(noteTextElement);
            noteInput.value = '';
        }
    });

    // Event listener for marking a todo item as done
    todoList.addEventListener('change', function(event) {
        if (event.target.type === 'checkbox') {
            const listItem = event.target.parentNode;
            if (event.target.checked) {
                listItem.style.textDecoration = 'line-through';
            } else {
                listItem.style.textDecoration = 'none';
            }
        }
    });
});