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

suggested.addEventListener('click', () => {
  removeCurrentDetails()

  container.innerHTML = `
  <div class="swiper-container">
  <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../images/blackPanther.jpg" width="100%" height="100%"></div>
      <div class="swiper-slide"><img src="../images/scottPilgrim.jpg" width="100%" height="100%"></div>
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
  
  <div class="swiper-pagination"></div>
  
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div> 
  `
})

extras.addEventListener('click', () => {
  removeCurrentDetails()

  container.innerHTML =`
  <div class="wrapper">

      <section id="section1">
          <a href="#section3" class="arrow__btn">‹</a>
          <div class="item">
              <img src="https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp" alt="Describe Image">
          </div>

          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg" alt="Describe Image">
          </div>

          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp" alt="Describe Image">
          </div>

          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdYtAqj8CyaJTWq5taD8Ro_UgwH3nne9QpFGVps-2J3IG-leqrfqXFii4jzZn48nPYTkrlwKQEV0R7_cEKlYBPRzdKqNODc-Oz26IL3LlLgFboXibIWXwxzeYxzuqn0I9TpARjeByw.jpg" alt="Describe Image">
          </div>

          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbcCX42tsqGbBvO2y9CQv5-7QvYbCfoHtXsuc6NPCtZaKa4l4fBX3XWvUwG9F2A3CTsNpHVmulxBbdXKwK8Q6xGjejd9FoadGkZ7CnGrSl601TOQjzSHJ23NuIPC8j0QMGORL4uRIA.jpg" alt="Describe Image">
          </div>
          
            <a href="#section2" class="arrow__btn">›</a>
          </section>

          <section id="section2">
            <a href="#section1" class="arrow__btn">‹</a>

          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVopDZ5Fy9_fk_HO5WxHTXKKjKhtWFupbSjuvPwfLK_vytzon4EwRUdGgYJ34JwPxOTK_NkV3aXfkULMB0Dcct-FyfqzH-X44VXuRMp4QeBHlvKwWeZFpZlGdItPzmmg4scmwhG7SQ.jpg" alt="Describe Image">
          </div>

          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABTOj1-116yVcgKWMU2dI3GFR4x0fSkiGsqtLLeLUxRR7STaksjAqBTrYlTfrB8nIGnGvXksi0ewXAhVGg6-pLxpFOIfcpjK-pf8D5xehFZo5a6vJbo4L0AGbrzglbyUoq255QBJgRQ.jpg" alt="Describe Image">
          </div>

          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABd3IBDpxbRcHXvRMFCZeKa2aHLU1P4SJtrACMS9om3yhLjqPlvNlmR_fypPxjtbsbnKaC4JZhPSpDG4r_kdxSHHAltWguMcCB-1Y1OShr2zWfUv7Whf_39fNH5ZJ3_0gxQrs0akmQjQz44_LT7jXH5LMZ7iMBAzac5IEj4m7Fn_5OWEGYnVsDsKG-QTommDooULMDF9bEw.jpg" alt="Describe Image">
          </div>
          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABXSd7bhDddcwkq9XpksoQFCHVx29Sxl_h4hb2n3F2GIt32a4XWcOnctQfgnT5qdolv8UML6_xNB5CJ89h56wueb13mYmEBr0sx5e9iLPdtVcOQAOmKXKWHHXwFvJuCUwuNnL3s8eAQwqLXPVMHMEsujM684rUGrZNF2btN2GRy5-RyEslsxZO93V2Q_H2bWs8A8oayt1h5M.webp" alt="Describe Image">
          </div>
          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABbXWODpAWqVXcmmjMA7K-2mPkQpvwCLfSdeyhVXzR8A3MSpdSEnnjf4HEJJTYC-TnktU6njTUGAxmzWEYCaJbk4v_ZeL-7QGzmkvYBjg_N-evr2XmcX-Fanoyvu_nimFP4iigPe4O3Vr_WcgplhwkDrJwPUJa84wRLrNAx3TufN5V7cWRP4indqu5HQahvgFEqfL9zjp4g.jpg" alt="Describe Image">
          </div>
            <a href="#section3" class="arrow__btn">›</a>
          </section>

          <section id="section3">
            <a href="#section2" class="arrow__btn">‹</a>

          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRr4YxdaABuAuH_3FmSQZn7BCvLp-UUPsXE9MiYpvFP3CSUHV2zOew5oVqKqqdaOd3tbFVS0Uf67uIs7_eZydlCghg4nK0nMatRpPImABwTOhnNzCLCxdKrua7pPIcPCZqBYTeAO5g.jpg" alt="Describe Image">
          </div>

          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABTyWK1MKaw8GcObtz47R2Tj7wkLJ7qQu9tk6TVpcoyxpzD4B-zZ569bQ5vGrREBL-MWFkGilXUwy7tCDaj2XOGkUB4RsbbFAmp9NgSr6lygMpUGNHSlyfrFbUORsRkrxSIoh_ggOvg.jpg" alt="Describe Image">
          </div>

          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABY7NwkWEJIfXsn6t3Li4bGSCQ1nEErPisI5ZZtXlC-_VRBZOUrhWK5X3vt3t6SR_cpgVhCwxgQqFFDJhk62Kk8hawOnYGZMr0LKeLczMFV2zalCFjkcdLksvT4HB2LEi6LFyruyk3Uu0LmNGsHfC2A8Bly60smr_3sDbz4RruXcklPOG1qYq9wUVu3zfaiwNvqmG4b8aFA.jpg" alt="Describe Image">
          </div>
          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABemXHOga9feFnOux6I2YyACBD94wvM7N3vcTGIfMpQ_BcaXeoeM9XyzdVdamKtxt0SHXZfvsl6czcp3E48tXMLtHBxuQsh1BjHtPGgJDZ81je_FjItINiqzLtir0A30s_e4KR8G3d7AYAPDjZVOY97bNpzNqtkcHcGp7fGnJByVCps1uLfG9U9tK3Ma1A_3JbRt0NiT2_Q.jpg" alt="Describe Image">
          </div>
          <div class="item">
              <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABVxuRB932hvre-XP0gh6ar5ztoR3Oe3QjKHkyvcDnRak2MKXOrx5H7mFQSvggefMFOppwEs7ZCCpiqrJ_CYGvtvYB9NpU4SWUtNO6uV2u-DTID267AcHjHcGvGBQJ1ufddDkxcGOZyi5MlOQ5QUmBun4652FbYUnib3zMYQDgcna_Pvz8y_HO5fbokxezrRR1JZAAiqFSQ.jpg" alt="Describe Image">
          </div>
            <a href="#section1" class="arrow__btn">›</a>
          </section>
        </div>
                          
  `
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




// A function which will remove whatever is in the info-container so a new thing can be added depending on what's been clicked
function removeCurrentDetails(params) {
  container.innerHTML = ''
}