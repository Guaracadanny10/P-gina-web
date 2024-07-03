
function sumar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 + num2;
    var detalle = num1 + " + " + num2 + " = " + resultado;
    document.getElementById("detalle").innerText = detalle;
}
function restar() {
    var minuendo = parseInt(document.getElementById("minuendo").value);
    var sustraendo = parseInt(document.getElementById("sustraendo").value);
    var resultado = minuendo - sustraendo;
    var detalle = minuendo + " - " + sustraendo + " = " + resultado;
    document.getElementById("detalle1").innerText = detalle;
}
// Crear un elemento div para la animación
const animatedElement = document.createElement('div');
animatedElement.textContent = '🚀';
animatedElement.style.position = 'fixed';
animatedElement.style.fontSize = '38px';
animatedElement.style.bottom = '10px'; // Posicionado a 10px del borde inferior
animatedElement.style.right = '-50px'; // Inicialmente fuera de la pantalla a la izquierda
animatedElement.style.transition = 'right 4s linear'; // Animación de transición de derecha a izquierda durante 4 segundos

// Agregar el elemento a la página
document.body.appendChild(animatedElement);

// Función para iniciar la animación
function startAnimation() {
    animatedElement.style.right = 'calc(100% - 50px)'; // Mover el elemento al lado derecho de la pantalla
    setTimeout(() => {
        animatedElement.style.right = '-50px'; // Volver a la posición inicial a la izquierda de la pantalla después de 4 segundos
    }, 4000);
}

// Iniciar la animación inicial
startAnimation();

// Repetir la animación continuamente
setInterval(() => {
    startAnimation();
}, 8000); // La animación completa dura 8 segundos, por lo que esperamos 8 segundos antes de iniciarla nuevamente
//Este es algo nuevo  representa la sopa de letras pero podemos mejorar
const sentenceElement = document.getElementById('sentence');
const optionsElement = document.getElementById('options');
const messageElement = document.getElementById('message');
const newGameButton = document.getElementById('new-game');

const sentences = [
    { text: "El gato _____ sobre el tejado.", correct: "saltó", options: ["saltó", "corrió", "nadó", "voló"] },
    { text: "La niña _____ un helado.", correct: "comió", options: ["bebió", "comió", "jugó", "corrió"] },
    { text: "El perro _____ en el parque.", correct: "corrió", options: ["saltó", "comió", "voló", "corrió"] },
    { text: "Los pájaros _____ en el cielo.", correct: "volaron", options: ["nadaron", "saltaron", "volaron", "corrieron"] }
];

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function startNewGame() {
    messageElement.textContent = '';
    const sentenceData = getRandomSentence();
    const { text, correct, options } = sentenceData;
    sentenceElement.textContent = text;

    optionsElement.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            if (option === correct) {
                messageElement.textContent = '¡Correcto!';
                messageElement.style.color = '#388E3C';
            } else {
                messageElement.textContent = 'Intenta de nuevo';
                messageElement.style.color = '#d32f2f';
            }
        });
        optionsElement.appendChild(button);
    });
}

newGameButton.addEventListener('click', startNewGame);

window.onload = startNewGame;
// Aqui se termina la sopa de letras 
//Vamos a empezar hacer unos numeros logicos colegio
let correctAnswer;
let score = 0;

function startGame() {
    score = 0;
    document.getElementById('score').textContent = `Puntuación: ${score}`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('startButton').style.display = 'none';
    generateProblem();
}

function generateProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let problem;
    switch (operation) {
        case '+':
            correctAnswer = num1 + num2;
            problem = `${num1} + ${num2}`;
            break;
        case '-':
            correctAnswer = num1 - num2;
            problem = `${num1} - ${num2}`;
            break;
        case '*':
            correctAnswer = num1 * num2;
            problem = `${num1} * ${num2}`;
            break;
    }

    document.getElementById('problem').textContent = problem;
    document.getElementById('answerInput').value = '';
    document.getElementById('answerInput').focus();
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answerInput').value);
    if (isNaN(userAnswer)) {
        document.getElementById('feedback').textContent = 'Por favor, ingresa una respuesta válida.';
        return;
    }

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('feedback').textContent = '¡Correcto!';
    } else {
        document.getElementById('feedback').textContent = `Incorrecto. La respuesta correcta era ${correctAnswer}.`;
    }

    document.getElementById('score').textContent = `Puntuación: ${score}`;
    generateProblem();
}
//Vamos a crear juego de Memoria 
const animals = ['caballo', 'oveja', 'gato', 'perro'];
let targetAnimal;
let flippedCards = [];
let foundTarget = false;

function startAnimalMemoryGame() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    flippedCards = [];
    foundTarget = false;
    document.getElementById('feedbackMessage').textContent = '';
    
    const cards = generateAnimalCards();
    cards.forEach(card => gameBoard.appendChild(card));

    targetAnimal = animals[Math.floor(Math.random() * animals.length)];
    document.getElementById('animalToFind').textContent = `Encuentra: ${targetAnimal}`;

    setTimeout(() => {
        document.querySelectorAll('.card img').forEach(img => img.style.display = 'none');
    }, 3000);
}

function generateAnimalCards() {
    const animalImages = [
        { name: 'caballo', src: 'https://via.placeholder.com/80x80.png?text=caballo' },
        { name: 'oveja', src: 'https://via.placeholder.com/80x80.png?text=oveja' },
        { name: 'gato', src: 'https://via.placeholder.com/80x80.png?text=gato' },
        { name: 'perro', src: 'https://via.placeholder.com/80x80.png?text=perro' }
    ];
    const cards = [...animalImages, ...animalImages];
    cards.sort(() => 0.1 - Math.random());

    return cards.map(animal => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.animal = animal.name;
        card.innerHTML = `<img src="${animal.src}" alt="${animal.name}">`;
        card.addEventListener('click', flipAnimalCard);
        return card;
    });
}

function flipAnimalCard() {
    if (flippedCards.length === 2 || foundTarget) return;

    const img = this.querySelector('img');
    img.style.display = 'block';

    flippedCards.push(this);

    if (this.dataset.animal === targetAnimal) {
        document.getElementById('feedbackMessage').textContent = '¡Correcto!';
        foundTarget = true;
        return;
    } else {
        document.getElementById('feedbackMessage').textContent = 'Incorrecto. Intenta de nuevo.';
    }

    setTimeout(() => {
        img.style.display = 'none';
        flippedCards = [];
    }, 1000);
}
