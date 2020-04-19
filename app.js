var generateBtn = document.querySelector("#generate");

function mix(num, arr) {
  var possibilityIndex = 0;
  var password = scramblePw;
  var passwordText = document.querySelector("#password");

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

console.log(password);
console.log(mix(8, [lowerCase, upperCase, characters, numbers]));

generateBtn.addEventListener(
  "click",
  function () {
    var password;

    document.body.appendChild("#password");
  }

  // (e) => {
  // e.preventDefault();
);
