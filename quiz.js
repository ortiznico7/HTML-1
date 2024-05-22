// // const startButton = document.getElementById('start-btn')
// // const nextButton = document.getElementById('next-btn')
// // const questionContainerElement = document.getElementById('question-container')

// // const shuffledQuestions = document.getElementById('question')
// // const currentQuestionIndex = document.getElementById('answer-buttons')

// // startButton.addEventListener('click', startGame)

// // function startGame() {
// //     console.log('Started')
// //    startButton.classlist.add('hide')
// //     shuffledQuestions = questions.sort(() => Math.random() - .5)
// //     questionContainerElement.classlist.remove('hide')
// //     setNextQuestion()
// // }

// // function setNextQuestion() {
// //     showQuestion(shuffledQuestions[currentQuestionIndex])
// // }

// // function showQuestion(question){
// //     questionContainerElement.innerText = question.question
// //     question.answers.forEach(answer => {
// //         const button = document.createElement('button')
// //         button.innerText = answer.text
// //         button.classList.add('btn')
// //         if (answer.correct) {
// //             button.dataset.correct = answer.correct
// //         }
// //         button.addEventListener('click', selectAnswer)
// //         answerButtonsElement.appendChild(button)
// //     })
// // }

// // function resetState() {
// //     nextbutton.classList.add('hide')
// //     while (answerButtonsElement.firstChild) {
// //         answerButtonsElement.removeChild
// //         (answerButtonsElement.firstChild)
// //     }
// // }

// // function selectAnswer(e) {
// //     const selectedButton = e.target
// //     const correct = selectedButton.dataset.correct
// //     setStatusClass(document.body, correct)
// //     Array.from(answerButtonsElement.children).forEach(button => {
// //         setStatusClass(button, button.dataset.correct)
// //     })
// //     nextButton.classlist.remove('hide')
// // }

// // function setStatusClass(element, correct) {
// //     clearStatusClass(element)
// //     if(correct) {
// //         element.classList.add('correct')
// //     } else {
// //         element.classList.add('wrong')
// //     }
// // }

// // function clearStatusClass(element) {
// //     element.classList.remove('correct')
// //     element.classList.remove('wrong')
// // }

// // const questions = [
// //     {
// //         question: 'What is 2 + 2',
// //         answers: [
// //             { text: '4', correct: true },
// //             { text: '22', correct: false }
// //         ]
// //     }
// // ]

// // const startButton = document.getElementById('start-btn');
// // const nextButton = document.getElementById('next-btn');
// // const questionContainerElement = document.getElementById('question-container');
// // const questionElement = document.getElementById('question');
// // const answerButtonsElement = document.getElementById('answer-buttons');
// // const scoreElement = document.getElementById('score');
// // const timerElement = document.getElementById('timer');

// // let shuffledQuestions, currentQuestionIndex, score, timer;

// // startButton.addEventListener('click', startGame);
// // nextButton.addEventListener('click', () => {
// //     currentQuestionIndex++;
// //     setNextQuestion();
// // });

// document.addEventListener('DOMContentLoaded', function() {
//     const startButton = document.getElementById('start-btn');
//     const nextButton = document.getElementById('next-btn');
//     const questionContainerElement = document.getElementById('question-container');
//     const questionElement = document.getElementById('question');
//     const answerButtonsElement = document.getElementById('answer-buttons');
//     const scoreElement = document.getElementById('score');
//     const timerElement = document.getElementById('timer');

//     let shuffledQuestions, currentQuestionIndex, score, timer;

//     startButton.addEventListener('click', startGame);
//     nextButton.addEventListener('click', () => {
//         currentQuestionIndex++;
//         setNextQuestion();
//     });

//     // Rest of your code here...
// });


// // function startGame() {
// //     console.log('Started');
// //     startButton.classList.add('hide');
// //     shuffledQuestions = questions.sort(() => Math.random() - 0.5);
// //     currentQuestionIndex = 0;
// //     score = 0;
// //     timer = 60; // Set initial timer value
// //     updateTimer();
// //     questionContainerElement.classList.remove('hide');
// //     setNextQuestion();
// //     startTimer();
// // }

// function startGame() {
//     console.log('Started');
//     startButton.classList.add('hide'); // Corrected method name to add the 'hide' class
//     shuffledQuestions = questions.sort(() => Math.random() - 0.5);
//     currentQuestionIndex = 0;
//     score = 0;
//     timer = 60; // Set initial timer value
//     updateTimer();
//     questionContainerElement.classList.remove('hide');
//     setNextQuestion();
//     startTimer();
// }


// function setNextQuestion() {
//     resetState();
//     showQuestion(shuffledQuestions[currentQuestionIndex]);
// }

// function showQuestion(question) {
//     questionElement.innerText = question.question;
//     question.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerText = answer.text;
//         button.classList.add('btn');
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener('click', selectAnswer);
//         answerButtonsElement.appendChild(button);
//     });
// }

// function resetState() {
//     nextButton.classList.add('hide');
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild);
//     }
//     clearStatusClass(document.body);
// }

// function selectAnswer(e) {
//     const selectedButton = e.target;
//     const correct = selectedButton.dataset.correct;
//     setStatusClass(selectedButton, correct);
//     if (correct) {
//         score++;
//     }
//     updateScore();
//     Array.from(answerButtonsElement.children).forEach(button => {
//         if (button.dataset.correct) {
//             setStatusClass(button, button.dataset.correct);
//         }
//     });
//     if (shuffledQuestions.length > currentQuestionIndex + 1) {
//         nextButton.classList.remove('hide');
//     } else {
//         endGame();
//     }
// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element);
//     if (correct) {
//         element.classList.add('correct');
//     } else {
//         element.classList.add('wrong');
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove('correct');
//     element.classList.remove('wrong');
// }

// function updateScore() {
//     scoreElement.innerText = `Score: ${score}/${shuffledQuestions.length}`;
// }

// function updateTimer() {
//     timerElement.innerText = `Time left: ${timer} seconds`;
// }

// function endGame() {
//     questionContainerElement.classList.add('hide');
//     nextButton.classList.add('hide');
//     startButton.innerText = 'Restart';
//     startButton.classList.remove('hide');
//     clearInterval(timerInterval); // Stop the timer
//     console.log(`End of game. Final score: ${score}/${shuffledQuestions.length}`);
// }

// const questions = [
//     {
//         question: 'What is 2 + 2?',
//         answers: [
//             { text: '4', correct: true },
//             { text: '22', correct: false }
//         ]
//     },
//     {
//         question: 'What is 5 * 5?',
//         answers: [
//             { text: '25', correct: true },
//             { text: '55', correct: false }
//         ]
//     },
//     {
//         question: 'What is 10 - 7?',
//         answers: [
//             { text: '3', correct: true },
//             { text: '7', correct: false }
//         ]
//     },
//     {
//         question: 'What is 8 / 2?',
//         answers: [
//             { text: '4', correct: true },
//             { text: '2', correct: false }
//         ]
//     },
//     {
//         question: 'What is the square root of 16?',
//         answers: [
//             { text: '4', correct: true },
//             { text: '8', correct: false }
//         ]
//     }
// ];

// let timerInterval;

// function startTimer() {
//     timerInterval = setInterval(() => {
//         timer--;
//         updateTimer();
//         if (timer <= 0) {
//             endGame();
//         }
//     }, 1000); // Update every second
// }
