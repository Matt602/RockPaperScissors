function getComputerChoice()
{
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection)
{
    if(playerSelection === computerSelection)
    {
        return 'Draw';
    }
    else if(playerSelection === 'Rock')
    {
        if(computerSelection === 'Scissors')
        {
            return 'Player';
        }
        else
        {
            return 'Computer';
        }
    }
    else if(playerSelection === 'Paper')
    {
        if(computerSelection === 'Rock')
        {
            return 'Player';
        }
        else
        {
            return 'Computer';
        }
    }
    else if(playerSelection === 'Scissors')
    {
        if(computerSelection === 'Paper')
        {
            return 'Player';
        }
        else
        {
            return 'Computer';
        }
    }

}

let playerScore = 0;
let comScore = 0;


function updateScore(decision)
{
    if(decision === 'Player')
    {
        playerScore++;
    }
    else if(decision === 'Computer')
    {
        comScore++;
    }
   
    
}

const results = document.querySelector('#results');

const result = document.createElement('div');
result.classList.add('result');


function checkResults(player, com)
{
    if(playerScore === 5)
    {
        result.textContent = 'Player wins';
    }
    else if(comScore === 5)
    {
        result.textContent = 'Computer Wins';
    }
    else
    {
        result.textContent = `Player: ${playerScore}  Computer: ${comScore}`;
    }

    results.appendChild(result);

}




const rbutton = document.querySelector('.rockButton');
rbutton.addEventListener('click', () => {
    let cpu = getComputerChoice();
    let decision = playRound('Rock', cpu);
    updateScore(decision);
    checkResults(playerScore, comScore);
});

const pbutton = document.querySelector('.paperButton');
pbutton.addEventListener('click', () => {
    let cpu = getComputerChoice();
    let decision = playRound('Paper', cpu);
    updateScore(decision);
    checkResults(playerScore, comScore);
});


const sbutton = document.querySelector('.scissorsButton');
sbutton.addEventListener('click', () => {
    let cpu = getComputerChoice();
    let decision = playRound('Scissors', cpu);
    updateScore(decision);
    checkResults(playerScore, comScore);
});






