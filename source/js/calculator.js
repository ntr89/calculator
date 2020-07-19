var mybtn = document.getElementsByClassName("cbutton");
var myOutput = document.getElementById("output");
var myCal = "";
var myCom = false;
var mySwitch = false;
var myOpe = ["+", "-", "*", "/"];
//console.log(mybtn);
for (var i = 0; i < mybtn.length; i++) {
  mybtn[i].addEventListener("click", doTheCalc);
}
function doTheCalc() {
  var myValue = this.innerHTML;
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
  if (myValue == "=") {
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
jQuery(document).keypress(function (e) {
  var key = e.keyCode;
  console.log("the key pressed is " + key);
  if (key >= 48 && key <= 57) {
    var actionNumber = key - 48;
    console.log("You pressed " + (key - 48));
    myOutput.innerHTML = myCal + actionNumber;
  } else if (key == 47) {
    myOutput.innerHTML = myCal + "/";
  } else if (key == 46) {
    console.log(".");
  } else {
  }
});
