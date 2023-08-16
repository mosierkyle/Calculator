'use strict'
let num1;
let num2;
let operator;
let resultText = document.querySelector('#text')

function addition(num1, num2) {
    return (num1) + (num2);
  };
  
function subtraction(num1, num2) {
    return (num1) - (num2);
  };
  
function multiplication(num1, num2) {
    return (num1) * (num2);
  };
  
function division(num1, num2) {
    return (num1) / (num2);
  }

function sign(num) {
    return num * (-1);
}

function percent(num) {
    return num / 100
}

function clickNumber(num) {
  let number = String(num);
  if(num1 === undefined) {
    num1 = number;
    resultText.textContent = num1;
    return
  }
  if(operator === undefined) {
    num1 += number;
    resultText.textContent = num1;
    return
  }
  if(operator !== undefined && num1 !== undefined && num2 === undefined) {
    num2 = number;
    resultText.textContent = num2
    return
  }
  if(operator !== undefined && num1 !== undefined && num2 !== undefined) {
    num2 += number;
    resultText.textContent = num2
    return
  }
}
