const header = document.querySelector("header");
const toggel = document.querySelector(".toggel");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarSocial = document.querySelector(".navbar-social");
const toggelBtn = document.querySelector(".toggel .fa-solid");
const up = document.querySelector("#up");

window.onscroll = () => {
    if(window.scrollY >= 600) {
        header.classList.add("bg");
    } else {
        header.classList.remove("bg");
    }

    //tenary operator
    window.scrollY >= 600 ? up.style.opacity = 1 : up.style.opacity = 0;
}

toggelBtn.onclick = () => {
    navbarMenu.classList.toggle("active");
    navbarSocial.classList.toggle("active");
    toggelBtn.classList.toggle("fa-xmark");
}

up.onclick = () => {
    window.scrollTo(0,0);
}

