// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lettersLow = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var lettersHigh = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "="];
//randomizing arrays

// let lettersLowRandom = Math.floor(Math.random(lettersLow) * lettersLow.length);
// let lettersHighRandom = Math.floor(
//   Math.random(lettersHigh) * lettersHigh.length
// );
// let numbersRandom = Math.floor(Math.random(numbers) * numbers.length);
// let symbolsRandom = Math.floor(Math.random(symbols) * symbols.length);


function generatePassword() {
  var pool = [];
  var randomPasswordArray = [];
  var characters = parseInt(
    prompt("Please select a length of password. \n" + "min=8 Max=128")
  );
  if (characters < 8 || characters > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  } else {
    alert("Password Length Acceptable.");

    var capitalLetters = confirm("Use captial letters?");
    var lowerCaseLetters = confirm("Use Lower case Letters?");
    var symbolsConfirm = confirm("Use symbols?");
    var numbersConfirm = confirm("Use numbers?");

    // follow pattern for all options

    // For (i=0; i<array.length; i++) { code to execute here}
    if (capitalLetters) {
      pool.push(...lettersHigh);
    }
    if (lowerCaseLetters) {
      pool.push(...lettersLow);
    }
    if (numbersConfirm) {
      pool.push(...numbers);
    }
    if (symbolsConfirm) {
      pool.push(...symbols);
    }
  }

  for (let i = 0; i < characters; i++) {
    var rando = Math.floor(Math.random() * pool.length);
    var randomizer = pool[rando];
    randomPasswordArray.push(randomizer);
  }
  var randomPassword = randomPasswordArray.join("");
//   console.log(randomPassword);
  return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
