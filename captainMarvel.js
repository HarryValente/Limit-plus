// Assaigning variable for header sticky change
let header = document.querySelector('header')

// If scrolling down is greater than 0 class of sticky is assaigned to header
window.addEventListener('scroll',  function() {
    header.classList.toggle('sticky', window.scrollY > 0)
})

// Related underline decoration
let marker = document.getElementById('marker')
let item = document.querySelectorAll('.relatedList')

// A function which changes the left and width of the marker
function indicator(e) {
    marker.style.left = e.offsetLeft+"px"
    marker.style.width = e.offsetWidth+"px"
}

// When a link is clicked it runs the function above and fills in the "px's"
item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target)
    })
})

// Swiper.JS
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: { /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 1,
        spaceBetween: 20,
      },
      550: { /* when window >= 767px - webflow tablet */
        slidesPerView: 2,
        spaceBetween: 30,
      },
      850: { /* when window >= 988px - webflow desktop */
        slidesPerView: 3,
        spaceBetween: 40,
      }
    },
  });

  