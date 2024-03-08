

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


