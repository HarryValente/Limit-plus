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

const suggested = document.getElementById('suggested')
const extras = document.getElementById('extras')
const details = document.getElementById('details')
const container = document.querySelector('.info-container')
const swipe = document.createElement('div')

swipe.classList.add('test')

suggested.addEventListener('click', () => {
  removeCurrentDetails()

  container.innerHTML = `<div class="swiper-container">

  <div class="swiper-content">
      <div class="swiper-slide"><img src="../images/scottPilgrim.jpg" width="100%" height="100%"></div>
      <div class="swiper-slide"><img src="../images/blackPanther.jpg" width="100%" height="100%"></div>
      <div class="swiper-slide"><img src="../images/antmanWasp.jpg" width="100%" height="100%"></div>
      <div class="swiper-slide"><img src="../images/guardiansOfTheGalaxy.jpeg" width="100%" height="100%"></div>
      <div class="swiper-slide"><img src="../images/21JumpStreet.jpg" width="100%" height="100%"></div>
      <div class="swiper-slide"><img src="../images/wonderWoman84.jpg" width="100%" height="100%"></div>
      <div class="swiper-slide"><img src="../images/kongSkullIsland.jpg" width="100%" height="100%"></div>
      <div class="swiper-slide"><img src="../images/suicideSquad.jpeg" width="100%" height="100%"></div>
      <div class="swiper-slide"><img src="../images/spidermanFarFromHome.png" width="100%" height="100%"></div>
      <div class="swiper-slide"><img src="../images/darkKnightRises.jpg" width="100%" height="100%"></div>
      <div class="swiper-slide"><img src="../images/doctorStrange.jpg" width="100%" height="100%"></div>
      <div class="swiper-slide"><img src="../images/aquaman.jpg" width="100%" height="100%"></div>
  </div>

  <button class="slide left"><i class="fas fa-chevron-left"></i></button>
  <button class="slide right"><i class="fas fa-chevron-right"></i></button>

</div>`

})

extras.addEventListener('click', () => {
  removeCurrentDetails()

  container.innerHTML = `<div class="swiper-container">

<div class="swiper-content">
    <div class="swiper-slide"><img src="../images/aquaman.jpg" width="100%" height="100%"></div>
    <div class="swiper-slide"><img src="../images/spidermanFarFromHome.png" width="100%" height="100%"></div>
    <div class="swiper-slide"><img src="../images/darkKnightRises.jpg" width="100%" height="100%"></div>
    <div class="swiper-slide"><img src="../images/doctorStrange.jpg" width="100%" height="100%"></div>
    <div class="swiper-slide"><img src="../images/scottPilgrim.jpg" width="100%" height="100%"></div>
    <div class="swiper-slide"><img src="../images/blackPanther.jpg" width="100%" height="100%"></div>
    <div class="swiper-slide"><img src="../images/antmanWasp.jpg" width="100%" height="100%"></div>
    <div class="swiper-slide"><img src="../images/guardiansOfTheGalaxy.jpeg" width="100%" height="100%"></div>
    <div class="swiper-slide"><img src="../images/21JumpStreet.jpg" width="100%" height="100%"></div>
    <div class="swiper-slide"><img src="../images/wonderWoman84.jpg" width="100%" height="100%"></div>
    <div class="swiper-slide"><img src="../images/kongSkullIsland.jpg" width="100%" height="100%"></div>
    <div class="swiper-slide"><img src="../images/suicideSquad.jpeg" width="100%" height="100%"></div>
</div>

<button class="slide left"><i class="fas fa-chevron-left"></i></button>
<button class="slide right"><i class="fas fa-chevron-right"></i></button>

</div>`

})

details.addEventListener('click', () => {
  removeCurrentDetails()

  container.innerHTML = `
    <div class="details-container">

        <div class="details-description">
            <h1 class="details-header">Marvel Studio's Captain Marvel</h1>
              <p class="details-des">Marvel Studios' Captain Marvel takes you on a spectacular adventure from the 1990s,  tracing the path of Carol Denvers (Brie Larson) as she becomes one of the universe's most powerful heroes. When galactic war reaches Earth, she meets young agent Nick Fury (Samuel L. Jackson) at the center of a maelstrom, leading to her ultimate destiny as an Avenger!</p>
        </div>

      <div class="other-details">

        <div class="other-info">

          <ul class="film-info">
              <li>Duration:</li>
              <li>2h 5m</li>
              <li>Release Date:</li>
              <li>2019</li>
              <li>Genre:</li>
              <li>Science-Fiction, <br>Action-Adventure</li>
              <li>Rating:</li>
              <li>12+</li>
          </ul>

          <ul class="actors">
              <li>Director:</li>
              <li>Anna Boden, Ryan Fleck</li>
              <li>Starring:</li>
              <li>Brie Larson</li>
              <li>Samuel L. Jackson</li>
              <li>Ben Mendelsohn</li>
              <li>Djimon Hounsou</li>
              <li>Lee Pace</li>
              <li>Lashana Lynch</li>
          </ul>

        </div>

      </div>

    </div> 
  `
})



function removeCurrentDetails(params) {
  container.innerHTML = ''
}

const rightBtn = document.querySelector('.right')
const leftBtn = document.querySelector('.left')
const slider = document.querySelectorAll('.swiper-slide')
const sliderContent = document.querySelector('.swiper-content')

rightBtn.addEventListener('click', () => {
  
  slider.style.transform = "translateX(-300px)"
  
})

leftBtn.addEventListener('click', () => {
  console.log('left');
})

