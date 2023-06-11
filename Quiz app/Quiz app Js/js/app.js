const questions = [
  {
    question:
      "I asked an old couple for directions, but _____ of them knew where the cinema was.",
    answers: [
      { text: "all", correst: false },
      { text: "both", correst: true },
      { text: "none", correst: false },
      { text: "neither", correst: false },
    ],
  },
  {
    question:
      "She was born ____________ the small hours of a Saturday morning — at three-thirty, to be exact.",
    answers: [
      { text: "at", correst: false },
      { text: "in", correst: true },
      { text: "on", correst: false },
      { text: "above", correst: false },
    ],
  },
  {
    question: "Where's the ____________ post office, please?",
    answers: [
      { text: "near", correst: false },
      { text: "nearest", correst: true },
      { text: "more", correst: false },
      { text: "above", correst: false },
    ],
  },
  {
    question: "It took him some time _____ _____ damage to the car.",
    answers: [
      { text: "to admit", correst: true },
      { text: "having", correst: false },
      { text: "more", correst: false },
      { text: "admitting", correst: false },
    ],
  },
  {
    question: " There is ................... hospital in the next town",
    answers: [
      { text: "the", correst: false },
      { text: "a", correst: true },
      { text: " spoek", correst: false },
      { text: "to ", correst: false },
    ],
  },
  {
    question: "  I'd like ............. coffee, please.",
    answers: [
      { text: " a lot of", correst: false },
      { text: "three cups", correst: true },
      { text: "a spoek", correst: false },
      { text: "to bootle", correst: false },
    ],
  },
  {
    question: " If my life partner … English, she would go there.",
    answers: [
      { text: "speak", correst: false },
      { text: "spoke", correst: true },
      { text: "will spoek", correst: false },
      { text: "to speak", correst: false },
    ],
  },
  {
    question: "  Ishrukh has got ............... sweets. Do you want some",
    answers: [
      { text: "a cup ", correst: false },
      { text: "a loaf of", correst: true },
      { text: "will handfil", correst: false },
      { text: "to speak", correst: false },
    ],
  },
  {
    question: " If my parents … alive, our life would be different.",
    answers: [
      { text: "are", correst: false },
      { text: "were", correst: true },
      { text: "will be", correst: false },
      { text: "to get", correst: false },
    ],
  },
  {
    question:
      "Mum thinks my hair needs _____ , but I don't want _____ it cut yet",
    answers: [
      { text: "travel", correst: false },
      { text: "to travel", correst: true },
      { text: "having travel", correst: false },
      { text: "travelling", correst: false },
    ],
  },
];

const questionElement = document.querySelector("#queuestions");
const answerButton = document.querySelector("#answers-buttons");
const nextButton = document.querySelector("#next-btn");

let currentQuestionsInd = 0;
let score = 0;

function startQuiz() {
  currentQuestionsInd = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionsInd];
  let questionsNo = currentQuestionsInd + 1;
  questionElement.innerHTML = questionsNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correst) {
      button.dataset.correst = answer.correst;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correst === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correst === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionsInd++;
  if (currentQuestionsInd < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionsInd < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
