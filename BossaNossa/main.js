const holder = document.querySelector(".mobile-nav-holder");
const closeBtn = document.querySelector(".close-btn");
const menuBtn = document.querySelector("#menu-btn")


const toggleDown = () => {
    holder.classList.toggle("down")
}

closeBtn.addEventListener("click", toggleDown);
menuBtn.addEventListener("click", toggleDown);