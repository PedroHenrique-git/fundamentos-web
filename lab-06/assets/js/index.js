(() => {
    const fetchJson = async (url) => {
        try {
            const request = await fetch(url);
            const response = await request.json();
            return response;
        }catch(err) {   
            console.log('Err: ' + err);
        }
    };

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

    const createComponent = (data, fn) => {
        if( Array.isArray(data) && data.length > 0 )
            return data.map((d) => fn(d)).join('');
        else
            return fn(data); 
    }

    const createFilmCards = async () => {
        const films = await fetchJson('https://rafaelescalfoni.github.io/desenv_web/filmes.json');

        const filmsCardsComponent = createComponent(films, (film) => `
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
                            <li>
                                <p>Avaliação: ${opinion.rating}</p>
                                <p>${opinion.descricao} </p>
                            </li>
                            `
                        ).join('')}
                    </ul>
                </div>
            </div>
        `);

        return filmsCardsComponent;
    };

    const injectFilmsCardsInDOM = async () => {
        const wrap = document.querySelector('.films-cards');
        const htmlFragment = document.createRange().createContextualFragment(await createFilmCards());
        wrap.append(htmlFragment);  
    };

    injectFilmsCardsInDOM();
})();