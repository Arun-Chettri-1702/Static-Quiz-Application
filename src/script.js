document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("question-container");
  const quizQuestion = document.getElementById("quiz-question");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const startBtn = document.getElementById("startBtn");
  const restartQuiz = document.getElementById("restart-quiz");
  const nextBtn = document.getElementById("next-btn");

  const questions = [
    {
      question: "What is the capital of France ?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      marks: 5,
    },
    {
      question: "What planet is known as the Red Planet ?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      marks: 6,
    },
    {
      question: "Who wrote 'Hamlet' ?",
      choices: [
        "Charlws Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mart Twain",
      ],
      answer: "William Shakespeare",
      marks: 10,
    },
  ];

  let totalMarks = 0;
  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    quizQuestion.textContent = `${questions[currentQuestionIndex].question}  
    (${questions[currentQuestionIndex].marks} marks)`;
    choicesList.innerHTML = ""; // clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      let li = document.createElement("li");
      li.textContent = `${choice}`;
      li.classList.add("answerOption");
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    let correctAnswer = questions[currentQuestionIndex].answer;
    if (correctAnswer === choice) {
      score += questions[currentQuestionIndex].marks;
    }
    totalMarks += questions[currentQuestionIndex].marks;
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      showResult();
    } else {
      showQuestion();
    }
    // nextBtn.classList.remove("hidden");
  }

  /*   nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex === questions.length) {
      showResult();
    } else {
      showQuestion();
    }
  }); */

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${totalMarks}`;
  }

  restartQuiz.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    startQuiz();
  });
});
