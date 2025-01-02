let menu_list = document.getElementById("menu-list");
let nav = document.getElementById("nav");
let nav_button = document.getElementById("nav-button");

if (screen.width <= 800) {
    menu_list.style.maxHeight = "0px"; 
    menu_list.style.display = "none";
}
    nav.style.maxHeight = "60px";


    function toggle_menu() {
        if (menu_list.style.maxHeight === "0px") {
            menu_list.style.maxHeight = "240px"; 
            menu_list.style.display = "";
            nav.style.maxHeight = "240px";
            nav_button.style.marginTop ="0"

        } else {
            menu_list.style.maxHeight = "0px";
            menu_list.style.display = "none";
            nav.style.maxHeight = "60px"
        }
    }



document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider-image');
        let currentIndex = 0;

        images[currentIndex].classList.add('active');
        
        const nextButton = slider.parentElement.querySelector('.next');
        nextButton.addEventListener('click', () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length; 
            images[currentIndex].classList.add('active');
        });

        const prevButton = slider.parentElement.querySelector('.prev');
        prevButton.addEventListener('click', () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex - 1 + images.length) % images.length; 
            images[currentIndex].classList.add('active');
        });
    });
});
