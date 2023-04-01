const habits = [
  "Time Blocking",
  "Journaling",
  "Gratitude Practice",
  "Daily Goal Setting",
  "Movement Breaks",
  "Digital Detox",
  "Mindful Eating",
  "Active Listening",
  "Visualize Success"
];

const habitData = habits.map((habit) => {
  return {
    habit: habit,
    completed: false
  };
});

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    if (page.id === pageId) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });
}

function createHabitList() {
  const habitList = document.getElementById("habit-list");

  habits.forEach((habitName, index) => {
    const listItem = document.createElement("li");

    const habitText = document.createElement("span");
    habitText.innerText = habitName;
    listItem.appendChild(habitText);

    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.addEventListener("click", function() {
      habitText.classList.toggle("completed");
      habitData[index].completed = !habitData[index].completed;
      updateChart();
    });
    listItem.appendChild(completeButton);

    habitList.appendChild(listItem);
  });
}

function createChart() {
  const ctx = document.getElementById("habit-chart").getContext("2d");
  const chartData = {
    labels: habits,
    datasets: [
      {
        label: "Habits",
        data: habitData.map((habit) => (habit.completed ? 1 : 0)),
        backgroundColor: "rgba(75, 192, 192, 1)"
      }
    ]
  };

  return new Chart(ctx, {
    type: "bar",
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 1,
          ticks: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
         
