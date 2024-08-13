let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Oops! Match Draw";
    msg.style.backgroundColor = "yellow";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win the Game! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `You Lose the Game! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

    // Check if either score reached 7
    if (userScore >= 7 || computerScore >= 7) {
        setTimeout(resetGame, 2000); // Wait 2 seconds before resetting
    }
}

const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = computerScore;
    msg.innerText = "Game Restarted! Want to play again!";
    //msg.style.backgroundColor = "white";
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
