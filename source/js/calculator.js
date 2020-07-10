var mybtn = document.getElementsByClassName("cbutton");
var myOutput = document.getElementById("output");
var myCal = "";
var myCom = false;
var mySwitch = false;
var myOpe = ["+", "-", "*", "/"];
//console.log(mybtn);
for (var i = 0; i < mybtn.length; i++) {
  mybtn[i].addEventListener("click", function () {
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
  });
}
runOnKeys(() => alert("Hello!"), "KeyQ", "KeyW");
