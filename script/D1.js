/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 */

/* SCRIVI QUI LA TUA RISPOSTA */

let string = "Ciao!"; // String : Viene usato per processare una serie qualsiasi di caratteri alfanumerici
let number = 42; // Number : Viene usato per per processare un qualsiase valore numerico
let vero = true;
let falso = false; // Boolean : Viene usato per processare un dato che ha solo due valori : Vero o Falso
let nonDefinito; // Undefined : Una variabile undefined non ha ancora un valore specificato, viene poi assegnato in futuro a tempo debito
const nullo = null; // Null : Rappresenta l'assenza totale e volontaria di valore in una variabile

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let MyName = "Federico";
console.log("Il mio nome e'", MyName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 12;
let number2 = 20;

let somma = number1 + number2;
console.log("la somma e'", somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x;
x = 12;
console.log("Ho assegnato a x il valore di", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

MyName = "Pini";
console.log("Il mio cognome e'", MyName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sottrazione = 4 - x;
console.log("4 -", x, "e' uguale a", sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
let nomeDiverso = name1 === name2;
console.log(name1, "e", name2, "sono uguali?", nomeDiverso);
let nomeUguale = name1 === name2.toLowerCase();
console.log(
  name1,
  "e",
  name2,
  "sono uguali se ignoriamo la grafia?",
  nomeUguale
);
