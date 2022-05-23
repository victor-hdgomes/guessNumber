const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const guess = {
    max: 10,
    attemptNumber: 0,
    numberDrawn: function randomValue(){
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = guess.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Attempt: ' + value;
}

function handleSubmit(e){
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick){
        alert('Type some value!');
        return;
    }

    updateAttempt(attempt, ++guess.attemptNumber);

    if(numberDrawn == kick){
        playAgain();
        status.innerHTML = 'Congratulation, you guessed!';
        result.style.transition = '.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();
    } else if(numberDrawn > kick){
        status.innerHTML = 'The number is taller';
        status.style.color = '#de4251';
        clear();
    } else if(numberDrawn < kick){
        status.innerHTML = 'The number is smaller';
        status.style.color = '#de4251';
        clear();
    }
};

function playAgain(){
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart(){
    document.location.reload(true);
};

function clear(){
    document.getElementById('kick').value = '';
}