class IconButton extends HTMLElement {
    constructor() {
        super();
    }

    onresize() {
        this.style.height = this.offsetWidth * 0.225 + 'px';
        this.style.padding = this.offsetWidth * 0.03 + 'px';
        this.style.gap = this.offsetWidth * 0.05 + 'px';
        this.buttonName.style.fontSize = this.hasSubname ? this.offsetWidth * 0.06 : this.offsetWidth * 0.075 + 'px';
        this.buttonSubname.style.fontSize = this.offsetWidth * 0.04 + 'px';
    }

    buttonName;
    hasSubname;
    buttonSubname;

    connectedCallback() {
        var color = this.getAttribute('color') || 'black';
        this.classList.add('icon-button');
        this.style.border = `3px solid ${color}`;
        this.onclick = () => {
            if (this.getAttribute('link').startsWith('http'))
               window.open(this.getAttribute('link'), '_blank');
            else
                window.location.href = this.getAttribute('link');
        }     

        this.innerHTML = `
        <img class="icon-button-icon" src="${this.getAttribute('icon')}" alt="${this.getAttribute('name')} Icon">
        <div class="icon-button-text" style="color: ${color};">
            <p class="icon-button-name">${this.getAttribute('name')}</p>
            <p class="icon-button-subname">${this.getAttribute('subname')}</p> 
        </div>
        `;

        this.buttonName = this.querySelector('.icon-button-name');
        this.buttonSubname = this.querySelector('.icon-button-subname');

        // Hide empty elements
        if (!this.getAttribute('name'))    this.buttonName.style.display = 'none';
        if (!this.getAttribute('subname')) this.buttonSubname.style.display = 'none';
        if (!this.getAttribute('icon'))    this.querySelector('.icon-button-icon').style.display = 'none';
        this.hasSubname = this.getAttribute('subname') != null;

        // Make name bold
        if (this.getAttribute('subname'))
            this.buttonName.style.fontWeight = 'bold';

        // Dynamic sizing
        new ResizeObserver(() => this.onresize()).observe(this);

        // Redirect to link
        var link = this.getAttribute('link');
        this.onclick = () => window.open(link, link.startsWith('http') ? '_blank' : '_self');

        // Link stylesheet
        const cssPath = './components/iconButton.css';
        if (!document.querySelector(`link[href="${cssPath}"]`))
        {
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = cssPath;
            document.head.appendChild(style);
        }
    }
}
  
customElements.define('icon-button', IconButton);