// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var lettersLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var lettersHigh = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "="]

//randomizing arrays

let lettersLowRandom = Math.floor(Math.random(lettersLow) * lettersLow.length)
let lettersHighRandom = Math.floor(Math.random(lettersHigh) * lettersHigh.length)
let numbersRandom = Math.floor(Math.random(numbers) * numbers.length)
let symbolsRandom = Math.floor(Math.random(symbols) * symbols.length)

var pool = [];


function writePassword() {
    var characters = prompt("Please select a length of password. \n" + "min=8 Max=128");
    if(characters < 8 || characters > 128) {
        alert("Password must be between 8 and 128 characters");
        return;
    } else {
        alert("Password Length Acceptable.");
        var capitalLetters = confirm("Use captial letters?");
        var lowerCaseLetters = confirm("Use Lower case Letters?");
        // foolow pattern for the other characters
        for (let i =0; i < characters; i++) {
            if(capitalLetters) {
                pool.push(...lettersHighRandom);
            }
            if(lowerCaseLetters) {
                pool.push(...lettersLowRandom)
            }
            if(nums) {
                pool.push(...numbersRandom)
            }
            if(syms) {
                pool.push(...symbolsRandom)
            }
        }
    }
}





// For (i=0; i<array.length; i++) { code to execute here}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



