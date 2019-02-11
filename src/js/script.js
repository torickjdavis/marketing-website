document.addEventListener("DOMContentLoaded", () => {
  let navButtons = document.querySelectorAll(".toggle-menu");
  for(let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click", (event) => {
      event.target.parentElement.parentElement.classList.toggle("active");
      event.target.parentElement.classList.toggle("active");
    });
  }
});