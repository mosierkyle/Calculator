'use strict'
let num1;
let num2;
let operator;
let resultText = document.querySelector('#text')
const acBtn = document.querySelector('#AC')
const signBtn = document.querySelector('#sign')
const percentBtn = document.querySelector('#percent')
const divisionBtn = document.querySelector('#division')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')
const multiplicationBtn = document.querySelector('#multiplication')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const subtractionBtn = document.querySelector('#subtraction')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const additionBtn = document.querySelector('#addition')
const zero = document.querySelector('#zero')
const decimal = document.getElementById('decimal')
const calculateBtn = document.querySelector('#calculate')
const numbers = document.querySelectorAll('.number')

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

function calculate() {

}

function ac() {

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

seven.addEventListener('click', () => clickNumber(7))
eight.addEventListener('click', () => clickNumber(8))
nine.addEventListener('click', () => clickNumber(9))
four.addEventListener('click', () => clickNumber(4))
five.addEventListener('click', () => clickNumber(5))
six.addEventListener('click', () => clickNumber(6))
one.addEventListener('click', () => clickNumber(1))
two.addEventListener('click', () => clickNumber(2))
three.addEventListener('click', () => clickNumber(3))
zero.addEventListener('click', () => clickNumber(0))
decimal.addEventListener('click', () => clickNumber('.'))