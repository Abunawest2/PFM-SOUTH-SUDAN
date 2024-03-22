const openMenu = document.getElementById("menu-line");
const closeMenus = document.getElementById("mbar");
const hiddenMenu = document.getElementById('hidden-screen')

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

const banner = document.querySelector('.banner');
const images = ['../images/banner.jpg', '../images/blacklogo.jpg', '../images/The-Unity.jpg']; // List of image URLs
const colors = ['black', 'rgb(255, 215, 215)', 'blackrgb(175, 20, 0)']
let currentIndex = 0;

function changeBackgroundImage() {
    banner.style.color = `${colors[currentIndex]}`;
    banner.style.backgroundImage = `linear-gradient(to top, rgba(255, 0, 50, 0.1), rgba(255, 0, 50, 0.7)), url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % colors.length;
    currentIndex = (currentIndex + 1) % images.length;
    
}

// Initial call to set the first image
changeBackgroundImage()
// Change the background image every 10 seconds
setInterval(changeBackgroundImage, 10000);// 20 seconds in milliseconds

const backgroundColors = ['linear-gradient(rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5))', 'linear-gradient(rgba(0, 255, 115, 0.5), rgba(0, 255, 115, 0.5))', 'linear-gradient(rgba(50, 0, 50, 0.5), rgba(50, 0, 50, 0.5))', 'linear-gradient(rgba(255, 230, 50, 0.6), rgba(255, 230, 50, 0.6))']
const sectionHome = document.querySelector('.section-home');


function changeColors() {
    sectionHome.style.backgroundImage = backgroundColors[currentIndex];
    currentIndex = (currentIndex + 1) % backgroundColors.length;
    sectionHome.style.color = `${colors[currentIndex]}`;
}

changeColors()
// Change the background image every 10 seconds
setInterval(changeColors, 10000);