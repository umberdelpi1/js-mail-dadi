// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;
var emailUtente = prompt("Caro utente inserisci la tua mail: ");

var listaEmail = ["info@bla.it", "tim@assistenza.it", "commerciale@amazon.com"];

var emailEsatta;



// console da ispeziona
console.log(emailUtente);
console.log(listaEmail);


// Impostazione Ciclo
for (var i = 0; i < listaEmail.length; i++) {
  emailEsatta = listaEmail
  if(emailEsatta % 2 !== 0) {
  console.log(listaEmail[i]);
  }
}

// if (emailEsatta == emailUtente) {
//   text = " CONGRATULAZIONI LA TUA EMAIL E' NELLA LISTA "
// } else if (emailEsatta != emailUtente) {
//
// }

// Out-put da stampare
document.getElementById("mail").innerHTML = emailEsatta;
