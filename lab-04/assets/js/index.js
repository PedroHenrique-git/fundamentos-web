//Questao 1

function factorial(number) {
    let res = 1;
    for(let i = number; i > 0; i--) {
        res = res * i; 
    }
    return res;
}

const elementForShowResultQuestionOne = document.querySelector('.resultado-questao-1');
elementForShowResultQuestionOne.textContent = factorial(12);

//Questao 2

function powersOfFour() {
    const results = [];
    for(let i = 0; i <= 30; i++) {
        results.push(4**i);
    }
    return results.map((number, index) => 
        `
            <p>
                4<sup>${index}</sup> = ${number}
            </p>
        `
    );
}

const elementForShowResultQuestionTwo = document.querySelector('.resultado-questao-2');
powersOfFour().forEach((item) => elementForShowResultQuestionTwo.innerHTML += item);

// Questao 3

function addAllThePairsUpToAThousand() {
    let sum = 0;
    for(let i = 0; i <= 1000; i++) {
        if( i % 2 === 0 ) sum += i;
    }
    return sum;
}

const elementForShowResultQuestionThree = document.querySelector('.resultado-questao-3');
elementForShowResultQuestionThree.textContent = addAllThePairsUpToAThousand();

// Questao 4

function fibonacci(number) {
    const results = [];
    let atual = 1;
    let anterior = 0;
    for (let i = 0; i <= number; i += 1) {
        atual += anterior;
        results.push(anterior);
        anterior = atual - anterior;
    }
    return results.map((number) => 
        `
            <p>
                ${number}
            </p>
        `
    );
}

const elementForShowResultQuestionFour = document.querySelector('.resultado-questao-4');
fibonacci(100).forEach((item) => elementForShowResultQuestionFour.innerHTML += item);

// Questao 5

function showAllPrimeNumberUpToAThousand() {
    const numbers = [];

    const isPrime = (number) => {
        let dividers = 0;
        for(let i = 0; i <= number; i++) {
            if( number % i === 0 ) dividers++;
        }
        return dividers;
    } 

    for(let i = 2; i <= 1000; i++) {
        if( isPrime(i) === 2 ) numbers.push(i);    
    }

    return numbers.map((number) => 
        `
            <p>
                ${number}
            </p>
        `
    );
}

const elementForShowResultQuestionFive = document.querySelector('.resultado-questao-5');
showAllPrimeNumberUpToAThousand().forEach((item) => elementForShowResultQuestionFive.innerHTML += item);
