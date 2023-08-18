class ProjectShowcase extends HTMLElement {

    constructor() {
        super();
    }

    setMediaShowcase(media) {
        var showcase = this.querySelector('.project-media-showcase-container');
        if (media["type"] == "video")
        showcase.innerHTML = `<video class="project-media-showcase" src="${media["src"]}" alt="Project Video" autoplay loop muted></video>`;
        else
            showcase.innerHTML = `<img class="project-media-showcase" src="${media["src"]}" alt="Project Image">`;
    }

    connectedCallback() {

        // Generate buttons from links  
        var linksJSON = this.getAttribute('links');
        var links = linksJSON ? Object.entries(JSON.parse(linksJSON)).map(([key, value]) => value) : [];
        var linksHTML = '';
        for (const link of links)
            linksHTML += `<icon-button class="project-info-links-item" name="${link.name}" link="${link.url}" icon="${link.icon}"></icon-button>`;

        this.classList.add("project");
        this.innerHTML = `
        <div class="project-header">
            <h2 class="project-header-name">${this.getAttribute('name')}</h2>
            <h4 class="project-header-subname">${this.getAttribute('summary')}</h3>
        </div>
        <svg class="project-divider" viewBox="0 0 1 1" preserveAspectRatio="none">
            <rect width="1" height="1"/>
        </svg>
        <div class="project-media">
            <div class="project-media-showcase-container"></div>
            <div class="project-media-list"></div>
        </div>
        <div class="project-info">
            <p class="project-info-description">${this.getAttribute('description')}</p>
            <div class="project-info-links">
                ${linksHTML}
            </div>
        </div>
        `;

        // Generate media list items
        var mediasJSON = this.getAttribute('media');
        this.medias = mediasJSON ? JSON.parse(mediasJSON) : [];
        var mediaList = this.querySelector('.project-media-list');
        for (const media of this.medias){
            var mediaListItem = document.createElement('div');
            mediaListItem.classList.add('project-media-list-item');

            // Set thumbnail
            var thumbnail = document.createElement('img');
            thumbnail.src = media["thumbnail"];
            thumbnail.alt = "Project Image";
            thumbnail.classList.add('project-media-list-item-thumbnail');
            thumbnail.onclick = () => this.setMediaShowcase(media);
            mediaListItem.appendChild(thumbnail);

            // Set play icon
            if (media["type"] == "video")
            {
                var playIcon = document.createElement('img');
                playIcon.src = "./media/icons/play.png";
                playIcon.alt = "Play Icon";
                playIcon.classList.add('project-media-list-item-playicon');
                mediaListItem.appendChild(playIcon);
            }

            // Add to list
            mediaList.appendChild(mediaListItem);
        }


        // Set first media as showcase
        this.setMediaShowcase(this.medias[0]);

        // Link stylesheet
        const cssPath = './components/projectShowcase.css';
        if (!document.querySelector(`link[href="${cssPath}"]`))
        {
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = cssPath;
            document.head.appendChild(style);
        }
    }


}
  
customElements.define('project-showcase', ProjectShowcase);