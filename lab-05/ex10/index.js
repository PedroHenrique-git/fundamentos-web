const text = prompt('Digite uma frase: ');

const codifyText = () => text.toLowerCase().split('').map((letter) => {
    switch(letter) {
        case 't':
            return 'p';
        case 'e':
            return 'o';
        case 'n':
            return 'l';
        case 'i':
            return 'a';
        case 's':
            return 'r';
        case 'p':
            return 't';
        case 'o':
            return 'e';
        case 'l':
            return 'n';
        case 'a':
            return 'i';
        case 'r':
            return 's';
    }

    return letter;
}).join('');

document.querySelector('.result').textContent = `Frase codificada: ${codifyText()}`