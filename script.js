document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle')
  const navLinks = document.querySelector('.nav-links')
  const themeToggle = document.querySelector('.theme-toggle')

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
  })

  document.addEventListener('click', e => {
    if (!e.target.closest('.nav')) {
      navLinks.classList.remove('active')
    }
  })

  themeToggle.addEventListener('click', () => {
    const root = document.documentElement
    root.setAttribute(
      'data-theme',
      root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    )
  })
})