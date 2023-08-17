class IconButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="contact-button" onclick="window.location.href='${this.getAttribute('link')}'" style="border: 3px solid ${this.getAttribute('color') || 'black'};">
            <img class="contact-button-icon" src="${this.getAttribute('icon')}" alt="${this.getAttribute('name')} Icon">
            <div class="contact-button-text" style="color: ${this.getAttribute('color') || 'black'};">
                <p class="contact-button-platform">${this.getAttribute('platform')}</p>
                <p class="contact-button-username">${this.getAttribute('username')}</p> 
            </div>
        </div>
        `;

        // Link stylesheet
        const cssPath = './components/contactButton.css';
        if (!document.querySelector(`link[href="${cssPath}"]`))
        {
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = cssPath;
            document.head.appendChild(style);
        }
    }
}
  
customElements.define('contact-button', IconButton);