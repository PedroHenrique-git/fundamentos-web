const text = prompt("Digite uma frase: ");

const reverseText = (text) => text.split('').reverse().join('');

document.querySelector('.resultado').textContent = reverseText(text); 