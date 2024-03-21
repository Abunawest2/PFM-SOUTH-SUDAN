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
const images = ['./banner.jpg', './blacklogo.jpg', './The-Unity.jpg']; // List of image URLs
const colors = ['black', 'rgb(255, 215, 215)', 'rgb(255, 40, 40)']
let currentIndex = 0;

function changeBackgroundImage() {
    banner.style.color = `${colors[currentIndex]}`;
    banner.style.backgroundImage = `linear-gradient(to top, rgba(2, 2, 2, 0.5), rgba(255, 255, 255, 0.4)), url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % colors.length;
    currentIndex = (currentIndex + 1) % images.length;
    
}

// Initial call to set the first image
changeBackgroundImage()
// Change the background image every 10 seconds
setInterval(changeBackgroundImage, 10000);// 20 seconds in milliseconds
