class SkillShowcase extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.classList.add("skill");
        this.innerHTML = `
        <img class="skill-icon" src=${this.getAttribute('icon')} alt="${this.getAttribute('name')} Icon">
        <h3 class="skill-name">${this.getAttribute('name')}</h3>
        <div class="skill-line"></div>
        <p class="skill-description">${this.getAttribute('description')}</p> 
        `;

        // Link stylesheet
        const cssPath = './components/skillShowcase.css';
        if (!document.querySelector(`link[href="${cssPath}"]`))
        {
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = cssPath;
            document.head.appendChild(style);
        }
    }
}
  
customElements.define('skill-showcase', SkillShowcase);