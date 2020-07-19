var mybtn = document.getElementsByClassName("inputer");
var mybtnEquals = document.getElementById("equals");
var myOutput = document.getElementById("output");
var myCal = "";
var myCom = false;
var mySwitch = false;
var myOpe = ["+", "-", "*", "/"];
//console.log(mybtn);

// EVENT LISTENERS - BUTTONS AND KEYBOARD
for (var i = 0; i < mybtn.length; i++) {
  mybtn[i].addEventListener("click", calcInput);
}
mybtnEquals.addEventListener("click", runCalculation);
function detectKey() {}
jQuery(document).keypress(calcInput);
// FUNCTIONS (INPUT, CALCULATE, STORE)
function calcInput(e) {
  var key = e.keyCode;
  var myValue = this.innerHTML;
  console.log(this);
  if (myCom || myCal == "0") {
    myCom = false;
    myCal = "";
  }
  if (myValue == "+" || myValue == "-" || myValue == "*" || myValue == "/") {
    if (mySwitch) {
      mySwitch = false;
      if (myOpe.indexOf(myOutput.innerHTML.slice(-1)) > -1) {
        myCal = myCal.substring(0, myCal.length - 1);
      } else {
        myCal = eval(myCal);
      }
    }
    mySwitch = true;
  }
  if (myValue == "=" || key == 47) {
    myValue = "";
    if (myOpe.indexOf(myOutput.innerHTML.slice(-1)) == -1) {
      myCal = eval(myCal);
    }
  } else if (myValue == "C") {
    myCal = 0;
    myCom = true;
  } else if (myOutput.innerHTML.indexOf(".") > -1 && myValue == ".") {
    myValue = "";
  } else {
    myCal = myCal + myValue;
  }
  myOutput.innerHTML = myCal;
}

function runCalculation() {
  myCal = myOutput.innerHTML;
  if (myOpe.indexOf(myOutput.innerHTML.slice(-1)) == -1) {
    myCal = eval(myCal);
  }
}
