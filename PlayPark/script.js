let valore = document.getElementById("valore");
let incrementaNum = document.getElementById("incrementa");
let decrementaNum = document.getElementById("decrementa");
let numero = 0;

function incrementa() {
    const incrementa = parseInt(incrementaNum.value);
    numero += incrementa;
    valore.textContent = numero;
}

function decrementa() {
    const decrementa = parseInt(decrementaNum.value);
    numero -= decrementa;
    valore.textContent = numero;
}

function reset() {
    numero = 0;
    valore.textContent = numero;
}


//calculator

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('buttons'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){

//cancellazione

            case 'C':
                display.innerText = '';
                break;

//funzionamento per stampare il risultato

            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;

                //pulsante per tornare indietro
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;

                // consente di usare la tastiera 
            default:
                display.innerText += e.target.innerText;
        }
    });
});

//cambio Colore

function change() {
    let backElements = document.getElementsByClassName('back');

    // Verifica se almeno un elemento con la classe 'back' è stato trovato
    if (backElements.length > 0) {
        // Itera attraverso la collezione di elementi
        for (let i = 0; i < backElements.length; i++) {
            // Se l'elemento ha un colore di sfondo originale salvato, ripristinalo
            if (backElements[i].getAttribute('data-original-background')) {
                backElements[i].style.backgroundColor = backElements[i].getAttribute('data-original-background');
                // Rimuovi l'attributo per indicare che il colore originale è stato ripristinato
                backElements[i].removeAttribute('data-original-background');
            } else {
                // Salva il colore di sfondo originale
                backElements[i].setAttribute('data-original-background', backElements[i].style.backgroundColor);
                // Modifica il colore di sfondo
                backElements[i].style.backgroundColor = 'yellow';
            }
        }
    } else {
        console.log("Nessun elemento trovato con la classe 'back'");
    }
}

let back = document.getElementById('back');
let intervalloID; // Variabile per memorizzare l'ID dell'intervallo

function cambiaColore(){
    const coloreRandom = generaColoreRandom();
    back.style.backgroundColor = coloreRandom;
}

function generaColoreRandom(){
    const rosso = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const blu = Math.floor(Math.random() * 256);
    return `rgb(${rosso},${verde},${blu})`;
}

// Funzione per avviare l'intervallo e memorizzare il suo ID
function avviaIntervallo() {
    intervalloID = setInterval(cambiaColore, 2000);
}

// Avvia l'intervallo
avviaIntervallo();

// Funzione per fermare l'intervallo
function stop() {
    clearInterval(intervalloID);
}

// Funzione per riprendere l'intervallo
function riprendi() {
    avviaIntervallo();
}



//digital clock

function aggiornaOrologio(){
    const now = new Date();
    const hours =  formatTimeValue(now.getHours());
    const minutes = formatTimeValue(now.getMinutes());
    const seconds =formatTimeValue(now.getSeconds());
  
  
    const timeDisplay=document.getElementById("time");
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }
  function formatTimeValue(value) {
    return value < 10 ? '0' + value:value;
  }
  
  setInterval(aggiornaOrologio, 1000);