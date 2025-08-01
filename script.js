// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hamburger Menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (
    !navbarNav.contains(e.target) &&
    !document.querySelector("#hamburger-menu").contains(e.target)
  ) {
    navbarNav.classList.remove("active");
  }
});
