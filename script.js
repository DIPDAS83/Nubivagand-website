        // Wait for window load
        window.addEventListener('load', function() {
            // Simulate loading delay (remove this in production)
            setTimeout(function() {
                var loader = document.getElementById('loader');
                var content = document.getElementById('content');
                
                // Fade out loader
                loader.style.opacity = '0';
                
                // After fade out, hide loader and show content
                setTimeout(function() {
                    loader.style.display = 'none';
                    content.style.display = 'block';
                }, 500); // This should match the CSS transition time
            }, 1000); // Adjust this time as needed (2000 = 2 seconds)
        });

 
 // Mobile menu toggle
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');

 hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('active');
     navLinks.classList.toggle('active');
 });

 // Close mobile menu when clicking a link
 document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
         hamburger.classList.remove('active');
         navLinks.classList.remove('active');
     });
 });

// Slider
let slider = document.querySelector('.slider-container .slider');
let items = document.querySelectorAll('.slider-container .slider .slide');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider-container .slider-nav button');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider-container .slider-nav button.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


// client_slides
let currentIndex = 0;
const client_slides = document.querySelectorAll('.client-slide');

function showSlide(index) {
    client_slides.forEach((slide3, i) => {
        slide3.classList.remove('active');
        if (i === index) {
            slide3.classList.add('active');
        }
    });
    const offset = -index * 100;
    document.querySelector('.client-slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % client_slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + client_slides.length) % client_slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
showSlide(currentIndex); JavaScript