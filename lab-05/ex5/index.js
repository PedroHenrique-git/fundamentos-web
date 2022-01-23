const textArea = document.querySelector('#texto');
const inputWord = document.querySelector('#palavra');
const inputNewWord = document.querySelector('#new-word');
const btnDone = document.querySelector('.done');
const result = document.querySelector('.result');

const changeWord = () => {
    const newText = textArea.value.replace(inputWord.value, inputNewWord.value);
    textArea.value = newText; 
    result.textContent = newText; 
}

btnDone.addEventListener('click', changeWord, false)
