const btn = document.querySelector('.done');
const inputPassword = document.querySelector('#password');
const result = document.querySelector('.result');

function qualifyPassword() {
    const password = inputPassword.value;
    
    const hasUpperLetter = password.match(/[A-Z]/g);
    const hasLowerLetter = password.match(/[a-z]/g);
    const hasNumberLetter = password.match(/[0-9]/g);
    const hasAnySpecialCharacter = password.match(/\W/g);

    console.log(hasUpperLetter, hasLowerLetter, hasNumberLetter, hasAnySpecialCharacter);

    if( hasUpperLetter && hasLowerLetter && hasNumberLetter && hasAnySpecialCharacter ) return 'forte';
    if( hasUpperLetter && hasLowerLetter && hasNumberLetter ) return 'moderada';
    if( hasUpperLetter || hasLowerLetter ) return 'fraca';
}

btn.addEventListener('click', () => { 
    result.className = `result ${qualifyPassword()}`; 
    result.innerText = qualifyPassword(); 
}, false);