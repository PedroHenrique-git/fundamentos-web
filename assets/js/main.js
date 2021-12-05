(function() {
    const dropdownHeaders = document.querySelectorAll('.control-dropdown');

    const controlClasses = (dropdownContainer) => {
        const isOpen = dropdownContainer.classList.contains('show');

        const removeShowClass = () => dropdownContainer.classList.remove('show');
        const removeHideClass = () => dropdownContainer.classList.remove('hide');
        const addShowClass = () => dropdownContainer.classList.add('show');
        const addHideClass = () => dropdownContainer.classList.add('hide');

        if( isOpen ) {
            removeShowClass();
            addHideClass();
        } else {
            removeHideClass();
            addShowClass();
        }  
    }

    const controlFadeInOutDropdown = (header) => {
        const dropdownContainer = header.nextElementSibling;
        const hasDropdownClass = dropdownContainer.classList.contains('exercises-dropdown'); 
        if( dropdownContainer && hasDropdownClass ) controlClasses(dropdownContainer);
    };

    dropdownHeaders.forEach((header) => header.addEventListener('click', () => controlFadeInOutDropdown(header)));
})();