const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let valid = true;

  // Name
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    valid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  // Email
  const email = document.getElementById("email").value.trim();
  if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
    document.getElementById("emailError").innerText = "Enter valid email";
    valid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Message
  const message = document.getElementById("message").value.trim();
  if (message.length < 5) {
    document.getElementById("messageError").innerText = "Message too short";
    valid = false;
  } else {
    document.getElementById("messageError").innerText = "";
  }

  if (valid) {
    alert("Message Sent Successfully!");
    form.reset();
  }
});
const addBtn = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task}</span>
    <button class="delete">X</button>
  `;

  // Mark complete on click
  li.querySelector("span").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete task
  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
});
