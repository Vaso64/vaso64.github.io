class ExperienceShowcase extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.classList.add("experience");

        var logo;
        if (this.getAttribute('logo').endsWith('.svg'))
            logo = `<svg class="experience-logo" data-src="${this.getAttribute('logo')}" data-cache="disabled"></svg>`;
        else
            logo = `<img class="experience-logo" src="${this.getAttribute('logo')}" alt="${this.getAttribute('title')} logo">`;

        this.innerHTML = `
            <div class="experience-header">
                ${logo}
                <h3 class="experience-title">${this.getAttribute('title')}</h3>
                <h3 class="experience-date">${this.getAttribute('date')}</h3>
            </div>
            <svg class="experience-line" viewBox="0 0 1 1" preserveAspectRatio="none">
                <rect width="1" height="1"/>
            </svg>
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