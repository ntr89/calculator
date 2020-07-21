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
  console.log("the key pressed is " + key);
  var myValue = this.innerHTML;
  if (myCom || myCal == "0") {
    myCom = false;
    myCal = "";
  }

  // DIVISION
  if (key == 47 || myValue == "/") {
    console.log(myValue);
    // if myValue is assigned
    if (myValue) {
      myValue = "/";
      if (operatorPresent) {
        myCal = eval(myCal);
      }
      operatorPresent = true;
    } else {
      myValue = "/";
      if (operatorPresent) {
        myCal = eval(myCal);
      }
      operatorPresent = true;
      myCal = myCal + myValue;
    }
  }
  // MULTIPLY
  if (key == 42 || myValue == "*") {
    console.log(myValue);
    // if myValue is assigned
    if (myValue) {
      myValue = "*";
      if (operatorPresent) {
        myCal = eval(myCal);
      }
      operatorPresent = true;
    } else {
      myValue = "*";
      if (operatorPresent) {
        myCal = eval(myCal);
      }
      operatorPresent = true;
      myCal = myCal + myValue;
    }
  }

  // ADD
  if (key == 43 || myValue == "+") {
    console.log(myValue);
    // if myValue is assigned
    if (myValue) {
      console.log("buttclick" + myValue);
      console.log("1: " + myCal);
      myValue = "+";
      if (operatorPresent) {
        console.log("2: " + myCal);
        myCal = eval(myCal);
        console.log("operator present");
      }
      operatorPresent = true;
    } else {
      console.log("3: " + myCal);
      console.log("myValue not defined" + myValue);
      myValue = "+";
      if (operatorPresent) {
        console.log("4: " + myCal);
        myCal = eval(myCal);
        console.log("operator present with adding logic");
      } else {
        console.log("5: " + myCal);
      }
      operatorPresent = true;

      console.log("6: " + myCal);

      console.log("7: " + myValue);
      myCal = myCal + myValue;
    }
  }

  // SUBTRACT
  if (key == 45 || myValue == "-") {
    console.log(myValue);
    // if myValue is assigned
    if (myValue) {
      myValue = "-";
      if (operatorPresent) {
        myCal = eval(myCal);
      }
      operatorPresent = true;
    } else {
      myValue = "-";
      if (operatorPresent) {
        myCal = eval(myCal);
      }
      operatorPresent = true;
      myCal = myCal + myValue;
    }
  }
  // if (myValue == "+" || myValue == "-" || myValue == "*" || myValue == "/") {
  //   if (operatorPresent) {
  //     myCal = eval(myCal);
  //   }
  //   operatorPresent = true;
  //   console.log(myValue);
  //   if (mySwitch) {
  //     mySwitch = false;
  //     if (myOpe.indexOf(myOutput.innerHTML.slice(-1)) > -1) {
  //       myCal = myCal.substring(0, myCal.length - 1);
  //     }
  //   }
  //   mySwitch = true;
  // }
  if (myValue == "=" || key == 13) {
    console.log(myCal);
    if (!myCal == "") {
      myValue = "";
      if (myOpe.indexOf(myOutput.innerHTML.slice(-1)) == -1) {
        myCal = eval(myCal);
      }
    } else {
      myCal = "0";
    }
    myCal = String(myCal);
    console.log(myCal);
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
    console.log(myCal);
    myCal = myCal + actionNumber;
    console.log("outputter " + actionNumber);
  } else if (key) {
  } else {
    console.log("outputter");
    myCal = myCal + myValue;
  }
  myOutput.innerHTML = myCal;
}
