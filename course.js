const navBtn = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 60){
        navBtn.classList.add("scrolled");
    } else {
        navBtn.classList.remove("scrolled");
    }
});