function getComputerChoice()
{
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * 3)];
}

function getPlayerChoice()
{
    let text = prompt('Enter rock, paper, or scissors: ');
    let choice = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    return choice;
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
            return 'You Win! Rock beats Scissors';
        }
        else
        {
            return 'You Lose! Paper beats Rock';
        }
    }
    else if(playerSelection === 'Paper')
    {
        if(computerSelection === 'Rock')
        {
            return 'You Win! Paper beats Rock';
        }
        else
        {
            return 'You Lose! Scissors beats Paper';
        }
    }
    else if(playerSelection === 'Scissors')
    {
        if(computerSelection === 'Paper')
        {
            return 'You Win! Scissors beats Paper';
        }
        else
        {
            return 'You Lose! Rock beats Scissors';
        }
    }

}

console.log(playRound('Rock', getComputerChoice()));