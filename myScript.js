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

console.log(getPlayerChoice());