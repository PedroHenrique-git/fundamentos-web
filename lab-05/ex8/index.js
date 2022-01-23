const result = document.querySelector('.result');
const btn = document.querySelector('.show-fulltext');
const datetime = document.querySelector('#datetime');

const returnsFullText = (month) => {
    const moths = {
        '01': 'de janeiro',
        '02': 'de fevereiro',
        '03': 'de março',
        '04': 'de abril',
        '05': 'de maio',
        '06': 'de junho',
        '07': 'de julho',
        '08': 'de agosto',
        '09': 'de setembro',
        '10': 'de outubro',
        '11': 'de novembro',
        '12': 'de dezembro',
    };

    return moths[month];
}

btn.addEventListener('click', () => {
    const date = datetime.value;
    const splitedDate = date.split('-').reverse();
    result.textContent = `${splitedDate[0]} ${returnsFullText(splitedDate[1])} de ${splitedDate[2]}`;
}, false);