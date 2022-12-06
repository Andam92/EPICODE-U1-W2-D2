/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
  Math.max(8, 9)
); /*la funzione Mat.max permette di trovare il più grande tra i numeri forniti*/
console.log(
  Math.min(2, 57)
); /*la funzione Mat.min permette di trovare il più piccolo tra i numeri forniti*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 5;
let num2 = 20;

if (num1 !== num2) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (25 % 5 == 0) {
  console.log(
    "divisibile per 5"
  ); /*l'operatore reminder permette di conoscere il resto del rapporto tra due interi*/
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 8;
let num4 = 0;

/* if (num3 || (num4 == 8 && num3 + num4 == 8 && num3 - num4 == 8)) {
  console.log("uno dei due numeri è 8");
} */
if ((num3, num4 == 8 || num3 + num4 == 8)) {
  console.log("uno dei due numeri è 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = {
  prodotto1: 15,
  prodotto2: 15,
  prodotto3: 10,
};

if (
  totalShoppingCart.prodotto1 +
    totalShoppingCart.prodotto2 +
    totalShoppingCart.prodotto3 >
  50
) {
  console.log(
    "CHECKOUT:",
    totalShoppingCart.prodotto1 +
      totalShoppingCart.prodotto2 +
      totalShoppingCart.prodotto3
  );
}
if (
  totalShoppingCart.prodotto1 +
    totalShoppingCart.prodotto2 +
    totalShoppingCart.prodotto3 <
  50
) {
  console.log(
    "CHECKOUT:",
    totalShoppingCart.prodotto1 +
      totalShoppingCart.prodotto2 +
      totalShoppingCart.prodotto3 +
      10,
    "(spedizioni 10€)"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCartBlackFriday = {
  prodotto1: 155,
  prodotto2: 158,
  prodotto3: 105,
};

if (
  ((totalShoppingCartBlackFriday.prodotto1 * 20) % 100) +
    ((totalShoppingCartBlackFriday.prodotto2 * 20) % 100) +
    ((totalShoppingCartBlackFriday.prodotto3 * 20) % 100) >
  50
) {
  console.log(
    "CHECKOUT (spedizioni gratuite):",
    ((totalShoppingCartBlackFriday.prodotto1 * 20) % 100) +
      ((totalShoppingCartBlackFriday.prodotto2 * 20) % 100) +
      ((totalShoppingCartBlackFriday.prodotto3 * 20) % 100)
  );
}
if (
  ((totalShoppingCartBlackFriday.prodotto1 * 20) % 100) +
    ((totalShoppingCartBlackFriday.prodotto2 * 20) % 100) +
    ((totalShoppingCartBlackFriday.prodotto3 * 20) % 100) <
  50
) {
  console.log(
    "CHECKOUT:",
    ((totalShoppingCartBlackFriday.prodotto1 * 20) % 100) +
      ((totalShoppingCartBlackFriday.prodotto2 * 20) % 100) +
      ((totalShoppingCartBlackFriday.prodotto3 * 20) % 100) +
      10,
    "(spedizioni 10€)"
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let first = 100;
let second = 50;
let third = 10;

if (first > second && second > third) {
  console.log(first, second, third);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let example = 456873;
console.log(typeof example);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = 9;
if (number % 2 == 0) {
  console.log("E' un numero pari");
} else if (number % 2 !== 0) console.log("E' un numero dispari");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  city: "Toronto",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName; /*risultato in console: undefined*/
console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills;
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
