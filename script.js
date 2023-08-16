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

function sign() {
  if(operator === undefined) {
    num1 *= -1;
    resultText.textContent = num1;
  } else if(operator !== undefined) {
    num2 += -1;
    resultText.textContent = num2;
  }
}

function percent(num) {
  if(operator === undefined) {
    num1 /= 100;
    resultText.textContent = num1;
  } else if(operator !== undefined) {
    num2 /= 100;
    resultText.textContent = num2;
  }
}

function calculate() {

}

function ac() {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    resultText.textContent = '0';
}

function clickOperator(calc) {
  if(num1 === undefined) {
    return
  }
  if(calc === '/') {
    operator = '/';
  } else if(calc === '*') {
    operator = '*';
  } else if(calc === '-') {
    operator = '-';
  } else if(calc === '+') {
    operator = '+'
  }
  console.log(operator);
}

function clickNumber(num) {
  let number = String(num);
  if(num1 === undefined) {
    if(number === '.' && num1.includes('.')) {
      return
    }
    num1 = number;
    resultText.textContent = num1;
    return
  }
  if(operator === undefined) {
    if(number === '.' && num1.includes('.')) {
      return
    }
    num1 += number;
    resultText.textContent = num1;
    return
  }
  if(operator !== undefined && num1 !== undefined && num2 === undefined) {
    if(number === '.' && num2.includes('.')) {
      return
    }
    num2 = number;
    resultText.textContent = num2
    return
  }
  if(operator !== undefined && num1 !== undefined && num2 !== undefined) {
    if(number === '.' && num2.includes('.')) {
      return
    }
    num2 += number;
    resultText.textContent = num2
    return
  }
}
// Number listners
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
// first 3 listners
acBtn.addEventListener('click', () => ac())
signBtn.addEventListener('click', () => sign())
percentBtn.addEventListener('click',() => percent())
// operators 
divisionBtn.addEventListener('click',() => clickOperator('/'))
multiplicationBtn.addEventListener('click',() => clickOperator('*'))
subtractionBtn.addEventListener('click',() => clickOperator('-'))
additionBtn.addEventListener('click',() => clickOperator('+'))