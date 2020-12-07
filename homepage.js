// Assaigning variable for header sticky change
let header = document.querySelector('header')

// If scrolling down is greater than 0 class of sticky is assaigned to header
window.addEventListener('scroll',  function() {
    header.classList.toggle('sticky', window.scrollY > 0)
})

// Assigning variables for hidden search bar
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// When the btn is clicked .active is added
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
