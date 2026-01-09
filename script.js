const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector("i");

toggle.onclick = () => {
  document.body.classList.toggle("light");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
};

document.getElementById("hamburger").onclick = () => {
  document.querySelector(".nav-links").classList.toggle("active");
};