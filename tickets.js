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

btn && search.addEventListener('click', () => {
    search.classList.add('active')
    input.focus()
})




// Change ticket info

const priceContainer = document.querySelector('.priceContainer')
const ticketContainer = document.querySelector('.container')

function fast9() {
    priceContainer.innerHTML = ``
    priceContainer.innerHTML = `
    <img src="../images/fast9logo.png" class="filmLogo">

    <p class="text">You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span></p>
    `
}

function ghostbusters() {
    priceContainer.innerHTML = ``
    priceContainer.innerHTML = `
    <img src="../images/ghostbustersAftlerlifeLogo.png" class="filmLogo">

    <p class="text">You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span></p>
    `
}

function blackWidow() {
    priceContainer.innerHTML = ``
    priceContainer.innerHTML = `
    <img src="../images/Black-Widow-logo.png" class="filmLogo">

    <p class="text">You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span></p>
    `
}

const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

populateUI()

let ticketPrice = +movieSelect.value

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

// Update total and count
function updateSelectedCountAndTotal() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    // Copy selected seats into array
    // Map through array
    // Return a new array of indexes
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats',  JSON.stringify(seatsIndex))

    const selectedSeatsCount = selectedSeats.length

    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}

// Get data from localStorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            // Using greater than -1 as when using indexOf if you're checking for something within an array and it's not in there it'll return -1 (arrays 0 based)
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex
    }
}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCountAndTotal()
    if (ticketPrice === 12) {
        console.log('THIS IS THE WAY TO CHANGE I GUESS');
        ghostbusters()
    } else if (ticketPrice === 10) {
        fast9()
        console.log('hiya');
    } else{
        blackWidow()
        console.log('boo');
    } 
})

// Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')

        updateSelectedCountAndTotal()
    }
})

// Initial count and total set
updateSelectedCountAndTotal()