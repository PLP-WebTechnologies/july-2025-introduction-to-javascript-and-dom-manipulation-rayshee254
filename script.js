// JavaScript Basics
function checkEvenOdd() {
 
  const number = document.getElementById('numberInput').value;
  let resultText;

  
  if (number % 2 === 0) {
    resultText = `${number} is even.`;
  } else {
    resultText = `${number} is odd.`;
  }

  
  document.getElementById('result').textContent = resultText;
}

// JavaScript Functions
function calculateTotal() {
  
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const total = num1 + num2;
  document.getElementById('totalResult').textContent = `Total: ${total}`;
}

// JavaScript Loops
function generateList() {
  const numberList = document.getElementById('numberList');
  numberList.innerHTML = ''; 

  // Loop to generate list items
  for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    numberList.appendChild(listItem);
  }
}

// DOM Manipulation
function toggleColor() {
  const colorText = document.getElementById('colorText');

  // Toggle class to change color
  colorText.classList.toggle('colorToggle');
}
