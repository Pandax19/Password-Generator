// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var lettersLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var lettersHigh = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "="]


var pool = []
pool = pool.concact(numbers, lettersLow, lettersHigh, symbols)
console.log(pool)

//randomizing arrays

let lettersLowRandom = Math.floor(Math.random(lettersLow) * lettersLow.length)
let lettersHighRandom = Math.floor(Math.random(lettersHigh) * lettersHigh.length)
let numbersRandom = Math.floor(Math.random(numbers) * numbers.length)
let symbolsRandom = Math.floor(Math.random(symbols) * symbols.length)


// For (i=0; i<array.length; i++) { code to execute here}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



