const questions = [
    {
        question: "Which festival is strongly associated with Telangana?",
        options: ["Bathukamma", "Pongal", "Onam", "Bihu"],
        answer: "Bathukamma"
    },
    {
        question: "Pochampally is famous for which traditional craft?",
        options: ["Ikat weaving", "Blue pottery", "Wood carving", "Stone carving"],
        answer: "Ikat weaving"
    },
    {
        question: "Perini is a traditional form of what?",
        options: ["Dance", "Painting", "Food", "Weaving"],
        answer: "Dance"
    },
    {
        question: "Which of these is a Telangana traditional food?",
        options: ["Sarva Pindi", "Dhokla", "Appam", "Litti Chokha"],
        answer: "Sarva Pindi"
    },
    {
        question: "Oggu Katha is associated with which cultural tradition?",
        options: ["Folk storytelling", "Classical painting", "Handloom weaving", "Temple architecture"],
        answer: "Folk storytelling"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");

function showQuestion() {

    const q = questions[currentQuestion];

    questionElement.textContent = q.question;

    optionsElement.innerHTML = "";

    q.options.forEach(function(option) {

        const button = document.createElement("button");

        button.textContent = option;

        button.classList.add("option-btn");

        button.onclick = function() {
            checkAnswer(option);
        };

        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {

    const correctAnswer = questions[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        score += 10;
        alert("Correct! 🎉");
    } else {
        alert("Wrong answer!");
    }

    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(function(button) {
        button.disabled = true;
    });
}

nextButton.onclick = function() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        
    // Save quiz data
    localStorage.setItem("cultureScore", score);

    let quizCount = localStorage.getItem("quizCompleted");

    if (!quizCount) {
        quizCount = 0;
    }

    quizCount++;

    localStorage.setItem("quizCompleted", quizCount);

    questionElement.textContent = "Quiz Completed! 🎉";

    optionsElement.innerHTML = "";

    nextButton.style.display = "none";

    scoreElement.innerHTML =
        "Your Score: " + score + " / " + (questions.length * 10) +
        "<br><br>" +
        '<a href="profile.html" class="start-button">View My Profile</a>';
    }
};

showQuestion();