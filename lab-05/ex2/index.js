const text = prompt("Digite uma frase: ");

const boldVowels = (text) => text.split('').map((letter) => (
    letter.match(/[aeiou]/gi) ? `<strong>${letter}</strong>` : letter 
)).join('');

document.querySelector('.resultado').innerHTML = boldVowels(text);