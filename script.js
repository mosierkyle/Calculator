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
    if(num1 === undefined) {
      return
    }
    num1 /= 100;
    resultText.textContent = num1;
  } else if(operator !== undefined) {
    if(num2 === undefined) {
      return
    }
    num2 /= 100;
    resultText.textContent = num2;
  }
}

function calculate() {
  num1 = Number(num1);
  num2 = Number(num2);
  if(num1 === undefined || num2 === undefined || operator === undefined) {
    return
  }
  if(operator === '/') {
    num1 = division(num1,num2);
    resultText.textContent = num1;
    operator = undefined;
    num2 = undefined;
  } else if(operator === '*') {
      num1 = multiplication(num1,num2);
      resultText.textContent = num1;
      operator = undefined;
      num2 = undefined;
  } else if(operator === '-') {
      num1 = subtraction(num1,num2);
      resultText.textContent = num1;
      operator = undefined;
      num2 = undefined;
  }  else if(operator === '+') {
      num1 = addition(num1,num2);
      resultText.textContent = num1;
      operator = undefined;
      num2 = undefined;
  } 
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
calculateBtn.addEventListener('click', () => calculate())

//button color of operators on click
divisionBtn.addEventListener('mousedown', () => divisionBtn.style.backgroundColor = 'rgba(255, 170, 51, 0.9)')
divisionBtn.addEventListener('mouseup', () => divisionBtn.style.backgroundColor = 'rgba(255, 149, 0, 0.9)')

multiplicationBtn.addEventListener('mousedown', () => multiplicationBtn.style.backgroundColor = 'rgba(255, 170, 51, 0.9)')
multiplicationBtn.addEventListener('mouseup', () => multiplicationBtn.style.backgroundColor = 'rgba(255, 149, 0, 0.9)')

subtractionBtn.addEventListener('mousedown', () => subtractionBtn.style.backgroundColor = 'rgba(255, 170, 51, 0.9)')
subtractionBtn.addEventListener('mouseup', () => subtractionBtn.style.backgroundColor = 'rgba(255, 149, 0, 0.9)')

additionBtn.addEventListener('mousedown', () => additionBtn.style.backgroundColor = 'rgba(255, 170, 51, 0.9)')
additionBtn.addEventListener('mouseup', () => additionBtn.style.backgroundColor = 'rgba(255, 149, 0, 0.9)')

calculateBtn.addEventListener('mousedown', () => calculateBtn.style.backgroundColor = 'rgba(255, 170, 51, 0.9)')
calculateBtn.addEventListener('mouseup', () => calculateBtn.style.backgroundColor = 'rgba(255, 149, 0, 0.9)')

//button color of numbers on click
seven.addEventListener('mousedown', () => seven.style.backgroundColor = '#c5c5c5')
seven.addEventListener('mouseup', () => seven.style.backgroundColor = '#b5b5b4')

eight.addEventListener('mousedown', () => eight.style.backgroundColor = '#c5c5c5')
eight.addEventListener('mouseup', () => eight.style.backgroundColor = '#b5b5b4')

nine.addEventListener('mousedown', () => nine.style.backgroundColor = '#c5c5c5')
nine.addEventListener('mouseup', () => nine.style.backgroundColor = '#b5b5b4')

four.addEventListener('mousedown', () => four.style.backgroundColor = '#c5c5c5')
four.addEventListener('mouseup', () => four.style.backgroundColor = '#b5b5b4')

five.addEventListener('mousedown', () => five.style.backgroundColor = '#c5c5c5')
five.addEventListener('mouseup', () => five.style.backgroundColor = '#b5b5b4')

six.addEventListener('mousedown', () => six.style.backgroundColor = '#c5c5c5')
six.addEventListener('mouseup', () => six.style.backgroundColor = '#b5b5b4')

one.addEventListener('mousedown', () => one.style.backgroundColor = '#c5c5c5')
one.addEventListener('mouseup', () => one.style.backgroundColor = '#b5b5b4')

two.addEventListener('mousedown', () => two.style.backgroundColor = '#c5c5c5')
two.addEventListener('mouseup', () => two.style.backgroundColor = '#b5b5b4')

three.addEventListener('mousedown', () => three.style.backgroundColor = '#c5c5c5')
three.addEventListener('mouseup', () => three.style.backgroundColor = '#b5b5b4')

zero.addEventListener('mousedown', () => zero.style.backgroundColor = '#c5c5c5')
zero.addEventListener('mouseup', () => zero.style.backgroundColor = '#b5b5b4')

decimal.addEventListener('mousedown', () => decimal.style.backgroundColor = '#c5c5c5')
decimal.addEventListener('mouseup', () => decimal.style.backgroundColor = '#b5b5b4')