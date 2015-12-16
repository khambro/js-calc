var calculate = function (x, operator, y) {
  if (operator == "+") {
    answer = x + y;
  } else if (operator == "-") {
    answer = x - y;
  } else if (operator == "/") {
    answer = x / y;
  } else if (operator == "x") {
    answer = x * y;
  } else if (operator == "x^2") {
    answer = x * x;
  } else if (operator == "x^x") {
    answer = Math.pow(x,x)
  } else if (operator == "√") {
    answer = Math.sqrt(x)
  }
  return answer;
};

var inverse = function (x) {
  if (x > 0) {
    answer = x * -1;
  } else if (x < 0) {
    answer = Math.abs(x);
  } return answer;
};

// var validate = function () {
//  if ((calculator.elements.x.value) === number); {
//    error "invalid number" ;
//  }else if ((calculator.elements.y.value) === number); {
//    error "invalid number" ;
//  } return error;
//  };


window.onload = function () {

  var calculator = document.getElementById("calculator");
  var answerDiv  = document.getElementById("answer");
  var not_inverse    = document.getElementById("not_inverse");

  calculator.addEventListener("submit", function (event) {
    event.preventDefault();
    var x = parseFloat(document.getElementById("x").value);
    var y = parseFloat(document.getElementById("y").value);
    var operator = calculator.elements.operator.value;

    var answer = calculate(x, operator, y);
    calculator.elements.x.value = answer;
    answerDiv.innerHTML = answer;
  });


  ce.addEventListener("click", function () {
    x.focus();
    answerDiv.innerHTML = 0;
  });

  not_inverse.addEventListener("click", function () {
    event.preventDefault();
    var x = parseFloat(document.getElementById("x").value);
    calculator.elements.x.value = inverse(x);
    answerDiv.innerHTML = inverse(x);

  });




};
