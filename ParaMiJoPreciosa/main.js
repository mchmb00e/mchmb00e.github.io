const startBtn = document.getElementById('start-btn');
const firstMsgDiv = document.getElementById('firstMsg_div');
const startDiv = document.getElementById('start');
const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');
const circleOpen = document.getElementById('circleOpen');


function startAction() {
    
    startDiv.style.animation = 'start_div 5s ease-in-out forwards';
    startBtn.style.animation = 'start_btn 5s ease-in forwards';
    setTimeout(() => {
        escribirEnPantalla("Buenos días mi amorcito <3 Te hice esto durante la noche pq te extraño mucho :( (Continuar)", "firstMsg");
    }, 5000);
}

function statusGo(statusSet) {
    switch (statusSet) {
        case 1:
            firstMsgDiv.style.animation = '3s ease-in-out to_right forwards';
            setTimeout(() => {
                escribirEnPantalla('Eres tú mi amorcito, eres tan bacán, tierna, bonita y cariñosa. Eres simplemente lo mejor <3', "secondMsg");
            }, 3000);
            setTimeout(() => {
                img1.style.animation = '2s linear opacity forwards';
            }, 5000);
            setTimeout(() => {
                img2.style.animation = '2s linear opacity forwards';
            }, 6000);
            setTimeout(() => {
                img3.style.animation = '2s linear opacity forwards';
            }, 7000);
            setTimeout(() => {
                circleOpen.style.animation = '2s linear opacity forwards';
            }, 8000);
            break;
    }
}

function escribirEnPantalla(texto, domVar) {
    let arr = texto.split("");
    i = 0;
    let intervalo = setInterval(function () {
        if (i == arr.length - 1) {
            document.getElementById(domVar).innerHTML += arr[i];
            clearInterval(intervalo);
        }
        else {
            if (arr[i] == " ") {
                document.getElementById(domVar).innerHTML += arr[i];
                document.getElementById(domVar).innerHTML += arr[i + 1];
                i += 2;
            } else {
                document.getElementById(domVar).innerHTML += arr[i];
                i++;
            }
        }
    }, 75);
}