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
