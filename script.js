function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}

function getHumanChoice() {
    let humanChoice = prompt("What do you choose? Rock, paper, scissors");
    return humanChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(human, computer) {
        if ((human == "rock" && computer == "scissors") || 
            (human == "scissors" && computer == "paper") || 
            (human == "paper" && computer == "rock")) {
            console.log(`You win this round! ${human} beats ${computer}`);
            humanScore++;
        } else if (human == computer) {
            console.log("It's a draw!")
        }
        else {
            console.log(`You lose this round! ${computer} beats ${human}`)
            computerScore++;
        }
    }
    
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

playGame();
