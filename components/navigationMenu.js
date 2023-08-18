class NavigationMenu extends HTMLElement {
    constructor() {
        super();
    }

    toggleDropdown() {
        const dropdown = this.querySelector('.dropdown-menu');
        dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'flex' : 'none';
    }

    connectedCallback() {
        const selectedButton = this.getAttribute('selected');
        this.classList.add("navigationMenu");
        var menu = `
        <a class="navigation-button ${selectedButton === 'projects'   ? ' navigation-button-selected' : ''}" href="./projects">Projects</a>
        <a class="navigation-button ${selectedButton === 'skills'     ? ' navigation-button-selected' : ''}" href="./skills">Skills</a>
        <a class="navigation-button ${selectedButton === 'experience' ? ' navigation-button-selected' : ''}" href="./experience">Experience</a>
        <a class="navigation-button ${selectedButton === 'contact'    ? ' navigation-button-selected' : ''}" href="./contact">Contact</a>
        `;

        this.innerHTML = `
            <div class="navigation-header">
                <a class="header-logo navigation-button ${selectedButton === 'index' ? ' navigation-button-selected' : ''}" href="/">MV</a>
                <svg class="dropdown-button" data-src="./media/icons/hamburger.svg" data-cache="disabled" onclick="document.querySelector('navigation-menu').toggleDropdown()"/>
                <div class="header-menu">${menu}</div>
            </div>
            <div class="dropdown-menu">${menu}</div>
        `;

        // Link stylesheet
        const cssPath = './components/navigationMenu.css';
        if (!document.querySelector(`link[href="${cssPath}"]`))
        {
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = cssPath;
            document.head.appendChild(style);
        }
    }
}
  
customElements.define('navigation-menu', NavigationMenu);