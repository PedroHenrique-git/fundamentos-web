const btn = document.querySelector('.show-result');
const textArea = document.querySelector('textarea[name=texto]');

const showOccurrences = (text) => {
    const occurrences = {}; 
    const treatWords = text.replace(/[^\w ]/gi,'').toLowerCase().split(' ');
    
    treatWords.forEach((word) => {
        if( occurrences[word] ) {
            occurrences[word]++;
        } else {
            occurrences[word] = 1;    
        }
    });

    return occurrences;
};

const mountHtml = () => {
    const text = textArea.value;
    const objOccurrences = showOccurrences(text);
    const words = Object.keys(objOccurrences);
    const occurrences = Object.values(objOccurrences);
    const table = document.querySelector('.results');

    while(table.lastChild) {
        table.removeChild(table.lastChild);    
    }

    const thead = document.createElement('thead');
    const thWord = document.createElement('th');
    const thOccurrences = document.createElement('th');

    thWord.textContent = 'Palavra';
    thOccurrences.textContent = 'Ocorrencias';

    thead.appendChild(thWord);
    thead.appendChild(thOccurrences);

    const tbody = document.createElement('tbody');

    const trs = words.map((word, index) => {
        const tr = document.createElement('tr');
        const tdWord = document.createElement('td');
        const tdOccurrences = document.createElement('td');

        tdWord.textContent = word;
        tdOccurrences.textContent = occurrences[index];

        tr.appendChild(tdWord),
        tr.appendChild(tdOccurrences);

        return tr;
    });

    trs.forEach((tr) => tbody.appendChild(tr));
    
    table.appendChild(thead);
    table.appendChild(tbody);
}

btn.addEventListener('click', mountHtml, false);
