// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(r => observer.observe(r));

// Mobile nav
document.getElementById("hamburger").onclick = () =>
  document.querySelector(".nav-links").classList.toggle("active");

// Theme toggle
document.getElementById("themeToggle").onclick = () =>
  document.body.classList.toggle("light");