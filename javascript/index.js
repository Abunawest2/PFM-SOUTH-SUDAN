const openMenu = document.getElementById('menu-line');
const closeMenus = document.getElementById("mbar");
const hiddenMenu = document.getElementById('hidden-screen')
const backgroundColors = ['linear-gradient(rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5))', 'linear-gradient(rgba(0, 255, 115, 0.5), rgba(0, 255, 115, 0.5))', 'linear-gradient(rgba(50, 0, 50, 0.5), rgba(50, 0, 50, 0.5))', 'linear-gradient(rgba(255, 230, 50, 0.6), rgba(255, 230, 50, 0.6))']
const sectionHome = document.querySelector('.section-home');
const banner = document.querySelector('.banner');
const images = ['../images/banner.jpg', '../images/blacklogo.jpg', '../images/The-Unity.jpg']; // List of image URLs
let currentIndex = 0;
let index = 0

function closeMenu(){
    if (hiddenMenu.style.display='flex') {
        hiddenMenu.style.display='none'
    }
}

function displayMenu(){
    if (hiddenMenu.style.display='none') {
        hiddenMenu.style.display='flex'
    }
}


function changeBackgroundImage() {
    sectionHome.style.backgroundImage = backgroundColors[index];
    banner.style.backgroundImage = `linear-gradient(to top, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.7)), url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
    index = (index + 1) % backgroundColors.length;
}

function changeColors() {
    banner.style.color = `${colors[currentIndex]}`;
    sectionHome.style.color = `${colors[index]}`;
}

// Initial call to set the first image
changeBackgroundImage()
// Change the background image every 10 seconds
setInterval(changeBackgroundImage, 1000);// 20 seconds in milliseconds

changeColors()
// Change the background image every 10 seconds
setInterval(changeColors, 1000);