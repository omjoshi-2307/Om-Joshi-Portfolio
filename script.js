const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')
const themeToggle = document.querySelector('.theme-toggle')
const links = navLinks.querySelectorAll('a')
const sections = document.querySelectorAll('section[id]')

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('active')
  }
})

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active')
  })
})

themeToggle.addEventListener('click', () => {
  const root = document.documentElement
  root.setAttribute(
    'data-theme',
    root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  )
})

window.addEventListener('scroll', () => {
  let current = ''
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100
    if (scrollY >= sectionTop) current = section.id
  })

  links.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${current}`
    )
  })
})