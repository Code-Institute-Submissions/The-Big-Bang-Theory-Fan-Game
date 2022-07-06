function game() {
    const actions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const userWins = ['scissorpaper', 'paperrock', 'rocklizard', 'lizardspock', 'spockscissors', 'rockscissors', 'scissorslizard', 'lizardpaper', 'paperspock', 'spockrock'];
    let usersDecision = '';
    let compsDecision = '';
    const userOptionElement = document.querySelector('.game-options');
    const chosenOptionElement = document.querySelector('.chosen');
    const userChoiceElement = document.querySelector('.user-choice');
    const pcChoiceElement = document.querySelector('.computers-choice');
    const resultElement = resultElement.querySelector('.result');
    const resultTitleElement = document.querySelector('.title');
    const pointsCounterElement = document.querySelector('.points-counter');
}

    let actualScore = null;

    window.addEventListener('load', () => {
        retrievePointFromLocalStorage();

        document.querySelectorAll('.game-options').forEach(card =>{
            card.addEventListener('click', (ev) => {
                usersDecision = getUsersDecision(ev.target);
                compsDecision = getComputersDecision();
                
                startGame();
            })
        });

        resultElement.querySelector('button').addEventListener('click', tryAgain);
    })

    function startGame() {
        calculateWinner(usersDecision, compsDecision);
        userOptionElement.classList.add('hidden');
        chosenOptionElement.classList.remove('hidden');
        clearResultBeforeAppend();
        buildChoiceElement(true, usersDecision);
        buildChoiceElement(false, compsDecision);
    }

    function getUsersDecision(target) {
        if (target.nodeName === 'IMG') {
            return target.parentElement.classList[1];
        }
        return target.classList[1];
    }

    function getComputersDecision() {
        return action[Math.floor(Math.random() * 5)];
    }

    function calculateWinner(users, comps) {
        if(users === comps) {
            resultTitleElement.innerText = 'Tie';
        } else if (getUserWinsStatus(users + comps)) {
            resultTitleElement.innerText = 'You win';
            calculateScore(1);
        } else {
            resultTitleElement.innerText = 'You lose';
            calculateScore(-1);
        }
    }
