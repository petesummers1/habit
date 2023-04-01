document.getElementById("habit-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const habitInput = document.getElementById("habit");
  const habitName = habitInput.value.trim();

  if (habitName === "") {
    alert("Please enter a habit name.");
    return;
  }

  const listItem = document.createElement("li");

  const habitText = document.createElement("span");
  habitText.innerText = habitName;
  listItem.appendChild(habitText);

  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", function() {
    habitText.classList.toggle("completed");
  });
  listItem.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function() {
    listItem.remove();
  });
  listItem.appendChild(deleteButton);

  document.getElementById("habit-list").appendChild(listItem);

  habitInput.value = "";
});
