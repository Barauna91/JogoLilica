let currentLevel = 1;

document.getElementById("start-button").addEventListener("click", startGame);

function startGame() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("level-screen").classList.remove("hidden");
    loadLevel();
}

function loadLevel() {
    const levels = {
        1: {
            title: "Nível 1",
            question: "Qual flor é vermelha?",
            answers: ["Girassol", "Rosa", "Margarida"],
            correct: 1
        },
        2: {
            title: "Nível 2",
            question: "Qual animal tem asas?",
            answers: ["Elefante", "Passarinho", "Cachorro"],
            correct: 1
        },
        3: {
            title: "Nível 3",
            question: "Qual objeto encontramos na Bíblia?",
            answers: ["Mapa", "Histórias", "Carro"],
            correct: 1
        }
    };

    const level = levels[currentLevel];

    document.getElementById("level-title").textContent = level.title;
    document.getElementById("question").textContent = level.question;

    const buttons = document.querySelectorAll(".answer");
    buttons.forEach((button, index) => {
        button.textContent = level.answers[index];
        button.onclick = () => checkAnswer(index === level.correct);
    });
}

function checkAnswer(isCorrect) {
    const feedback = document.getElementById("feedback");

    if (isCorrect) {
        feedback.textContent = "Parabéns! Resposta correta!";
        feedback.style.color = "green";

        if (currentLevel < 3) {
            currentLevel++;
            setTimeout(loadLevel, 2000);
        } else {
            setTimeout(endGame, 2000);
        }
    } else {
        feedback.textContent = "Resposta errada! Tente novamente.";
        feedback.style.color = "red";
    }
}

function endGame() {
    document.getElementById("level-screen").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");
}

function restartGame() {
    currentLevel = 1;
    document.getElementById("end-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
}