const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"]
};

const traduccion = {
    rock: "Roca 🪨",
    paper: "Papel 📄",
    scissors: "Tijeras ✂️",
    lizard: "Lagarto 🦎",
    spock: "Spock 🖖"
};

const jugar = (userChoice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    const divResultado = document.getElementById("resultado");
    
    divResultado.style.display = "block"; 
    divResultado.className = "alert shadow-sm mt-4"; 

    let mensajeFinal = "";

    if (userChoice === computerChoice) {
        mensajeFinal = "<strong>¡Es un empate! 🤝</strong>";
        divResultado.classList.add("alert-warning");
    } else if (rules[userChoice].includes(computerChoice)) {
        mensajeFinal = "<strong>¡Ganaste! 🎉</strong>";
        divResultado.classList.add("alert-success");
    } else {
        mensajeFinal = "<strong>Pierdes 😢</strong>";
        divResultado.classList.add("alert-danger");
    }

    divResultado.innerHTML = `
        <div class="eleccion-texto mb-2">
            Tú elegiste: <strong>${traduccion[userChoice]}</strong> <br>
            La PC elegió: <strong>${traduccion[computerChoice]}</strong>
        </div>
        <hr>
        <div class="fs-4">${mensajeFinal}</div>
    `;
};