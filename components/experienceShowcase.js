class ExperienceShowcase extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.classList.add("experience");
        this.innerHTML = `
            <div class="experience-header">
                <img class="experience-logo" src="${this.getAttribute('logo')}" alt="${this.getAttribute('title')}">
                <h3 class="experience-title">${this.getAttribute('title')}</h3>
                <h3 class="experience-date">${this.getAttribute('date')}</h3>
            </div>
            <div class="experience-line"></div>
            <p class="experience-description">${this.getAttribute('description')}</p>
        `;

        // Link stylesheet
        const cssPath = './components/experienceShowcase.css';
        if (!document.querySelector(`link[href="${cssPath}"]`))
        {
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = cssPath;
            document.head.appendChild(style);
        }
    }
}
  
customElements.define('experience-showcase', ExperienceShowcase);