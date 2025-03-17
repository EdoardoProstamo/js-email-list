// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// - Abbellire con CSS o Bootstrap
// - Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

// Programmi utili:
// Postman API
// Insomnia API
// Thunder Client (VSCode Extension)


// SVOLGIMENTO

//prendo l'elemento ul tramite l'id
const emailsElement = document.getElementById('email-container');
console.log(emailsElement);

// utilizzo axios per stampare l'indirizzo web fornito
const uri = 'https://flynn.boolean.careers/exercises/api/random/mail';

// creo un ciclo for per generare 10 email diverse
for (let i=0; i < 10; i++) {
 axios.get(uri)
  .then(response => {

    const email = response.data.response; 
    console.log(email)
    
  });
}