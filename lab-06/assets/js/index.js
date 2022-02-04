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

    const createFilmCards = async () => {
        const films = await fetchJson('https://rafaelescalfoni.github.io/desenv_web/filmes.json');

        const filmsCardsHtml = films.map((film) => (`
            <div class="film-wrap">
                <h1>
                    ${film.titulo} ${film.classificacao}
                </h1>
                <div class="film-image-wrap">
                    <img src="${film.figura}" alt="${film.titulo}" />
                </div>
                <div class="film-infos-wrap">
                    <p>${film.resumo}</p>
                    <ul class="film-genres">
                        ${film.generos.map((genre) => `<li>${genre}</li>`).join('')}
                    </ul>
                    <ul class="film-cats">
                        ${film.elenco.map((cast) => `<li>${cast}</li>`).join('')}
                    </ul>
                    <ul class="film-opinions">
                        ${film.opinioes.map((opinion) => 
                            `
                            <li>
                                Avaliação: ${opinion.rating}
                                Avaliação descrição: ${opinion.descricao} 
                            </li>
                            `
                        ).join('')}
                    </ul>
                </div>
            </div>
        `));

        return filmsCardsHtml.join('');
    };

    const injectFilmsCardsInDOM = async () => {
        const wrap = document.querySelector('.films-cards');
        wrap.innerHTML = await createFilmCards();   
    };

    injectFilmsCardsInDOM();
})();