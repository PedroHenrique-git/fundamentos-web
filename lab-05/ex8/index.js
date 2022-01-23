const data1 = document.querySelector('#data1');
const data2 = document.querySelector('#data2');
const btn = document.querySelector('.calcular');
const showResult = document.querySelector('.result');

const calculateWeeks = () => {
    const d1 = new Date(data1.value);
    const d2 = new Date(data2.value);    
    let val = 0;

    if( d1 > d2 ) {
        val = d1 - d2;
    } else {
        val = d2 - d1; 
    }

    const result = Math.floor((((new Date(val).getTime()/1000)/60)/60)/168);
    return result;
}

btn.addEventListener('click', () => {
    showResult.innerText = `Numero de semanas passadas: ${calculateWeeks()}`
}, false);


