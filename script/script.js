var form = document.querySelector("[data-form]");
var lists = document.querySelector("[data-list]");
var input = document.querySelector("[data-input]");

// array for store the data in todo
let todoArr = [];

// Form part
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let id = Math.random() * 1000;
  console.log(id);

  const todo = new Todo(id, input.value);
  console.log(todo);

  todoArr = [...todoArr, todo];
  console.log(todoArr);

  UI.displayData();
});

// make object instance
class Todo {
  constructor(id, todo) {
    this.id = id;
    this.todo = todo;
  }
}

// display the todo list
class UI {
  static displayData() {
    let displayData = todoArr.map((item) => {
      return `<div class="todo">
            <p>${item.todo}</p>
            <span><img src="https://img.icons8.com/ios/50/null/delete--v1.png" /alt="bin"></span>
        </div>`;
    });
    lists.innerHTML = (displayData).join("");
  }
}
