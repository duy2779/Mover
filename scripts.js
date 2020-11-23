var menu = document.getElementById('menu');
var sticky = menu.offsetTop

window.onscroll = function () {
    if (window.pageYOffset >= sticky) {
        menu.classList.add('sticky');
    } else {
        menu.classList.remove('sticky');
    }
}

const primaryMenuSlide = () => {
    const primaryMenuTrigger = document.querySelector('.primary-menu-trigger i');
    const primaryMenu = document.querySelector('.primary-menu');

    primaryMenuTrigger.addEventListener('click', () => {
        if (primaryMenuTrigger.style.transform == "rotate(90deg)") {
            primaryMenuTrigger.style.transform = '';
        } else {
            primaryMenuTrigger.style.transform = "rotate(90deg)";
        }
        primaryMenuTrigger.classList.toggle('fa-times');
        primaryMenu.classList.toggle('primary-menu-show');
    });
}

primaryMenuSlide();


const subMenuSlide = () => {
    const subMenuTrigger = document.querySelectorAll('#sub-menu-trigger');

    subMenuTrigger.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            trigger.nextElementSibling.classList.toggle('sub-menu-container-show');
            if (trigger.style.transform == "rotate(90deg)") {
                trigger.style.transform = '';
            } else {
                trigger.style.transform = "rotate(90deg)";
            }
        })

    });
}

subMenuSlide();