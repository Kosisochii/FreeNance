let hamburger = document.querySelector(".hamburger");
let mobileNav = document.querySelector(".mobileNav");
let cancelBtn = document.querySelector(".cancelBtn");

hamburger.addEventListener("click", () =>{
    mobileNav.classList.add("show");
});

cancelBtn.addEventListener("click", () =>{
    mobileNav.classList.remove("show");
})