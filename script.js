const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')
const themeToggle = document.querySelector('.theme-toggle')

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active')
  })
})

themeToggle.addEventListener('click', () => {
  const root = document.documentElement
  const current = root.getAttribute('data-theme') || 'light'
  root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark')
})

document.documentElement.setAttribute('data-theme', 'light')