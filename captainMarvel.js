// Assaigning variable for header sticky change
let header = document.querySelector('header')

// If scrolling down is greater than 0 class of sticky is assaigned to header
window.addEventListener('scroll',  function() {
    header.classList.toggle('sticky', window.scrollY > 0)
})

// Initialise the video variables
let video = document.querySelector('.Marvel')
let cross = document.querySelector('.fa-times')
let playBtn = document.querySelector('.playBtn')

// When the play btn is clicked the video is shown
playBtn.addEventListener('click', () => {
  video.classList.add('show')
  cross.classList.add('show')
})

// When the cross btn is clicked the video is removed
cross.addEventListener('click', () => {
  video.classList.remove('show')
  cross.classList.remove('show')
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

const suggested = document.getElementById('suggested')
const extras = document.getElementById('extras')
const details = document.getElementById('details')
const container = document.querySelector('.info-container')
const swipe = document.createElement('div')

swipe.classList.add('test')

suggested.addEventListener('click', () => {
  removeCurrentDetails()

  container.innerHTML = `<div class="slider-container">
                        
                            
    <span><i class="fas fa-chevron-left"></i></span>
    <span><i class="fas fa-chevron-right"></i></span>
    

  <section>
    <div class="product">                     
        <img src="../images/21JumpStreet.jpg" alt="">                                
    </div>

    <div class="product">                       
        <img src="../images/antmanWasp.jpg" alt="">                     
    </div>

    <div class="product">                    
        <img src="../images/blackPanther.jpg" alt="">                           
    </div>

    <div class="product">                        
        <img src="../images/darkKnightRises.jpg" alt="">                              
    </div>

    <div class="product">                     
        <img src="../images/doctorStrange.jpg" alt="">                             
    </div>

    <div class="product">                        
        <img src="../images/guardiansOfTheGalaxy.jpeg" alt="">                               
    </div>

    <div class="product">                      
        <img src="../images/kongSkullIsland.jpg" alt="">                         
    </div>

    <div class="product">                          
        <img src="../images/spidermanFarFromHome.png" alt="">                         
    </div>

    <div class="product">                          
        <img src="../images/suicideSquad.jpeg" alt="">                          
    </div>

    <div class="product">                            
        <img src="../images/wonderWoman84.jpg" alt="">                               
    </div>

    <div class="product">                      
        <img src="../images/scottPilgrim.jpg" alt="">
    </div>

    <div class="product">
        <img src="../images/aquaman.jpg" alt="">                            
    </div>

  </section>
  </div>

  
`

// There is a scope issue so because this is within the local scope this code has to be run within the click event as the innerHTML isnt global

let span = document.getElementsByTagName('span')
let product = document.getElementsByClassName('product')
let product_page = Math.ceil(product.length/4)
let l = 0
let movePer = 25.34
let maxMove = 203

// Mobile view

let mobile_view = window.matchMedia("(max-width: 768px")
if(mobile_view.matches){
    movePer = 50.36
    maxMove = 504
}

// Right and left btn scroll

let right_mover = () => {
    l = l + movePer

    if(product == 1) {l = 0}

    for(const i of product) {
        if(l > maxMove) { l = l - movePer}
        i.style.left = '-' + l + '%'
    }
}

let left_mover = () =>{
    l = l - movePer
    if(l <= 0) {l = 0}

    for(const i of product) {
        if(product_page > 1)
        i.style.left = '-' + l + '%'
    }
}

// Run the left and right Btn and functions

span[1].onclick = () => {right_mover()}
span[0].onclick = () => {left_mover()}

})

extras.addEventListener('click', () => {
  removeCurrentDetails()

  container.innerHTML = `<div class="slider-container">
                        
                            
  <span><i class="fas fa-chevron-left"></i></span>
  <span><i class="fas fa-chevron-right"></i></span>
  

<section>
  <div class="product">                     
      <img src="../images/aquaman.jpg" alt="">                                
  </div>

  <div class="product">                       
      <img src="../images/suicideSquad.jpeg" alt="">                     
  </div>

  <div class="product">                    
      <img src="../images/scottPilgrim.jpg" alt="">                           
  </div>

  <div class="product">                        
      <img src="../images/guardiansOfTheGalaxy.jpeg" alt="">                              
  </div>

  <div class="product">                     
      <img src="../images/doctorStrange.jpg" alt="">                             
  </div>

  <div class="product">                        
      <img src="../images/21JumpStreet.jpg" alt="">                               
  </div>

  <div class="product">                      
      <img src="../images/kongSkullIsland.jpg" alt="">                         
  </div>

  <div class="product">                          
      <img src="../images/spidermanFarFromHome.png" alt="">                         
  </div>

  <div class="product">                          
      <img src="../images/antmanWasp.jpg" alt="">                          
  </div>

  <div class="product">                            
      <img src="../images/wonderWoman84.jpg" alt="">                               
  </div>

  <div class="product">                      
      <img src="../images/darkKnightRises.jpg" alt="">
  </div>

  <div class="product">
      <img src="../images/blackPanther.jpg" alt="">                            
  </div>

</section>
</div>
`
// There is a scope issue so because this is within the local scope this code has to be run within the click event as the innerHTML isnt global

let span = document.getElementsByTagName('span')
let product = document.getElementsByClassName('product')
let product_page = Math.ceil(product.length/4)
let l = 0
let movePer = 25.34
let maxMove = 203

// Mobile view

let mobile_view = window.matchMedia("(max-width: 768px")
if(mobile_view.matches){
    movePer = 50.36
    maxMove = 504
}

// Right and left btn scroll

let right_mover = () => {
    l = l + movePer

    if(product == 1) {l = 0}

    for(const i of product) {
        if(l > maxMove) { l = l - movePer}
        i.style.left = '-' + l + '%'
    }
}

let left_mover = () =>{
    l = l - movePer
    if(l <= 0) {l = 0}

    for(const i of product) {
        if(product_page > 1)
        i.style.left = '-' + l + '%'
    }
}

// Run the left and right Btn and functions

span[1].onclick = () => {right_mover()}
span[0].onclick = () => {left_mover()}

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

















// const rightBtn = document.querySelector('.right')
// const leftBtn = document.querySelector('.left')
// const slider = document.querySelectorAll('.swiper-slide')
// const sliderContent = document.querySelector('.swiper-content')

// rightBtn.addEventListener('click', () => {

//   slider.forEach(film => {

//     film.style.left = "-400px"
            
//         if(film.style.left = "-400px"){
//           film.style.left = "-800px"
//         }
//   })

//   // slider.forEach(film => {
//   //   film.style.transform = "translateX(-400px)"
//   // })

// })

// This is the function for the left and right buttons on the slider

let span = document.getElementsByTagName('span')
let product = document.getElementsByClassName('product')
let product_page = Math.ceil(product.length/4)
let l = 0
let movePer = 25.34
let maxMove = 203

// Mobile view

let mobile_view = window.matchMedia("(max-width: 768px")
if(mobile_view.matches){
    movePer = 50.36
    maxMove = 504
}

// Right and left btn scroll

let right_mover = () => {
    l = l + movePer

    if(product == 1) {l = 0}

    for(const i of product) {
        if(l > maxMove) { l = l - movePer}
        i.style.left = '-' + l + '%'
    }
}

let left_mover = () =>{
    l = l - movePer
    if(l <= 0) {l = 0}

    for(const i of product) {
        if(product_page > 1)
        i.style.left = '-' + l + '%'
    }
}

// Run the left and right Btn and functions

span[1].onclick = () => {right_mover()}
span[0].onclick = () => {left_mover()}




















// leftBtn.addEventListener('click', () => {

//   slider.forEach(film => {
//     film.style.transform = "translateX(300px)"
//   })
  
// })
