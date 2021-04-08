//add input to display
function appendCalc(value, operator) {
  var calc = document.getElementById("calc");
  var answer = document.getElementById("answer");
  var error = document.getElementById("error");

  if (calc.innerText.length > 40) {
    error.innerText = "CHARACTERS EXCEEDED"; //display error
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
        error.innerText = "ERROR"; //display an error message
      }
    } finally {
      var calcanswer = eval(calc);
    }
    if (calcanswer) {
      answer.innerHTML = calcanswer;
    }
  }
}
