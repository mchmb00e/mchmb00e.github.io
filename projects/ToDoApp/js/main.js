const d = document;
const select = d.getElementById('tagOption'); // Select HTML DOM
const test = d.getElementById('test'); // TEST
const noteName = d.getElementById('createName'); // Input del nombre de la nota
const noteDesc = d.getElementById('createDesc'); // Textarea de la descripción de la nota
const noteAlert = d.querySelector('.noteAlert'); // Ventana emergente para creación de notas
const main = d.getElementById('main'); // DOM main
const notes = []; // Arreglo que guarda las notas como objetos
const search = d.getElementById('search'); // Buscador de notas
let idCount = 6; // Identificador de notas por numero

// Manipulador del contenido de DOM main
function mainPost(option) {
    switch (option) {
        case 'all':
            main.innerHTML = '';
            for (let i = 0; i < notes.length; i++) {
                main.innerHTML += '<div class="card ' + notes[i].tag + '"><h3>' + notes[i].name + '</h3><p>' + notes[i].desc + '</p></div>';
            }
            break;
        case 'c1':
            main.innerHTML = '';
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].tag == 'c1') {
                    main.innerHTML += '<div class="card ' + notes[i].tag + '"><h3>' + notes[i].name + '</h3><p>' + notes[i].desc + '</p></div>';
                }
            }
            break;
        case 'c2':
            main.innerHTML = '';
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].tag == 'c2') {
                    main.innerHTML += '<div class="card ' + notes[i].tag + '"><h3>' + notes[i].name + '</h3><p>' + notes[i].desc + '</p></div>';
                }
            }
            break;
        case 'c3':
            main.innerHTML = '';
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].tag == 'c3') {
                    main.innerHTML += '<div class="card ' + notes[i].tag + '"><h3>' + notes[i].name + '</h3><p>' + notes[i].desc + '</p></div>';
                }
            }

            break;
        case 'c4':
            main.innerHTML = '';
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].tag == 'c4') {
                    main.innerHTML += '<div class="card ' + notes[i].tag + '"><h3>' + notes[i].name + '</h3><p>' + notes[i].desc + '</p></div>';
                }
            }

            break;
        case 'c5':
            main.innerHTML = '';
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].tag == 'c5') {
                    main.innerHTML += '<div class="card ' + notes[i].tag + '"><h3>' + notes[i].name + '</h3><p>' + notes[i].desc + '</p></div>';
                }
            }

            break;
    }
}

// Registro de objetos y notas.
function strHTML(name, desc) {
    notes.push({ 'id': idCount, 'name': name.value, 'desc': desc.value, 'tag': select.value });
    mainPost('all');
}
// Alternar estado de la ventana emergente para crear notas
function newNote(info) {
    switch (info) {
        case true:
            noteAlert.style.display = 'Block';
            break;
        case false:
            noteAlert.style.display = 'none';
            break;
    }
}

// Controlador para la creación de notas
function create() {
    strHTML(noteName, noteDesc);
    newNote(false);
    mainPost('all');
    noteName.value = null;
    noteDesc.value = null;
    idCount++;
}

// Evento de tipeo
// search.addEventListener('keydown', (event) => {
//     let keyValue = event.key;
    
// }, false);

// Generador defaulr main DOM
mainPost('all');