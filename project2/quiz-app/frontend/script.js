let questions = [];
let current = 0;
let score = 0;
let timer;
let timeLeft = 10;
let username = "";

async function fetchQuestions() {
  const res = await fetch("http://localhost:3000/api/questions");
  questions = await res.json();
  showQuestion();
}

function startQuiz() {
  const nameInput = document.getElementById("username").value.trim();
  if (nameInput === "") {
    alert("Please enter your name!");
    return;
  }
  username = nameInput;

  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  fetchQuestions();
}

function showQuestion() {
  clearInterval(timer);
  timeLeft = 10;
  document.getElementById("time").textContent = timeLeft;

  const q = questions[current];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });

  startTimer();
}

function checkAnswer(selected) {
  const correct = questions[current].answer;
  if (selected === correct) {
    score++;
  }
  document.getElementById("score").textContent = `Score: ${score}`;
  nextQuestion();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("result-box").style.display = "block";

  const percent = Math.round((score / questions.length) * 100);
  document.getElementById("final-user").textContent = `👤 Player: ${username}`;
  document.getElementById("final-score").textContent = `✅ Score: ${score} out of ${questions.length}`;
  document.getElementById("final-percent").textContent = `📊 Accuracy: ${percent}%`;
}

document.getElementById("next-btn").onclick = nextQuestion;
