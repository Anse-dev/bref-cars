window.addEventListener("DOMContentLoaded", (event) => {
  let btnbar = document.querySelector(".menu-bar");
  let menublock = document.querySelector(".menu-nav");
  btnbar.addEventListener("click", (event) => {
    menublock.classList.toggle("active");
  });
});
