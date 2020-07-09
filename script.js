
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

var time = setTimeout(function () {
  var arrayUtente = [];

  if (time == true) {
    while (arrayUtente.length < array.length) {
      var numUtente = prompt("Inserisci un numero rimanente tra i 5 che ti abbiamo dato:");
      arrayUtente.push(numUtente);
    }
  }
},5000); //5s debug


console.log("utente: " + arrayUtente);











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
