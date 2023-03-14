//inizializzo le costanti che mi serviranno globalmente
const nameInput = document.getElementById('name');
const showSavedName = document.querySelector('p');
const SAVE_BTN = document.querySelector('#save-btn');
const TIMER = document.getElementById('timer');


//salvo in una costante la funzione che mi salva il valore del campo input nel local
const SAVE_NAME = () => {
    const name = nameInput.value;
    localStorage.setItem('name', name);
    alert('Nome salvato con successo');
};
document.getElementById('save-btn').addEventListener('click', SAVE_NAME);


//salvo in una costante la funzione che mi va a cancellare dal local il valore inserito precedentemente
const REMOVE_NAME = () => {
    localStorage.removeItem('name');
    nameInput.value = '';
    showSavedName.textContent = '';
    alert('Nome rimosso con successo');
};
document.getElementById('remove-btn').addEventListener('click', REMOVE_NAME);


//salvo in una costante la funzione che mi prende nel local storage il dato inserito nel campo input name
//applico una condizione che se esiste mi inserisce il valore inserito precedentemente nell'input name nel tag <p></p> soprastante
const SAVED_NAME = () => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
        nameInput.value = savedName;
        showSavedName.textContent = savedName;
    }
};
SAVED_NAME();


//al click del btn save mi scrive nel tag <p></p> il valore inserito precedentemente nel locale storage
SAVE_BTN.addEventListener('click', () => {
    showSavedName.textContent = nameInput.value;

});



let timerCount = 0;
const START_TIMER = () => {
    if (!timerCount) {
        timerCount = Date.now();
        sessionStorage.setItem('timer', timerCount);
    }
};

const INTERVAL = setInterval(() => {
    const TIME_LAPSE = Math.floor((Date.now() - timerCount) / 1000);
    sessionStorage.setItem('timer', TIME_LAPSE);
    TIMER.textContent = TIME_LAPSE;
}, 1000);

START_TIMER();