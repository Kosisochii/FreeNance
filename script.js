let hamburger = document.querySelector(".hamburger");
let mobileNav = document.querySelector(".mobileNav");
let cancelBtn = document.querySelector(".cancelBtn");
console.log(mobileNav);
console.log(hamburger);

hamburger.addEventListener("click", () =>{
    mobileNav.classList.add("show");
});

cancelBtn.addEventListener("click", () =>{
    mobileNav.classList.remove("show");
})