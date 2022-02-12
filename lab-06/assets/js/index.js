$(document).ready(() => {
    const API_URL = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";

    const returnClassOfClassification = (classificationNumber) => {
        const classificationClasses = {
            '0': 'green',
            '10': 'blue',
            '12': 'yellow',
            '14': 'orange',
            '16': 'red',
            '18': 'black'
        };
        
        return classificationClasses[classificationNumber];
    }

    const generateRatingStars = (rating) => {
        let finalString = '';
        for(let i = 1; i <= 5; i++) {
            finalString += i > rating ? '&#9734;' : '&#9733;';   
        }
        return `<span class="stars">${finalString}</span>`;
    };

    const mountHtml = (films) => {
        const wrap = $('.films-cards');

        const htmlString = films.map((film) => (`
            <div class="film-wrap">
                <h3 class="title">
                    ${film.titulo}
                </h3>
                <div class="film-image-wrap">
                    <img src="${film.figura}" alt="${film.titulo}" />
                </div>
                <div class="film-infos-wrap">
                    <p>
                        Classificação indicativa:
                        <span class="classification ${returnClassOfClassification(film.classificacao)}">
                            ${film.classificacao}
                        </span>
                    </p>
                    <p>
                        ${film.resumo}
                    </p>
                    <ul class="film-genres">
                        <li>Genêros: </li>
                        ${film.generos.map((genre) => `<li>${genre}</li>`).join('')}
                    </ul>
                    <ul class="film-cats">
                        <li>Elenco: </li>
                        ${film.elenco.map((cast) => `<li>${cast}</li>`).join('')}
                    </ul>
                    <ul class="film-opinions">
                        <li>Opiniões: </li>
                        ${film.opinioes.map((opinion) => 
                            `
                            <li class="starts-container">
                                <p>Avaliação: ${generateRatingStars(opinion.rating)}</p>
                                <p>${opinion.descricao} </p>
                            </li>
                            `
                        ).join('')}
                    </ul>
                </div>
            </div>      
        `)).join('');

        wrap.html(htmlString);
    };


    $.get(API_URL).done((films) => mountHtml(films));
});