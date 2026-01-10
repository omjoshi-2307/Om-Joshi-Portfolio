const menuToggle = document.querySelector(".menu-toggle")
const navLinks = document.querySelector(".nav-links")
const themeToggle = document.querySelector(".theme-toggle")
const navAnchors = document.querySelectorAll(".nav-links a")
const sections = document.querySelectorAll("section")

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active")
})

document.addEventListener("click", e => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove("active")
  }
})

navAnchors.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active")
  })
})

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120
    if (scrollY >= sectionTop) current = section.getAttribute("id")
  })

  navAnchors.forEach(link => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

themeToggle.addEventListener("click", () => {
  const theme = document.body.getAttribute("data-theme")
  document.body.setAttribute("data-theme", theme === "dark" ? "light" : "dark")
})