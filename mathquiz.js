const quizData = [
    {
        question: "Which of these is not a perfect square?",
        options: ["64", "289", "36", "233"],
        answer: "233"
    },
    {
        question: "Find the value of x in the following equation: 5x + 3 = 23",
        options: ["5", "4", "7", "3"],
        answer: "4"
    }
]

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    questionElement.textContent = quizData[currentQuestionIndex].question;
    optionsElement.innerHTML = "";
    quizData[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    questionElement.textContent = "";
    optionsElement.textContent = "";
    submitButton.style.display = "none";
    resultElement.textContent = `You scored ${score} out of ${quizData.length}`;
}

submitButton.addEventListener("click", displayQuestion);
