// Calculator Functions
let display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function clearEntry() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Timetable Data & Logic
const timetableData = {
  Monday:    ["Math", "English", "Physics", "Break"],
  Tuesday:   ["Chemistry", "Math", "CS", "Break"],
  Wednesday: ["Biology", "CS", "English", "Break"],
  Thursday:  ["Physics", "Biology", "Math", "Break"],
  Friday:    ["CS", "English", "Chemistry", "Break"]
};

const tbody = document.querySelector("#timetable tbody");

for (let day in timetableData) {
  let row = document.createElement("tr");

  let dayCell = document.createElement("td");
  dayCell.textContent = day;
  row.appendChild(dayCell);

  timetableData[day].forEach(subject => {
    let cell = document.createElement("td");
    cell.textContent = subject;
    row.appendChild(cell);
  });

  tbody.appendChild(row);
}
