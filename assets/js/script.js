import {Playlist} from "./playlist.js";

//Get all the Html elements i need

const playlistNameInput = document.querySelector('#playlistName');
const playlistStyleInput = document.querySelector('#playlistStyle');
const playlistValidBtn = document.querySelector('#playlistValid');
const playlistOverviewDiv = document.querySelector('#playlistOverview');
const mainSection = document.querySelector('#main');
const playListSection = document.querySelector('#playlist');
let backBtn = document.querySelector('#back');


// set a array to store all playlist

const playlistArray = [];


// add an event listener to create and draw new playlists

playlistValidBtn.addEventListener("click", () => {
    const playlist = new Playlist(playlistNameInput.value, playlistStyleInput.value)
    playlistArray.push(playlist)
    playlistOverviewDiv.innerHTML = ""
    for (let playlist of playlistArray) {
        playlist.drawOverview(playlistOverviewDiv)
    }
})


//add an event listener to come back to main page

backBtn.addEventListener('click', () => {
    document.querySelector('#playlistDiv').remove()
    const allOverview = document.querySelectorAll('.playlistsOverviewDiv')
    for (let overview of allOverview) {
        overview.remove()
    }
    playListSection.style.display = "none"
    for (let playlist of playlistArray) {
        playlist.drawOverview(playlistOverviewDiv)
    }
    mainSection.style.display = "block"
})
