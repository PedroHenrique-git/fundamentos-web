(async function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');

    const controlFadeInOutMenuMobile = () => {
        const menu = document.querySelector('.mobile-menu');
        const hasHideClass = menu.classList.contains('hide-menu');

        if( hasHideClass ) {
            menu.classList.remove('hide-menu');
            menu.classList.add('show-menu');    
        } else {
            menu.classList.remove('show-menu');
            menu.classList.add('hide-menu');    
        }
    };
    
    menuToggle.addEventListener('click', controlFadeInOutMenuMobile);
})();