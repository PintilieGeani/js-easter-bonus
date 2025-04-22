// *************************************************************************************************************************
// 1. Somma solo numeri pari.
// Obiettivo: Data un array di numeri, sommare solo quelli pari.
// const numeri = [2, 5, 8, 3, 10, 7];
// Output atteso: 20 (2 + 8 + 10)

// Risoluzione
// Raccolta dati:
const numeri = [2, 5, 8, 3, 10, 7];
let sommaPari = 0

// Risoluzione Logica
for (i = 0; i < numeri.length; i++) {
    let curNumber = numeri[i]
    if (curNumber % 2 === 0) {
        sommaPari = sommaPari + curNumber
    }
}

// Output
console.log(sommaPari)

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -")

// *************************************************************************************************************************
// *************************************************************************************************************************
// 2.Conta quante volte appare un valore.
//Obiettivo: Contare quante volte appare il valore "rosso" in un array di stringhe.
//const colori = ["rosso", "blu", "rosso", "verde", "rosso"];
// Output atteso: 3

// Risoluzione
// Raccolta dati
const colori = ["rosso", "blu", "rosso", "verde", "rosso"];
let quanteVolte = 0

// Risoluzione Logica
for (i = 0; i < colori.length; i++) {
    let curColor = colori[i]
    if (curColor === "rosso") {
        quanteVolte = quanteVolte + 1
    }
}

// Output
console.log(quanteVolte)

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -")

// *************************************************************************************************************************
// *************************************************************************************************************************
// 3. Inverti un Array
// Obiettivo: Creare un nuovo array con gli elementi in ordine inverso (senza usare .reverse()).
// const input = [1, 2, 3, 4];
// Output atteso: [4, 3, 2, 1]

// Risoluzione
// Raccolta dati
const input = [1, 2, 3, 4];

// Risoluzione Logica e output
for (i = input.length - 1; i >= 0; i--) {
    let invertito = input[i]
    console.log(invertito)
}

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -")

// *************************************************************************************************************************
// *************************************************************************************************************************
// 4. Trova il minimo 
//Obiettivo: Stampare il valore più piccolo in un array di numeri.
//const numeri = [45, 2, 89, 3, 22];
// Output atteso: 2

// Risoluzione
// Raccolta dati
const numeri2 = [45, 2, 89, 3, 22];
let min = numeri[0]

// Risoluzione logica
for (i = 0; i < numeri2.length; i++) {
    let curNumber = numeri2[i]
    console.log(curNumber)
    if (curNumber < min) {
        min = curNumber
    }
}

// Output
console.log("Il numero più basso è:", min)

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -")

// *************************************************************************************************************************
// *************************************************************************************************************************
// 5. Somma degli indici dispari 
//Obiettivo: Sommare i numeri che si trovano in posizioni dispari dell’array.
//const arr = [10, 20, 30, 40, 50, 60];
// Output atteso: 20 + 40 + 60 = 120

// Risoluzione
// Raccolta dati
const arr = [10, 20, 30, 40, 50, 60];
somma = 0;

// Risoluzione Logica
for (i = 0; i < arr.length; i++) {
    let curNumber = arr[i]
    if (i % 2 !== 0) {
        somma = somma + curNumber
    }
}

// Output
console.log(somma)

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -")

// *************************************************************************************************************************
// *************************************************************************************************************************
// 6. Differenza tra max e min
//Obiettivo: Calcolare la differenza tra il numero più grande e quello più piccolo in un array.
//const numeri = [5, 12, 3, 20, 8];
// Output atteso: 20 - 3 = 17

// Risoluzione
// Raccolta dati
const numeri3 = [5, 12, 3, 20, 8];
let min2 = numeri3[0]
let max = numeri3[0]

// Risoluzione logica 
for (i = 0; i < numeri3.length; i++) {
    let curNumber = numeri3[i]
    if (curNumber < min2) {
        min2 = curNumber
    }
}
console.log("Il numero minimo è:", min2)

for (i = 0; i < numeri3.length; i++) {
    let curNumber = numeri3[i]
    if (curNumber > max) {
        max = curNumber
    }
}
console.log("Il numero massimo è:", max)

const differenza = max - min2

// Output
console.log("La differenza tra i due valori è", differenza)

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -")

// *************************************************************************************************************************
// *************************************************************************************************************************
// 7. Conta i booleani veri. 
//Obiettivo: Contare quanti elementi true ci sono in un array di booleani.
//const flags = [true, false, true, true, false];
// Output atteso: 3

// Risoluzione
// Raccolta dati: 
const flags = [true, false, true, true, false,];
let booleaniTrue = 0

// Risoluzione Logica
for (i = 0; i < flags.length; i++) {
    let curElement = flags[i]
    if (curElement === true) {
        booleaniTrue = booleaniTrue + 1
    }
}

// Output
console.log(booleaniTrue)

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -")

// *************************************************************************************************************************
// *************************************************************************************************************************
// 8. Crea un nuovo array con i doppi 
//Obiettivo: Creare un array in cui ogni numero è il doppio di quello originale. (senza uso di .map)
//const numeri = [1, 2, 3, 4];
// Output atteso: [2, 4, 6, 8]

// Risoluzione
// Raccolta dati
const numeri4 = [1, 2, 3, 4];
let doppi = []

// Risoluzione logica
for (i = 0; i < numeri4.length; i++) {
    let curNumber = numeri4[i]
    doppi.push(curNumber * 2)
}

// Output
console.log(doppi)

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -")

// *************************************************************************************************************************
// *************************************************************************************************************************
// 9. Conta le vocali in una parola 
// Obiettivo: Data una stringa, contare quante vocali contiene (a, e, i, o, u). PS: che cosa succede se qualche vocale è maiuscola? 😉
// const parola = "elefante";
// Output atteso: 4

// Risoluzione Logica
// Raccolta Dati
const parola = "elefante";
let nVocali = 0

// Risoluzione Logica
for (i = 0; i < parola.length; i++) {
    let curLetter = parola[i]
    if (curLetter === "a" || curLetter === "e" || curLetter === "i" || curLetter === "o" || curLetter === "u" || curLetter === "A" || curLetter === "E" || curLetter === "I" || curLetter === "O" || curLetter === "U") {
        nVocali = nVocali + 1
    }
}

// Output
console.log(nVocali)

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -")

// *************************************************************************************************************************
// *************************************************************************************************************************
// 10. Rimuovi i duplicati da un array (senza .filter o set)
// Obiettivo: Creare un nuovo array che contiene ogni valore una sola volta.
// const input = [1, 2, 2, 3, 1, 4];
// Output atteso: [1, 2, 3, 4]

// Risoluzione
// Raccolta Dati
const input2 = [1, 2, 2, 3, 1, 4];
let noDoppi = []

for(i = 0; i < input2.length; i++){
    curNum = input2[i]
    console.log(curNum)
}
console.log(noDoppi)


