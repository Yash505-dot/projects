const newItem = document.querySelector(".items");
const submitRef = document.querySelector(".submit");
const newToDoItem = document.querySelector("#newTodo");

function createTodoRef(text) {
    const liRef = document.createElement('li');
    liRef.classList.add('item'); // Added class for styling

    liRef.innerHTML = `   
                <span>${text}</span>
                <button class="delete">&#xf014;</button>
            `;

    newItem.appendChild(liRef);
    newToDoItem.value = "";
}

submitRef.addEventListener('click', function () {
    createTodoRef(newToDoItem.value);
});

newItem.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});