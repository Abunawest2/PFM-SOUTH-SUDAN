const openMenu = document.getElementById('menu-line');
const closeMenus = document.getElementById("mbar");
const hiddenMenu = document.getElementById('hidden-screen')
const backgroundColors = ['linear-gradient(rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5))', 'linear-gradient(rgba(0, 255, 115, 0.5), rgba(0, 255, 115, 0.5))', 'linear-gradient(rgba(50, 0, 50, 0.5), rgba(50, 0, 50, 0.5))', 'linear-gradient(rgba(255, 230, 50, 0.6), rgba(255, 230, 50, 0.6))']
const sectionHome = document.querySelector('.section-home');
const banner = document.querySelector('.banner');
const images = ['../images/banner.jpg', '../images/blacklogo.jpg', '../images/The-Unity.jpg']; // List of image URLs
let currentIndex = 0;
let index = 0

function displayMenu() {
    if (hiddenMenu.style.display === 'none') {
        hiddenMenu.style.display = 'flex';
        document.body.classList.add('no-scroll');
        banner.style.display = 'none'
        document.getElementById('menu-icon').classList.replace('fa-bars', 'fa-times');
    } else {
        hiddenMenu.style.display = 'none';
        document.body.classList.remove('no-scroll');
        banner.style.display = 'flex'
        document.getElementById('menu-icon').classList.replace('fa-times', 'fa-bars');
    }
}

document.addEventListener('click', function(event) {
    const targetElement = event.target; // clicked element

    if (!targetElement.closest('#hidden-screen') && !targetElement.closest('#menu-icon')) {
        // Close the menu if the click is outside of hidden-screen and menu-icon
        hiddenMenu.style.display = 'none';
        document.body.classList.remove('no-scroll');
        banner.style.display = 'flex';
        document.getElementById('menu-icon').classList.replace('fa-times', 'fa-bars');
    }
});



document.querySelectorAll('.drop-down-screen-links').forEach(link => {
    link.addEventListener('click', displayMenu);
});

function changeBackgroundImage() {
    sectionHome.style.backgroundImage = backgroundColors[index];
    banner.style.backgroundImage = `linear-gradient(to top, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.7)), url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
    index = (index + 1) % backgroundColors.length;
}

function changeColors() {
    banner.style.color = `black`;
    sectionHome.style.color = `black`;
}

changeBackgroundImage()
// Change the background image every 10 seconds
setInterval(changeBackgroundImage, 10000);// 20 seconds in milliseconds

changeColors()
// Change the background image every 10 seconds
setInterval(changeColors, 1000);