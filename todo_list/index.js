const todoList = [
  // {
  //   name: "do1",
  //   dueDate: "2025-01-23",
  // },
  // {
  //   name: "do1",
  //   dueDate: "2025-01-23",
  // },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
    <div class="flex mx-16 my-6 items-baseline">      
      <div class="text-slate-100 mr-10">${name}</div>
      <div class="text-slate-100 mr-10 border-slate-50 border-[2px] rounded-lg p-2">${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="bg-purple-500 p-2 rounded-lg">Delete</button>
    </div>
`;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputName = document.querySelector(".js-input-todo");
  const name = inputName.value;
  const inputDate = document.querySelector(".js-date");
  const dueDate = inputDate.value;

  todoList.push({
    name,
    dueDate,
  });
  inputName.value = "";

  renderTodoList();
}
