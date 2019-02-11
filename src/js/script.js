document.addEventListener("DOMContentLoaded", () => {
  let navButtons = document.querySelectorAll(".toggle-menu");
  for(let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click", (event) => {
      let fontAwesomeIcon = document.createElement("i");
      fontAwesomeIcon.classList.add("fas");
      
      let button = event.target.parentElement;
      button.parentElement.classList.toggle("active");
      button.classList.toggle("active");
      
      let buttonActive = document.querySelector(".toggle-menu.active");
      if(buttonActive != undefined && buttonActive != null) {
        fontAwesomeIcon.classList.add("fa-times");
      }
      else {
        fontAwesomeIcon.classList.add("fa-bars");
      }
      
      button.removeChild(button.firstChild);
      button.appendChild(fontAwesomeIcon);
    });
  }
});