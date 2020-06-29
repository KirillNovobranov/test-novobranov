let scrolltop = pageYOffset;
const toggleClass = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (pageYOffset > scrolltop) {
    toggleClass.classList.add("navbar-scroll");
  } else {
    toggleClass.classList.remove("navbar-scroll");
  }
  scrolltop = pageYOffset;
});

function burgerOpen () { 
  document.querySelector(".menu-open").addEventListener("click", (e) => {
    document.querySelector(".menu").classList.toggle('show-menu')
  })
}

burgerOpen()
