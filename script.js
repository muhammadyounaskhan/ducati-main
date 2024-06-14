const slides = document.getElementsByClassName('slide');
const slides_div = document.querySelector('.slides');
const number_slides = slides.length;
let width = number_slides * 100;
let curSlide = 1;
console.log(width);
slides_div.style.width = `${width}%`;
console.log(slides);
setInterval(() => {
    if (curSlide == 1) {
        slides[0].style.transform = `translateX(-${100}%)`
        slides[1].style.transform = `translateX(-100%)`;
        curSlide = 0;
    }
    else {
        slides[0].style.transform =
            `translateX(${0}%)`;
        slides[1].style.transform =
            `translateX(${0}%)`;
        curSlide = 1;
    }
}, 5000);
/*
#<=====================================================>
#                 FLOATED NAVIGATION
#<=====================================================>
*/
const checkbox = document.getElementById('checkbox');
const bottomNav = document.querySelector('.bottom-nav');
const floatedNav = document.getElementById('floatedNav');
const overlay = document.getElementById('overlay-body');
const links = document.querySelectorAll('.top-nav a');
const modelliLink = document.querySelector('.modelli a');
const windowWidth = window.innerWidth;
checkbox.addEventListener('change', () => {
    if (bottomNav) {

        bottomNav.classList.toggle('height');
        /*#<============[Overlay Activation Code]============>#*/
        overlay.classList.toggle('show');
        if (checkbox.checked) {

            links.forEach((link) => {
                link.style.color = "#ddd";
            })
        } else {
            links.forEach((link) => {
                if (window.innerWidth <= 850 && link === modelliLink) {
                    link.style.color = "#cc0000";
                } else {

                    link.style.color = "#000";
                }

            })

        }
    }
});
overlay.addEventListener('click', () => {
    overlay.classList.toggle('show');
    checkbox.checked = false;
    bottomNav.classList.toggle('height');
})

/*
#<=====================================================>
#                 Registeration Overlay
#<=====================================================>
*/
const myducati = document.querySelector('.my-ducati');
const RegisterationPanel = document.querySelector('.registeration_panel');
myducati.addEventListener('click', () => {
    overlay.classList.toggle('show');
    overlay.classList.toggle('z-index');
    RegisterationPanel.classList.toggle('show');
})
/*
#<=====================================================>
#                 TESTIMONIAL SECTION CODE
#<=====================================================>
*/
//#<============[Variables]============>#
const testimonial1 = document.getElementById("testimonial-1");
const wrapper1 = document.getElementById("wrapper-1");
const wrapper2 = document.getElementById("wrapper-2");
const dot1 = document.getElementsByClassName("dot")[0];
const dot2 = document.getElementsByClassName("dot")[1];
//#<============[function]============>#
function change() {
    wrapper1.classList.toggle('hidden');
    wrapper2.classList.toggle('hidden');
    dot1.classList.toggle('dot-filled');
    dot2.classList.toggle('dot-filled');
}
setInterval(() => {
    const width = innerWidth;
    if (width > 956) {
        wrapper1.classList.toggle('hidden');
        wrapper2.classList.toggle('hidden');
        dot1.classList.toggle('dot-filled');
        dot2.classList.toggle('dot-filled');
    }

}, 5000);


dot1.addEventListener('click', () => {
    change();
});
dot2.addEventListener('click', () => {
    change();
});

/*
#<=====================================================>
#                 Shopping Card JavaScript
#<=====================================================>
    */

const circularButtons = document.getElementsByClassName('circular-button');
const closeBtn = document.querySelector('.icon-1');
const shopCard = document.querySelector('.shop-card');
closeBtn.addEventListener('click', () => {
    shopCard.classList.add('hidden');
});
Array.from(circularButtons).forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent == '+') {
            button.textContent = '-';
            shopCard.classList.remove('hidden');
        } else {
            button.textContent = "+";
            shopCard.classList.add('hidden');
        }
    });
});

/*
#<=====================================================>
#    Toggling Modelli arrow and Toggling 
#<=====================================================>
*/
const modelli = document.querySelector('.modelli');
const modelliShowbox = document.querySelector('.modelli_showbox');

modelli.addEventListener('click', () => {
    arrow.classList.toggle('arrow-up');
    arrow.classList.toggle('arrow-down');
    modelliShowbox.classList.toggle('hidden');
    overlay.classList.toggle('show');
});

/*
#<=====================================================>
#                 LINKS FADING WHEN CLICKING MODELLI
#<=====================================================>
*/
document.querySelector('.modelli').addEventListener('click', function () {
    const topNavLinks = document.querySelectorAll('.top-nav a:not(.modelli a)');
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('faded');
    hamburger.classList.toggle('uninteractive');
    topNavLinks.forEach(link => {
        link.classList.toggle('faded');

    });
});
/*
#<=====================================================>
#                 Navbar links hiding after scrolling
#<=====================================================>
*/
const logo = document.querySelector('.logo');
window.addEventListener('scroll', function () {
    const topNav = document.querySelector('.top-nav');
    const leftNavElement = document.querySelector('.nav-left > ul');
    const rightNav = document.querySelector('.nav-right');


    if (window.scrollY > 1200) { // Adjust the distance as needed
        leftNavElement.classList.add('hidden');
        logo.classList.add('hidden');
        rightNav.classList.add('hidden');
        floatedNav.classList.add('change-nav');
    } else {
        leftNavElement.classList.remove('hidden');
        logo.classList.remove('hidden');
        rightNav.classList.remove('hidden');
        floatedNav.classList.remove('change-nav');
    }
});


/*
#<=====================================================>
#                 Modelli jump from left to right
#<=====================================================>
*/

// const modelli = document.querySelector('.modelli');
const navRight = document.querySelector('.nav-right .links');
const navLeft = document.querySelector('.nav-left .links');
function moveLink() {


    if (window.innerWidth <= 850) {
        // Move link to nav-right if viewport width is 850px or less
        if (navLeft.contains(modelli)) {
            navRight.appendChild(modelli);
            modelli.style.display = 'block';
            modelli.firstChild.style.color = "#CB1517";
            arrow.style.display = 'none';
            console.log("hello");
        }

    } else if (window.innerWidth > 850) {
        // Move link back to nav-left if viewport width is more than 850px
        if (navRight.contains(modelli)) {
            navLeft.insertBefore(modelli, navLeft.firstChild);
            arrow.style.display = 'block';
            modelli.firstChild.style.color = "#000";
            console.log("resized");
        }
    }
}

// Initial check
const arrow = document.getElementById('arrow');
moveLink();

// Check on window resize
window.addEventListener('resize', moveLink);

/*





/*
#<=====================================================>
#                 Vanishing logo and nav-right
#<=====================================================>
*/

const navRightElement = document.querySelector('.modelli');
const navRightElementChild = document.querySelector('.modelli a');
const nav = document.querySelector('.nav');
const right = document.querySelector('.right');
const rightNav = document.querySelector('.nav-right');

checkbox.addEventListener('click', () => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth <= 850 && checkbox.checked) {
        navRightElementChild.style.display = 'none';
        logo.style.display = 'none';
        modelli.firstChild.style.color = "#cc0000";
        rightNav.appendChild(right);
    } else {
        if (viewportWidth <= 850) {

            navRightElementChild.style.display = 'inline-block';
        }
        logo.style.display = 'block';
        nav.appendChild(right);


    }
});