

const thumbnails = document.querySelectorAll(".thumbnail")

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
  })
  // console.log(entries)
}, {
  threshold: 1,
  rootMargin: "-90px 0px -70px 0px"
})

thumbnails.forEach(thumbnail => {
  observer.observe(thumbnail)
})





const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))




const activePage = window.location.pathname;
if (activePage !== '/') {
  document.querySelectorAll('nav ul a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add('menu-active');
    }
  })
  // TO DO: FIX UGLY CODE BELOW > IT COULD BE SHORTER, THKS 
} else {
  document.querySelectorAll('nav ul a').forEach(link => {
    if (link.href.includes('/index.html')) {
      link.classList.add('menu-active');
    }
  })
}