let questions = [];
let current = 0;
let score = 0;
let time = 30;
let timer;

const questionBank = {
  cyber: [
    {
      question: "What is phishing?",
      options: ["Hacking", "Fake email scam", "Firewall", "VPN"],
      answer: "Fake email scam"
    }
  ],
  credit: [
    {
      question: "Best factor for credit score?",
      options: ["Payment history", "Color", "Bank", "Country"],
      answer: "Payment history"
    }
  ],
  web: [
    {
      question: "HTML stands for?",
      options: ["Hyper Text Markup Language", "High Text Machine", "Home Tool", "None"],
      answer: "Hyper Text Markup Language"
    }
  ]
};

function startCategory(cat) {
  questions = questionBank[cat];
  startQuiz();
}

function loadCustomQuiz() {
  const input = document.getElementById("customInput").value.trim();
  const lines = input.split("\n");

  questions = lines.map(line => {
    const parts = line.split("|");
    return {
      question: parts[0].trim(),
      options: parts[1].split(","),
      answer: parts[2].trim()
    };
  });

  startQuiz();
}

function startQuiz() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  startTimer();
  showQ();
}

function startTimer() {
  timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = "Time: " + time;

    if (time <= 0) {
      clearInterval(timer);
      showResult();
    }
  }, 1000);
}

function showQ() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const optDiv = document.getElementById("options");
  optDiv.innerHTML = "";

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => select(opt);
    optDiv.appendChild(btn);
  });
}

function select(opt) {
  if (opt === questions[current].answer) score++;

  current++;

  if (current < questions.length) {
    showQ();
  } else {
    clearInterval(timer);
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  let percent = (score / questions.length) * 100;
  document.getElementById("score").innerText =
    `Score: ${percent.toFixed(2)}%`;
}