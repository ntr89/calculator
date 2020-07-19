var mybtn = document.getElementsByClassName("inputer");
var mybtnEquals = document.getElementById("equals");
var myOutput = document.getElementById("output");
var myCal = "";
var myCom = false;
var mySwitch = false;
var myOpe = ["+", "-", "*", "/"];
var operatorPresent = false;
//console.log(mybtn);

// EVENT LISTENERS - BUTTONS AND KEYBOARD
for (var i = 0; i < mybtn.length; i++) {
  mybtn[i].addEventListener("click", calcInput);
}
function detectKey() {}
jQuery(document).keypress(calcInput);
// FUNCTIONS (INPUT, CALCULATE, STORE)
function calcInput(e) {
  var key = e.keyCode;
  // console.log("the key pressed is " + key);
  var myValue = this.innerHTML;
  if (myCom || myCal == "0") {
    myCom = false;
    myCal = "";
  }
  if (key == 47) {
    myValue = "/";
    myCal = myCal + myValue;
  }
  if (myValue == "+" || myValue == "-" || myValue == "*" || myValue == "/") {
    if (operatorPresent) {
      myCal = eval(myCal);
    }
    operatorPresent = true;
    console.log(myValue);
    if (mySwitch) {
      mySwitch = false;
      if (myOpe.indexOf(myOutput.innerHTML.slice(-1)) > -1) {
        myCal = myCal.substring(0, myCal.length - 1);
      }
    }
    mySwitch = true;
  }
  if (myValue == "=" || key == 13) {
    myValue = "";
    if (myOpe.indexOf(myOutput.innerHTML.slice(-1)) == -1) {
      myCal = eval(myCal);
    }
  } else if (myValue == "C" || key == 99) {
    myCal = 0;
    myCom = true;
  } else if (myOutput.innerHTML.indexOf(".") > -1 && myValue == ".") {
    myValue = "";
  } else if (key == 46) {
    if (myCal.endsWith(".")) {
      console.log("the string ends with .");
    } else {
      myCal = myCal + ".";
      console.log(myCal);
    }
  } else if (key >= 48 && key <= 57) {
    var actionNumber = key - 48;
    myCal = myCal + actionNumber;
  } else if (key) {
  } else {
    myCal = myCal + myValue;
  }
  myOutput.innerHTML = myCal;
}

// function (e) {
//   var key = e.keyCode;
//   console.log("the key pressed is " + key);
//   if (key >= 48 && key <= 57) {
//     var actionNumber = key - 48;
//     console.log("You pressed " + (key - 48));
//     myOutput.innerHTML = myCal + actionNumber;
//   } else if (key == 47) {
//     myOutput.innerHTML = myCal + "/";
//   } else if (key == 46) {
//     console.log(".");
//   } else {
//   }
// }
