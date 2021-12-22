export {Playlist, Music};


// get the sections HTML elements .... to fix for V2
const mainSection = document.querySelector('#main');
const playListSection = document.querySelector('#playlist');

/**
 * Création d'un objet Playlist
 */

class Playlist {


    /**
     * @constructor
     * @param name
     * @param style
     */

    constructor(name, style) {
        this.name = name;
        this.style = style;
        this.musics = [];
    }


    /**
     * @method drawAll , used to draw all the content of a playlist
     * @param targetElem
     */

    drawAll(targetElem) {
        this.playlistDiv = document.createElement("div");
        this.playlistDiv.id = "playlistDiv";
        targetElem.appendChild(this.playlistDiv);

        this.setMusicDiv = document.createElement("div");
        this.playlistDiv.appendChild(this.setMusicDiv);

        this.musicTitleDiv = document.createElement("div");
        this.musicTitleInputLabel = document.createElement("label");
        this.musicTitleInputLabel.innerHTML = "Titre :";
        this.musicTitleDiv.appendChild(this.musicTitleInputLabel);
        this.musicTitleInput = document.createElement("input");
        this.musicTitleDiv.appendChild(this.musicTitleInput);
        this.setMusicDiv.appendChild(this.musicTitleDiv);

        this.musicArtistDiv = document.createElement("div");
        this.musicArtistInputLabel = document.createElement("label");
        this.musicArtistInputLabel.innerHTML = "Artiste :";
        this.musicArtistDiv.appendChild(this.musicArtistInputLabel);
        this.musicArtistInput = document.createElement("input");
        this.musicArtistDiv.appendChild(this.musicArtistInput);
        this.setMusicDiv.appendChild(this.musicArtistDiv);

        this.musicYtLinkdiv = document.createElement("div");
        this.musicYtLinkInputLabel = document.createElement("label");
        this.musicYtLinkInputLabel.innerHTML = "Lien Youtube : ";
        this.musicYtLinkdiv.appendChild(this.musicYtLinkInputLabel);
        this.musicYtLinkInput = document.createElement("input");
        this.musicYtLinkdiv.appendChild(this.musicYtLinkInput)
        this.setMusicDiv.appendChild(this.musicYtLinkdiv);

        this.validMusicBtn = document.createElement("button");
        this.validMusicBtn.innerHTML = "Ajouter la musique";
        this.setMusicDiv.appendChild(this.validMusicBtn);
        this.validMusicBtn.addEventListener("click", () => {
            this.setMusic(this.musicTitleInput.value,this.musicArtistInput.value, this.musicYtLinkInput.value)
            this.musicDiv.remove()
            this.drawAllMusics()
        })

        this.hName = document.createElement('h1');
        this.hName.innerHTML = this.name;
        this.playlistDiv.appendChild(this.hName);

        this.hStyle = document.createElement('h2');
        this.hStyle.innerHTML = this.style;
        this.playlistDiv.appendChild(this.hStyle);

        this.drawAllMusics()
    }


    /**
     * @method drawAllMusics used in drawAll and in the add music event listener to draw all the musics
     */

    drawAllMusics () {
        this.musicDiv = document.createElement('div');
        this.musicDiv.innerHTML = ""
        for (let music of this.musics) {
            music.draw(this.musicDiv)
            console.log(music)
        }
        this.playlistDiv.appendChild(this.musicDiv);
    }


    /**
     * @method drawOverview used to draw an overview of the playlist in the main page
     * @param targetElem
     */

    drawOverview(targetElem) {
        this.playlistDiv = document.createElement("div");
        this.playlistDiv.classList = "playlistsOverviewDiv";
        targetElem.appendChild(this.playlistDiv);

        this.hName = document.createElement('h1');
        this.hName.innerHTML = this.name;
        this.playlistDiv.appendChild(this.hName);
        this.hName.addEventListener("click", () => {
            mainSection.style.display = "none";
            playListSection.style.display = "block";
            this.drawAll(playListSection);
        })

        this.hStyle = document.createElement('h2');
        this.hStyle.innerHTML = this.style;
        this.playlistDiv.appendChild(this.hStyle);

        this.ulMusics = document.createElement('ul');
        for (let i = 0; i < 3; i++) {
            if (this.musics[i]) {
                this.li = document.createElement("li");
                this.li.innerHTML = this.musics[i].title;
                this.ulMusics.appendChild(this.li);
            }
        }
        this.playlistDiv.appendChild(this.ulMusics);
    }


    /**
     * @method setMusic used to create a music on the add music eventlistener
     * @param title
     * @param artist
     * @param ytLink
     */

    setMusic(title, artist, ytLink) {
        this.music = new Music(title, artist, ytLink);
        this.musics.push(this.music);
    }
}






/**
 * Création d'un objet Music
 */

class Music {


    /**
     * @constructor
     * @param title
     * @param artist
     * @param ytLink
     */

    constructor(title, artist, ytLink) {
        this.title = title;
        this.artist = artist;
        this.ytLink = ytLink;
    }


    /**
     * @method used to draw one music on the playlist drawAll method
     * @param targetElem
     */

    draw(targetElem) {
        this.musicDiv = document.createElement('div');
        this.musicDiv.classList = "music";

        this.titleP = document.createElement("p");
        this.titleP.innerHTML = this.title;
        this.musicDiv.appendChild(this.titleP);

        this.artistP = document.createElement("p");
        this.artistP.innerHTML = this.artist;
        this.musicDiv.appendChild(this.artistP);

        this.ytLinkP = document.createElement("p");
        this.ytLinkP.innerHTML = `<a href="` + this.ytLink + `">Youtube</a>`;
        this.musicDiv.appendChild(this.ytLinkP);

        targetElem.appendChild(this.musicDiv);
    }
}
