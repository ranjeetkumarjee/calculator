var disply = document.getElementById("result");
var buttons = document.getElementsByTagName("button");

var op1 = 0;
var op2 = null;
var operator = null;

var flag = false;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var val = this.getAttribute("value");

    if (flag == false) {
      flag = true;
      disply.innerText = "";
    }

    if (val == "=") {
      disply.innerText = eval(disply.innerText);
      flag = false;
    } else if (val == "_") {
      disply.innerText = disply.innerText.slice(0, -1);
    } else if (val == "clr") {
      disply.innerText = "";
    } else {
      disply.innerText = disply.innerText + val;
    }
  });
}
