const btn = document.querySelector('.show-result');
const inputDate = document.querySelector('#nascimento');
const resultDiv = document.querySelector('.result');

btn.addEventListener('click', () => {
    const year = inputDate.value.split('/')[2];
    const currentYear = new Date().getFullYear();
    const resultDays = (currentYear - year) * 365;
    resultDiv.textContent = `Essa pessoa viveu ${resultDays} dias`;  
}, false);