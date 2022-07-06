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
                compsDecision = getComputersChoice();
                
                startGame();
            })
        });

        resultElement.querySelector('button').addEventListener('click', tryAgain);
    })

