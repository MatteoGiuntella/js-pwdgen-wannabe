// Chiedi all'utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito114


const nome = prompt ('Come ti chiami?') ;

const cognome = prompt ('quale è il tuo cognome?') ;

const colore = prompt ('e il colore preferito?') ;

const password = nome + cognome + colore + '114' ;

const myElement = document.getElementById('text-target') ;
myElement.innerHTML = `La tua password è: ${password}`;



/*
let domanda = prompt ("nome?")

let password2 = domanda;

domanda = prompt("cognome?")

password2 = password2 + domanda;

domanda = prompt("colore?")

password2 = password2 + domanda + "114";

const myElement = document.getElementById('text-target') ;
myElement.innerHTML = `La tua password è: ${password2}`;
*/


// document.queryselector('tag html') <--- mi serve per selezionare direttamente il tag senza usare getElementById