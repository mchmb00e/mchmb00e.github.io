
const number_1 = document.getElementById('number-value_1');
const number_2 = document.getElementById('number-value_2');
const number_3 = document.getElementById('number-value_3');
const number_4 = document.getElementById('number-value_4');

const view_1 = document.getElementById('number-view_1');
const view_2 = document.getElementById('number-view_2');
const view_3 = document.getElementById('number-view_3');
const view_4 = document.getElementById('number-view_4');

const subNumberHistory_1 = document.getElementById('sub-number-history_1');
const subNumberHistory_2 = document.getElementById('sub-number-history_2');
const subNumberHistory_3 = document.getElementById('sub-number-history_3');
const subNumberHistory_4 = document.getElementById('sub-number-history_4');
const subNumberHistory_5 = document.getElementById('sub-number-history_5');
const subNumberHistory_6 = document.getElementById('sub-number-history_6');
const subNumberHistory_7 = document.getElementById('sub-number-history_7');
const subNumberHistory_8 = document.getElementById('sub-number-history_8');
const subNumberHistory_9 = document.getElementById('sub-number-history_9');
const subNumberHistory_10 = document.getElementById('sub-number-history_10');

var info = document.getElementById('info');

var statusNumber_1 = 0;
var statusNumber_2 = 0;
var statusNumber_3 = 0;
var statusNumber_4 = 0;

var countRegister = 0;

number_1.innerHTML = 0;
number_2.innerHTML = 0;
number_3.innerHTML = 0;
number_4.innerHTML = 0;

var route = 0;

var random = [];
random = getArray();
function getArray() {
    var random = [];
    for (var i = 0; i < 4; i++) {
        random.push(Math.floor(Math.random() * 10));
    }
    return random;
}

info.innerHTML = random;

routeSelect();

function left_arrow() {
    route--;
    if (route < 0) {
        route = 3;
    }
    routeSelect();
}
function right_arrow() {
    route++;
    if (route > 3) {
        route = 0;
    }
    routeSelect();
}
function routeSelect() {
    switch (route) {
        case 0:
            number_1.style.border = '1px solid white';
            number_2.style.border = 'none';
            number_3.style.border = 'none';
            number_4.style.border = 'none';
            break;
        case 1:
            number_2.style.border = '1px solid white';
            number_1.style.border = 'none';
            number_3.style.border = 'none';
            number_4.style.border = 'none';
            break;
        case 2:
            number_3.style.border = '1px solid white';
            number_4.style.border = 'none';
            number_2.style.border = 'none';
            number_1.style.border = 'none';
            break;
        case 3:
            number_4.style.border = '1px solid white';
            number_1.style.border = 'none';
            number_2.style.border = 'none';
            number_3.style.border = 'none';
            break;
    }
}
function number_value(x) {
    switch (route) {
        case 0:
            number_1.innerHTML = x;
            break;
        case 1:
            number_2.innerHTML = x;
            break;
        case 2:
            number_3.innerHTML = x;
            break;
        case 3:
            number_4.innerHTML = x;
            break;
    }
}

function send() {
    if (number_1.innerHTML == random[0]) {
        view_1.innerHTML = random[0];
        statusNumber_1 = 2;
    } else {
        for (var i = 0; i < 4; i++) {
            if (number_1.innerHTML == random[i]) {
                info.innerHTML += '|| distinta posicion 1';
                statusNumber_1 = 1;
            }
        }
    }
    if (number_2.innerHTML == random[1]) {
        view_2.innerHTML = random[1];
        statusNumber_2 = 2;
    } else {
        for (var j = 0; j < 4; j++) {
            if (number_2.innerHTML == random[j]) {
                info.innerHTML += '|| distinta posicion 2';
                statusNumber_2 = 1;
            }
        }
    }
    if (number_3.innerHTML == random[2]) {
        view_3.innerHTML = random[2];
        statusNumber_3 = 2;
    } else {
        for (var k = 0; k < 4; k++) {
            if (number_3.innerHTML == random[k]) {
                info.innerHTML += '|| distinta posicion 3';
                statusNumber_3 = 1;
            }
        }
    }
    if (number_4.innerHTML == random[3]) {
        view_4.innerHTML = random[3];
        statusNumber_4 = 2;
    } else {
        for (var l = 0; l < 4; l++) {
            if (number_4.innerHTML == random[l]) {
                info.innerHTML += '|| distinta posicion 4';
                statusNumber_4 = 1;
            }
        }
    }
    register_number();
}
function reset() {
    number_1.innerHTML = 0;
    number_2.innerHTML = 0;
    number_3.innerHTML = 0;
    number_4.innerHTML = 0;
}

function register_number() {
    countRegister++;
    switch (countRegister) {
        case 1:
            subNumberHistory_1.innerHTML = '<span id="number-history_style">' + countRegister + '</span>' + getRegister();
            break;
        case 2:
            subNumberHistory_2.innerHTML = countRegister + getRegister();
            break;
        case 3:
            subNumberHistory_3.innerHTML = countRegister + getRegister();
            break;
        case 4:
            subNumberHistory_4.innerHTML = countRegister + getRegister();
            break;
        case 5:
            subNumberHistory_5.innerHTML = countRegister + getRegister();
            break;
        case 6:
            subNumberHistory_6.innerHTML = countRegister + getRegister();
            break;
        case 7:
            subNumberHistory_7.innerHTML = countRegister + getRegister();
            break;
        case 8:
            subNumberHistory_8.innerHTML = countRegister + getRegister();
            break;
        case 9:
            subNumberHistory_9.innerHTML = countRegister + getRegister();
            break;
        case 10:
            subNumberHistory_10.innerHTML = countRegister + getRegister();
            break;
    }
}
function getRegister() {
    var tempString = '';

    switch (statusNumber_1) {
        case 2:
            tempString += '<span id="number-history_style_green">' + number_1.innerHTML + '</span>' + ' ';
            break;
        case 1:
            tempString += '<span id="number-history_style_yellow">' + number_1.innerHTML + '</span>' + ' ';
            break;
        default:
            tempString += '<span id="number-history_style_white">' + number_1.innerHTML + '</span>' + ' ';
            break;
    }
    switch (statusNumber_2) {
        case 2:
            tempString += '<span id="number-history_style_green">' + number_2.innerHTML + '</span>' + ' ';
            break;
        case 1:
            tempString += '<span id="number-history_style_yellow">' + number_2.innerHTML + '</span>' + ' ';
            break;
        default:
            tempString += '<span id="number-history_style_white">' + number_2.innerHTML + '</span>' + ' ';
            break;
    }
    switch (statusNumber_3) {
        case 2:
            tempString += '<span id="number-history_style_green">' + number_3.innerHTML + '</span>' + ' ';
            break;
        case 1:
            tempString += '<span id="number-history_style_yellow">' + number_3.innerHTML + '</span>' + ' ';
            break;
        default:
            tempString += '<span id="number-history_style_white">' + number_3.innerHTML + '</span>' + ' ';
            break;
    }
    switch (statusNumber_4) {
        case 2:
            tempString += '<span id="number-history_style_green">' + number_4.innerHTML + '</span>' + ' ';
            break;
        case 1:
            tempString += '<span id="number-history_style_yellow">' + number_4.innerHTML + '</span>' + ' ';
            break;
        default:
            tempString += '<span id="number-history_style_white">' + number_4.innerHTML + '</span>' + ' ';
            break;
    }
    return tempString;
}