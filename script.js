document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question:
        "Which programming language is known as the backbone of web development?",
      choices: ["Python", "JavaScript", "C++", "Ruby"],
      answer: "JavaScript",
    },
    {
      question: "What is the chemical symbol for water?",
      choices: ["O₂", "H₂O", "CO₂", "H₂"],
      answer: "H₂O",
    },
  ];

  const startQuiz = document.getElementById("start-quiz");
  const questionContainer = document.getElementById("question-container");
  const questionDisplay = document.getElementById("question-display");
  const choicesList = document.getElementById("choices-list");
  const nextButton = document.getElementById("next-button");
  const scoreContainer = document.getElementById('score-container');
  const scoreDisplay = document.getElementById('score-display');
  const restartButton = document.getElementById('restart-button');

  let currentQuestionIndex = 0;
  let score = 0;
  let selectedChoice = "";

  startQuiz.addEventListener("click", showQuestions);

  function showQuestions() {
    if (currentQuestionIndex < questions.length) {
      if (startQuiz.classList.contains("hidden") === false)
        startQuiz.classList.add("hidden");
      if (questionContainer.classList.contains("hidden") === true)
        questionContainer.classList.remove("hidden");
      nextButton.classList.add('hidden');
      
      const ques = questions[currentQuestionIndex].question;
      questionDisplay.innerText="";
      questionDisplay.textContent = `${ques}`;

      const fourChoices = questions[currentQuestionIndex].choices;
      choicesList.innerText = "";
      fourChoices.forEach((choice) => choicesDisplay(choice));
    }else{
        showScore();
    }
  }

  function choicesDisplay(choice) {
    let li = document.createElement("li");
    li.textContent = `${choice}`;
    li.addEventListener("click", () => {
      selectedChoice = li.textContent;
      nextButton.classList.remove("hidden");
      li.classList.add("bgColor");
      choicesList.querySelectorAll("li").forEach((choice) => {
        if (choice !== li) {
          choice.classList.remove("bgColor");
        }
      });
    });
    choicesList.appendChild(li);
  }

  function showScore(){
    questionContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreDisplay.textContent=`${score} out of ${questions.length}`
  }

  restartButton.addEventListener('click',()=>{
    currentQuestionIndex=0;
    score=0;
    showQuestions();
    scoreContainer.classList.add('hidden');
  })
  nextButton.addEventListener("click", () => {
    if (selectedChoice === questions[currentQuestionIndex].answer) {
      score++;
    }
    currentQuestionIndex++;
    showQuestions();
  });

});
