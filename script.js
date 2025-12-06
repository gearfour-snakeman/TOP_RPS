function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}

let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector(".result");
resultDiv.textContent = "Make a choice."

const buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
    button.addEventListener('click', (e) => playRound(e.target.innerText.toLowerCase()));
    });

const resetButton = document.createElement("button");
const bodyElem = document.querySelector("body");

function playRound(human) {
        let computer = getComputerChoice();
        if ((human == "rock" && computer == "scissors") || 
            (human == "scissors" && computer == "paper") || 
            (human == "paper" && computer == "rock")) {
            console.log(`You win this round! ${human} beats ${computer}`);
            resultDiv.textContent = `You win this round! ${human} beats ${computer}`;
            humanScore++;
        } else if (human == computer) {
            console.log(`It's a draw! ${human} vs ${computer}`);
            resultDiv.textContent = `It's a draw! ${human} vs ${computer}`;
        }
        else {
            console.log(`You lose this round! ${computer} beats ${human}`)
            resultDiv.textContent = `You lose this round! ${computer} beats ${human}`;
            computerScore++;
        }
        console.log(`Humanscore: ${humanScore} & Computerscore: ${computerScore}`);

        if (humanScore >= 5 || computerScore >= 5) 
    {
        resultDiv.textContent = (humanScore>computerScore) ? "You won! Play again." : 
        (humanScore == computerScore) ? "It's a draw! Play again." : 
        "You lost! Play again.";
        resultDiv.style.backgroundColor = "red";
        
        resetButton.textContent = "Play again!";
        bodyElem.appendChild(resetButton);
        resetButton.disabled = false;
        for (const button of buttons) {
            button.disabled = true;
        }
    }
    }

    resetButton.addEventListener('click', function() {
        humanScore = 0;
        computerScore = 0;
        for (const button of buttons) {
            button.disabled = false;
        }
        resultDiv.textContent = "Make a choice.";
        resultDiv.style.backgroundColor = "white";
        resetButton.disabled = true;
    });








/*function playGame() {
    
    
    for (let i = 0;i<5;i++)
    {   let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        console.log(`Human score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
    let finalScore = 
        (humanScore>computerScore) ? "You won! Play again." : 
        (humanScore == computerScore) ? "It's a draw! Play again." : 
        "You lost! Play again.";
    console.log(finalScore);
}

playGame();*/
