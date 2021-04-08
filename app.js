//add input to display
function appendCalc(value, operator) {
  var calc = document.getElementById("calc");
  var answer = document.getElementById("answer");
  var error = document.getElementById("error");
  error.innerText = ""; //clear any existing error message
  if (calc.innerText.length > 40) {
    error.innerText = "CHARACTERS EXCEEDED"; //display error if character exceeds
  } else {
    if (answer.innerText) {
      if (operator == 1) {
        calc.innerText = answer.innerText;
        answer.innerText = "";
      } else {
        calc.innerText = "";
        answer.innerText = "";
      }
    }
    calc.innerText += value;
  }
}

//reset the whole calculator
function reset() {
  var calc = document.getElementById("calc");
  var answer = document.getElementById("answer");
  var error = document.getElementById("error");

  calc.innerText = "";
  answer.innerText = "";
  error.innerText = "";
}

//clear the last inputted character
function clr() {
  var error = document.getElementById("error");
  var calc = document.getElementById("calc");
  var sliced = calc.innerText.slice(0, -1);
  calc.innerText = sliced;
  error.innerText = "";
}

//calculate the expression
function equal() {
  var calc = document.getElementById("calc").innerText;
  var answer = document.getElementById("answer");
  var error = document.getElementById("error");
  if (calc) {
    try {
      eval(calc);
    } catch (err) {
      if (err instanceof SyntaxError) {
        error.innerText = "ERROR"; //display an error message if calculation error
      }
    } finally {
      var calcanswer = eval(calc); //calculate
      calcanswer =
        Math.round((calcanswer + Number.EPSILON) * 100000000) / 100000000; //round off number to 8 decimals
    }
    if (calcanswer) {
      answer.innerHTML = calcanswer;
    }
  } else {
    error.innerText = "NO INPUT"; //display an error message if no input
  }
}

//lets make calculator work with the keyboard keys
document.addEventListener("keydown", function (e) {
  var isNumber = /^[0-9,.]$/i.test(e.key);
  var isOperator = /^[7/,*,+,-]$/i.test(e.key);
  if (isNumber) {
    appendCalc(e.key, 0); //add to display when number pressed on keyboard
  }
  if (isOperator) {
    appendCalc(e.key, 1); //add operator when press
  }
  if (e.key === "=" || e.key === "Enter") {
    equal(); //calculate when = sign is pressed
  }
  if (
    e.key === "Backspace" ||
    e.key === "Delete" ||
    e.key === "c" ||
    e.key === "C"
  ) {
    clr(); //clear one line c, del or backspace is pressed
  }
  if (e.key === "r" || e.key === "R") {
    reset(); //reset calculator when r is pressed
  }
});
