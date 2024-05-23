const questions = [
    {
        question: "I'm the heart of the computer, the central command. Circuits and connections, a technological land.Processors and memory, I keep them all in line. What am I?",
        answers: {
            A: "A Map",
            B: "A Brain",
            C: "A Motherboard",
            D: "A CPU"
        },
        correctAnswer: "C"
    },
    {
        question: "What do you call a computer that makes perfect cookies?",
        answers: {
            A: "A Dell",
            B: "A Chip",
            C: "A Byte",
            D: "A Crumble"
        },
        correctAnswer: "B"
    }, 
    {
        question: "What do you call a computer that loves to go swimming?",
        answers: {
            A: "A Splash-Top",
            B: "A Wet-Drive",
            C: "A Cache-Splash",
            D: "A Surf-Ace"
        },
        correctAnswer: "D"
    },
    {
        question: "Who is the strongest anime character in their prime?",
        answers: {
        A: "Ichigo Kurosaki",
        B: "Saitama",
        C: "Izuku Midoriya",
        D: "Naruto Uzumaki"
         },
        correctAnswer: "B"
    },    
    {
        question: "Can he beat Goku though?",
        answers: {
            A: "Obviously",
            B: "Nah",
         },
        correctAnswer: "B"
    }, 
    {
        question: "How many stars are there in the sky?",
        answers: {
            A: "Only 1",
            B: "100,000,000,000",
            C: "Infinite",
            D: "Why are you thinking about this? You have code to practice"
        },
        correctAnswer: "D"
    },
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function loadQuestion() {
    const questionContainer = document.getElementById('ques');
    const optionsContainer = document.getElementById('opt');

    questionContainer.innerHTML = questions[currentQuestion].question;
    optionsContainer.innerHTML = '';

    for (let key in questions[currentQuestion].answers) {
        optionsContainer.innerHTML += `
            <label>
                <input type="radio" name="option" value="${key}">
                ${key}: ${questions[currentQuestion].answers[key]}
            </label><br>
        `;
    }
}

function checkAns() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const answer = selectedOption.value;
        userAnswers[currentQuestion] = answer;

        if (answer === questions[currentQuestion].correctAnswer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        alert("Please select an answer");
    }
}

function showResults() {
    const questionContainer = document.getElementById('ques');
    const optionsContainer = document.getElementById('opt');
    const scoreContainer = document.getElementById('score');
    const restartButton = document.getElementById('restartButton');
    const submitButton = document.getElementById('btn');

    questionContainer.innerHTML = '';
    optionsContainer.innerHTML = '';
    submitButton.style.display = 'none';
    restartButton.style.display = 'block';

    let resultsHTML = `You scored ${score} out of ${questions.length}<br><br>`;
    resultsHTML += '<h3>Review your answers:</h3><ol>';

    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index] ? userAnswers[index] : 'No answer';
        const correctAnswer = question.correctAnswer;
        const correctAnswerText = question.answers[correctAnswer];

        resultsHTML += `<li>
            ${question.question}<br>
            Your answer: ${userAnswer} - ${question.answers[userAnswer] || ''}<br>
            Correct answer: ${correctAnswer} - ${correctAnswerText}
        </li><br>`;
    });

    resultsHTML += '</ol>';
    scoreContainer.innerHTML = resultsHTML;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    loadQuestion();

    document.getElementById('score').innerHTML = '';
    document.getElementById('btn').style.display = 'block';
    document.getElementById('restartButton').style.display = 'none';
}

loadQuestion();