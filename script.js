// variable definitions
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
var numbers = "0123456789";
var Characters = "!@#$%^&*()_++-/?><;|{}'";

// Write password to the #password input
// This is where when user clicks Generate, it takes variables and goes thru function loop.
document.getElementById("generate").addEventListener("click", function (e) {
  e.preventDefault();
  var LC = document.getElementById("lowerCase").checked;
  var UC = document.getElementById("upperCase").checked;
  var NC = document.getElementById("numbers").checked;
  var SC = document.getElementById("Characters").checked;
  // var pwlength = 8;
  var pwlength = document.getElementById("pwlength").value;
  var password = "";

  if (pwlength < 8 || pwlength > 28) {
    alert("Password's LENGTH value is not in range, try again; choose 8-28.");
  } else if (LC === false && UC === false && NC === false && SC === false) {
    alert("One of the Criterias is needed to be selected.");
  } else {
    if (LC === true) {
      password += lowerCase;
    }
    if (UC === true) {
      password += upperCase;
    }
    if (NC === true) {
      password += numbers;
    }
    if (SC === true) {
      password += Characters;
    }
  }

  var PWoutput = "";
  var rand = 0;

  for (var i = 0; i < pwlength; i++) {
    rand = Math.floor(Math.random() * password.length);
    PWoutput += password[rand];
  }
  document.getElementById("PWoutput").innerHTML = PWoutput;
});
