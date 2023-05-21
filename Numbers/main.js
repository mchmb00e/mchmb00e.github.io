const htmlAttempsValue = document.getElementById('attemps-value'); // Output Attemps
const htmlLastAttempValues = document.getElementsByClassName('last-attemp-value'); // Output Last Attemp Values
const htmlUserInputValues = document.getElementsByClassName('user-input-box'); // Input In-game Values
let valuesArray; // Values in game
let lastAttempArray = []; // Values of last attemp in game
let position;

// Get Random Array
const getLimiter = () => {
    let x = Math.round(Math.random() * 10);
    while (x == 0 || x >= 10) {
        x = Math.round(Math.random() * 10);
    }
    return x;
};
const getRandom = () => {
    const arrRand = [];
    for (let i = 0; i < 4; i++) {
        arrRand.push(Math.round(Math.random() * 10));
    }
    for (let i = 0; i < 4; i++) {
        if (arrRand[i] >= 10 || arrRand[i] == 0) {
            arrRand[i] = getLimiter();
        }
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i != j && arrRand[i] == arrRand[j]) {
                arrRand[i] = getLimiter();
            }
        }
    }
    return arrRand;
};
// Default Values for new game
const defValues = () => {
    htmlAttempsValue.innerHTML = 10;
    for (let i = 0; i < 4; i++) {
        htmlLastAttempValues[i].innerHTML = '';
        htmlUserInputValues[i].innerHTML = '';
    }
    valuesArray = getRandom();
    for (let i = 0; i < 4; i++) {
        htmlLastAttempValues[i].style.border = 'none';
    }
};

// Check Attemp
const checkWin = () => {
    let status = 0;
    for (let i = 0; i < 4; i++) {
        if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[i]) {
            status++;
        }
    }
    if (status == 4) {
        startWin();
    } else {
        htmlAttempsValue.innerHTML = parseInt(htmlAttempsValue.innerHTML) - 1;
        if (parseInt(htmlAttempsValue.innerHTML) <= 0) {
            startLoss();
        } else {
            for (let i = 0; i < 4; i++) {
                if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[i]) {
                    htmlLastAttempValues[i].style.border = '3px solid green';
                    htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                }
                else {
                    switch (i) {
                        case 0:
                            if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[1]) {
                                htmlLastAttempValues[i].style.border = '3px solid orange';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            } else if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[2]) {
                                htmlLastAttempValues[i].style.border = '3px solid orange';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            } else if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[3]) {
                                htmlLastAttempValues[i].style.border = '3px solid orange';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            } else {
                                htmlLastAttempValues[i].style.border = '3px solid red';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            }
                            break;
                        case 1:
                            if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[0]) {
                                htmlLastAttempValues[i].style.border = '3px solid orange';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            } else if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[2]) {
                                htmlLastAttempValues[i].style.border = '3px solid orange';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            } else if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[3]) {
                                htmlLastAttempValues[i].style.border = '3px solid orange';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            } else {
                                htmlLastAttempValues[i].style.border = '3px solid red';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            }
                            break;
                        case 2:
                            if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[1]) {
                                htmlLastAttempValues[i].style.border = '3px solid orange';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            } else if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[0]) {
                                htmlLastAttempValues[i].style.border = '3px solid orange';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            } else if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[3]) {
                                htmlLastAttempValues[i].style.border = '3px solid orange';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            } else {
                                htmlLastAttempValues[i].style.border = '3px solid red';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            }
                            break;
                        case 3:
                            if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[1]) {
                                htmlLastAttempValues[i].style.border = '3px solid orange';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            } else if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[2]) {
                                htmlLastAttempValues[i].style.border = '3px solid orange';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            } else if (parseInt(htmlUserInputValues[i].innerHTML) == valuesArray[0]) {
                                htmlLastAttempValues[i].style.border = '3px solid orange';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            } else {
                                htmlLastAttempValues[i].style.border = '3px solid red';
                                htmlLastAttempValues[i].innerHTML = htmlUserInputValues[i].innerHTML;
                            }
                            break;
                    }
                }
            }
        }
    }
};

// Focus Main Screen User Touch
const touchBox = (x) => {
    for (let i = 0; i < 4; i++) {
        htmlUserInputValues[i].style.border = 'none';
    }
    htmlUserInputValues[x].style.border = '3px solid white';
    position = x;
};

// Keypad controller
const key = (x) => {
    if (1 <= x && x <= 9) {
        htmlUserInputValues[position].innerHTML = x;
    } else if (x == 'reset') {
        for (let i = 0; i < 4; i++) {
            htmlUserInputValues[i].innerHTML = '';
        }
    } else if (x == 'send') {
        checkWin();
    }
};

// WIN
const startWin = () => {
    const valuesOutput = document.getElementsByClassName('win-center-value');
    document.getElementById('win-center-attemps-value').innerHTML = htmlAttempsValue.innerHTML;
    document.querySelector('.win-screen').style.animation = 'top 2s ease-out forwards';
    document.querySelector('.main-screen').style.animation = 'main-off linear forwards 2s';
    document.querySelector('.win-screen').style.display = 'block';
    for (let i = 0; i < 4; i++) {
        valuesOutput[i].innerHTML = valuesArray[i];
    }
};

const startLoss = () => {
    const valuesOutput = document.getElementsByClassName('loss-center-value');
    document.querySelector('.loss-screen').style.animation = 'top 2s ease-out forwards';
    document.querySelector('.main-screen').style.animation = 'main-off linear forwards 2s';
    document.querySelector('.loss-screen').style.display = 'block';
    for (let i = 0; i < 4; i++) {
        valuesOutput[i].innerHTML = valuesArray[i];
    }
};

// New Game

const newGame = (x) => {
    switch (x) {
        case 'force':
            document.querySelector('.win-screen').style.animation = 'bottom 2s ease-out forwards';
            document.querySelector('.main-screen').style.animation = 'main-on linear forwards 2s';
            defValues();
            break;
        case 'force2':
            document.querySelector('.loss-screen').style.animation = 'bottom 2s ease-out forwards';
            document.querySelector('.main-screen').style.animation = 'main-on linear forwards 2s';
            defValues();
            break;
        case 'pop-up':
            document.querySelector('.new-game-pop-up').style.display = 'block';
            document.querySelector('.new-game-pop-up').style.animation = '1s pop-up-on ease-out';
            break;
        case 'accept':
            defValues();
        case 'decline':
            document.querySelector('.new-game-pop-up').style.animation = '1s pop-up-off ease-out';
            setTimeout(() => {
                document.querySelector('.new-game-pop-up').style.display = 'none';
            }, 950);
            break;
    }
};

// Help

const help = (x) => {
    if (x) {
        document.querySelector('.help-pop-up-on').style.animation = '1s ease-in-out pop-up-on';
        document.querySelector('.help-pop-up-on').style.display = 'block';
        document.querySelector('.help-pop-up-on').style.zIndex = '101';
        
    } else {
        document.querySelector('.help-pop-up-on').style.animation = '1s ease-in-out pop-up-off';
        setTimeout(() => {
            document.querySelector('.help-pop-up-on').style.display = 'none';
        }, 1000);
    }
};

// Automatically parameters

defValues();