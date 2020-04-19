// variable definitions
// var generateBtn = document.querySelector("#generate");
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

  // return password.split("");

  var pwArray = password.split("");
  var arrayLength = passwordArray.length;
  var scrambledPassword = "";
  var rand = 0;

  for (var i = 0; i < arrayLength; i++) {
    rand = Math.floor(Math.random() * passwordArray.length);
    scrambledPassword += passwordArray.splice(rand, 1);
  }

  return [{ betterPassword: scrambledPassword, lamePassword: password }];
}
