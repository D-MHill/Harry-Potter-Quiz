// Store elements in variables
const quizContainer = document.querySelector('.quiz-container');
const submitButton = document.querySelector('.submitButton');

// Add event listener to change button color
submitButton.addEventListener('click', function() {
    submitButton.style.backgroundColor = 'purple';
});

// Create an array of objects for quiz questions
const quizQuestions = [
    {
        question: "What is the name of Harry's owl?",
        options: ["Hedwig", "Fawkes", "Errol"],
        correctAnswer: "Hedwig"
    },
    {
        question: "Which house does Harry belong to at Hogwarts?",
        options: ["Gryffindor", "Slytherin", "Hufflepuff"],
        correctAnswer: "Gryffindor"
    },
    {
        question: "Who is the headmaster of Hogwarts in Harry's first year?",
        options: ["Professor McGonagall", "Dumbledore", "Professor Snape"],
        correctAnswer: "Dumbledore"
    }
];

// Function to build the quiz
function buildQuiz() {
    let output = '<h2>Harry Potter Quiz</h2>';

    for (let index = 0; index < quizQuestions.length; index++) {
        output += `<div class="question">${index + 1}. ${quizQuestions[index].question}</div>`;

        for (let optionIndex = 0; optionIndex < quizQuestions[index].options.length; optionIndex++) {
            output += `<label><input type="radio" name="question${index}" value="${quizQuestions[index].options[optionIndex]}">${quizQuestions[index].options[optionIndex]}</label>`;
        }

        output += '<br>';
    }

    quizContainer.innerHTML = output;
}


buildQuiz();

// Function to show quiz results
function showResults() {
    let score = 0;
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    for (let i = 0; i < quizQuestions.length; i++) {
        const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);

        if (selectedOption) {
            const userAnswer = selectedOption.value;

            if (userAnswer === quizQuestions[i].correctAnswer) {
                score++;
                selectedOption.parentElement.style.color = 'green';
            } else {
                selectedOption.parentElement.style.color = 'red';
            }
        }
    }

    const resultContainer = document.getElementById('Result');
    resultContainer.innerHTML = `You got ${score} out of ${quizQuestions.length} correct!`;
}


submitButton.addEventListener('click', function() {
    showResults();
});
