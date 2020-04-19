// variable definitions
var generateBtn = document.querySelector("#generate");
var lowerCase = [
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
var upperCase = [
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
const numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  "”",
  "#",
  "$",
  "%",
  "&",
  "’",
  "*",
  "+",
  "-",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// console.log(lowerCase);
// console.log(upperCase);
// console.log(numChar);
// console.log(specialChar);

// Write password to the #password input
function mix(num, arr) {
  var possibilityIndex = 0;
  var password = "";
  var targetArray = [];

  for (var i = 0; i < num; i++) {
    targetArray = arr[possibilityIndex];
    possibilityIndex++;
    password += targetArray[Math.floor(Math.random() * targetArray.length)];

    if (possibilityIndex === arr.length) {
      possibilityIndex = 0;
    }
  }

  return password.split("");

  var pwArray = password.split("");
  var arrayLength = pwArray.length;
  var scramblePW = "";
  var rand = 0;

  for (var i = 0; i < arrayLenght; i++) {
    rand = Math.floor(Math.random() * pwArray.length);
    scramblePW += pwArray.splice(rand, 1);
  }

  return { batter: scrambledPW, std: password };
}
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

console.log(mix(8, [lowerCase, upperCase, specialChar, numChar]));

console.log(scrambledPW, password);
