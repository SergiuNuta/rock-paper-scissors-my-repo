window.onload = () => {

    const userScoreSpan = document.getElementById('user-score');
    const computerScoreSpan = document.getElementById('computer-score');
    const rockDiv = document.getElementById('rock');
    const paperDiv = document.getElementById('paper');
    const scrissorsDiv = document.getElementById('scissors');
    const resultDiv = document.querySelector('.result');
    let userScore = 0;
    let computerScore = 0;    
   

    const getComputerChoice = (commputerMove) => {
        const choices = ["r", "p", "s"];
        const randomNumber = Math.floor(Math.random() * 3);
        commputerMove = choices[randomNumber];
        return commputerMove;
    }

    const win = () => {
        userScore++;
        userScoreSpan.innerHTML = userScore;
        resultDiv.innerHTML = "You won!";
    }
    const lose = () => {
        computerScore++;
        computerScoreSpan.innerHTML = computerScore;
        resultDiv.innerHTML = "Looser!"
    }
    const draw = () => {
        console.log('A draw');
        resultDiv.innerHTML = "A draw";
    }

    const game = (userChoice) => {
        const computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case "rs":
            case "pr":
            case "sp":
               win();
                break;
            case "sr":
            case "rp":
            case "ps":
                lose();
                break;
            case "rr":
            case "pp":
            case "ss":
                draw();
                break;
        }
    }

    rockDiv.addEventListener('click', event => {
        game("r");
    })

    paperDiv.addEventListener('click', event => {
        game("p");
    })

    scrissorsDiv.addEventListener('click', event => {
        game("s");
    })

}