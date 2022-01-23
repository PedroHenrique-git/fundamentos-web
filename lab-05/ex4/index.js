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

const highestOccurrence = () => {
  const text = textArea.value;
  const occurrences = showOccurrences(text);
  let highestOccurrence = 0;
  
  for(const key in occurrences) {
      if(occurrences[key] > highestOccurrence) {
        highestOccurrence = occurrences[key];    
      }
  }

  for(const key in occurrences) {
    if(occurrences[key] === highestOccurrence) return `A palavra com maior ocorrencia e: ${key}`;  
  }

  return 'nenhuma palavra encontrada';
}

btn.addEventListener('click', () => {
    const result = document.querySelector('.result');
    result.textContent = highestOccurrence();
}, false);