// Assaigning variable for header sticky change
let header = document.querySelector('header')

// If scrolling down is greater than 0 class of sticky is assaigned to header
window.addEventListener('scroll',  function() {
    header.classList.toggle('sticky', window.scrollY > 0)
})

// Assigning variables for hidden search bar
const search = document.querySelector('.form')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// When the btn search bar is hovered .active is added
btn && search.addEventListener('mouseover', () => {
    search.classList.add('active')
    input.focus()
})

// When the btn search bar is hovered out .active is removed
btn && search.addEventListener('mouseout', () => {
    search.classList.remove('active')
})

// Initialising variables
const panels = document.querySelectorAll('.panel')


// When clicking it runs the function of removeActiveClasses and adds active to the one thats clicked
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// Remove active from classes function
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}

// SEARCH FEATURE
const API_URL = 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=3b133ed213157cb587b14c2fcc214a4b&page=1'
// If you put in the above URL in chrome there's an empty image if you start reading it looks like this \/ so the next const gets the images but doesn't end in a / because it already has one
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// Ends in a single quote as I want to concatenate something from the search bar into the page because initially its just the api_url but after searching I want whatever is searched
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3b133ed213157cb587b14c2fcc214a4b&query="'

const main = document.getElementById('main')
const searchBar = document.getElementById('form')
const searchInput = document.getElementById('input')


// Get initial movies
getMovies(API_URL)

async function getMovies(url){
    const response = await fetch(url)
    const data = await response.json()

    showMovies(data.results)
}

function showMovies(movies){
    // Clears the movies that are already on the screen
    main.innerHTML = ''

    movies.forEach((movie) => {
        // This is called de-scructuring it basically pulls data out of the object and can then be asigned to something else e.g here movie will equal to all of that data
        const { title, poster_path, vote_average, overview } = movie

        const movieEL = document.createElement('div')
        movieEL.classList.add('movie')

        movieEL.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            <div class="overviewText">${overview}</div>
        </div>
    `

    main.appendChild(movieEL)
    });
}

// Gets the ratings and returns a colour based on score to be put in the span above^^^
function getClassByRate(vote){
    if(vote >= 8){
        return 'green'
    } else if(vote >= 5){
        return 'orange'
    } else{
        return 'red'
    }
}

searchBar.addEventListener('submit', (e) => {
    // So it does'nt submit to the page
    e.preventDefault()

    // Want to get the value because it's an input so we can put it in a variable
    const searchTerm = searchInput.value

    // if searchTerm exists and if searchterm doesnt equal to nothing run getMovies otherwise if submitting with nothing in just reload the page
    if(searchTerm && searchTerm !== ''){
        // Whatever is put into the searchTerm gets concatenated onto the API
        getMovies(SEARCH_API + searchTerm)

        searchInput.value = ''
    } else{
        window.location.reload()
    }
})