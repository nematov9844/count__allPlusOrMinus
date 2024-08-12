let modal = document.getElementById("modal");
let input = document.getElementById("input");
let save = document.getElementById("save");
let add1 = document.getElementById("add1");
let add2 = document.getElementById("add2");
let add3 = document.getElementById("add3");
let add4 = document.getElementById("add4");
let open_tasks = document.getElementById("open-tasks");
let pending_tasks = document.getElementById("pending-tasks");
let inprog_tasks = document.getElementById("inprog-tasks");
let complete_tasks = document.getElementById("complete-tasks");
let select = document.getElementById("select");
let open_listBtn = document.getElementById("open-list");
let pending_listBtn = document.getElementById("pending-list");
let progress_listBtn = document.getElementById("progress-list");
let complete_listBtn = document.getElementById("complete-list");

let addValue;

open_listBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (open_tasks.style.display === "grid") {
    open_tasks.style.display = "none";
  } else {
    open_tasks.style.display = "grid";
  }
});

pending_listBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (pending_tasks.style.display === "grid") {
    pending_tasks.style.display = "none";
  } else {
    pending_tasks.style.display = "grid";
  }
});

pending_listBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inprog_tasks.style.display === "grid") {
    inprog_tasks.style.display = "none";
  } else {
    inprog_tasks.style.display = "grid";
  }
});

complete_listBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (complete_tasks.style.display === "grid") {
    complete_tasks.style.display = "none";
  } else {
    complete_tasks.style.display = "grid";
  }
});

modal.style.display = "none";
save.addEventListener("click", (e) => {
  e.preventDefault();
  const newTask = document.createElement("h1");
  newTask.classList.add(
    "bg-blue-100",
    "p-2",
    "w-full",
    "rounded",
    "hover:bg-blue-200",
    "flex",
    "justify-between"
  );
  newTask.innerHTML = `
  <h1 class="font-bold">${input.value}</h1>
  <p>${addValue.children.length + 1}</p>
   `;
  if (select.value == "open") {
    open_tasks.appendChild(newTask);
  } else if (select.value == "pending") {
    pending_tasks.appendChild(newTask);
  } else if (select.value == "progress") {
    inprog_tasks.appendChild(newTask);
  } else if (select.value == "complete") {
    complete_tasks.appendChild(newTask);
  } else {
    addValue.appendChild(newTask);
  }
  modalDisplay();
});
add1.addEventListener("click", function () {
  modal.style.display = "flex";
  input.value = "";
  addValue = open_tasks;
});
add2.addEventListener("click", function () {
  modal.style.display = "flex";
  input.value = "";
  addValue = pending_tasks;
});
add3.addEventListener("click", function () {
  modal.style.display = "flex";
  input.value = "";
  addValue = inprog_tasks;
});
add4.addEventListener("click", function () {
  modal.style.display = "flex";
  input.value = "";
  addValue = complete_tasks;
});

function modalDisplay() {
  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
}
