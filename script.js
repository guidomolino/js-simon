
// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati




var array = [];
var quantitaNumeri = 5;

while (array.length < quantitaNumeri) {

  var randomNum = getRandom(1,10);
  var esisteArray = giaPresente(array,randomNum);
  if (esisteArray == false) {
    array.push(randomNum);
  }
}

console.log("cpu: " + array);

alert("Ecco i 5 numeri da memorizzare: "+ array);

// imposto il timer
setTimeout(function () {

  var arrayUtente = [];
  // quando il timer finisce chiedo l'arrayUtente

  while (arrayUtente.length < array.length) {
    var numUtente = prompt("Inserisci un numero rimanente tra i 5 che ti abbiamo dato:");
    arrayUtente.push(numUtente);
  }

  console.log("utente: " + arrayUtente);

  // controllo l'uguaglianza tra gli array
  var arrayUguali = controlloArrayUguali(array, arrayUtente);
  var quantitaUguali = arrayUguali.length;

  console.log(arrayUguali);

  // condizioni vittoria
  var quantitaNumeri = 5;

  if (quantitaUguali == quantitaNumeri) {
    console.log("Hai vinto, hai indovinato i seguenti numeri " + arrayUguali + " per un totale di " + quantitaUguali + " punti");
  }else if (quantitaUguali < quantitaNumeri & quantitaUguali != 0) {
    console.log("Quasi, hai indovinato i seguenti numeri " + arrayUguali + " per un totale di " + quantitaUguali + " punti");
  }
  else if (quantitaUguali == 0){
    console.log("Hai perso, hai indovinato " + arrayUguali + " numeri");
  }
},5000); //30s



// funzione per trovare array uguali
function controlloArrayUguali(primoArray, secondoArray) {
  var i = 0;
  var j = [];

  while (i<primoArray.length) {
    if (primoArray[i] == secondoArray[i]) {
      j.push(primoArray[i]);
    }
    i++
  }

  return j;
}

// funzione per trovare i numeri già presenti all'interno dell'array specificato
function giaPresente(array, elemento) {
  var i = 0;
  var trovato = false;

  while (i<array.length && trovato == false) {
    if (array[i] == elemento) {
      trovato = true;
    }
    i++
  }

  return trovato;
}

// funzione per generare un numero casuale intero tra i due valori minimo e massimo
function getRandom(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min))+min;
}
