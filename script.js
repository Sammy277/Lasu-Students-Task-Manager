function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox">
    <span>${text}</span>
    <button class="icon" onclick="editTask(this)">✏️</button>
    <button class="icon" onclick="deleteTask(this)">🗑️</button>
  `;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function editTask(button) {
  const li = button.parentElement;
  const span = li.querySelector("span");
  const currentText = span.textContent;

  const input = document.createElement("input");
  input.type = "text";
  input.value = currentText;

  input.onblur = () => {
    span.textContent = input.value;
    li.replaceChild(span, input);
  };

  input.onkeypress = (e) => {
    if (e.key === "Enter") input.blur();
  };

  li.replaceChild(input, span);
  input.focus();
}

function deleteTask(button) {
  button.parentElement.remove();
}

// ✅ Allow pressing ENTER to add a task
document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
