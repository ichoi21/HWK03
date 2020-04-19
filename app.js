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
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Char = [
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
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", mix);

function mix(num, arr) {
  var possibilityIndex = 0;
  var password = scramblePw;
  var passwordText = document.querySelector("#password");

  passwordText.value = scramblePw;

  targetArray = [];

  for (var i = 0; i < num; i++) {
    targetArray = arr[possibilityIndex];
    possibilityIndex++;

    password += targetArray[Math.floor(Math.random() * targetArray.length)];

    if (possibilityIndex === arr.length) {
      possibilityIndex = 0;
    }
  }

  // return password;

  var pwArray = password.split("");
  var arrayLength = pwArray.length;
  var scramblePw = "";
  var rand = 0;

  for (var i = 0; i < arrayLength; i++) {
    rand = Math.floor(Math.random() * pwArray.length);
    scramblePw += pwArray.splice(rand, 1);
  }

  return { Strong: scramblePw, Weak: password };
}

console.log(mix(8, [lowerCase, upperCase, Char, numbers]));
