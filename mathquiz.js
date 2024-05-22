// Descriptive variable names
let numberOfQuestions = 5;
let correctAnswers = 4;
let userName = "John Doe";

// Distinct data types
let scorePercentage = (correctAnswers / numberOfQuestions) * 100; // int and float

// Implementing mathematical operations
let remainingQuestions = numberOfQuestions - correctAnswers;

// Decision making with if and else
let resultMessage;
if (scorePercentage >= 80) {
    resultMessage = `${userName}, you passed the quiz!`;
} else {
    resultMessage = `${userName}, you did not pass the quiz.`;
}

// Utilizing logical operators
if (scorePercentage >= 80 && remainingQuestions <= 1) {
    console.log("Great job! You almost got everything correct.");
} else if (scorePercentage < 80 || remainingQuestions > 1) {
    console.log("You need to review the material and try again.");
}

// Output techniques
console.log(resultMessage);
