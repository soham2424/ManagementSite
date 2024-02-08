
document.addEventListener("DOMContentLoaded", function () {
  const popupLinks = document.querySelectorAll(".popup-link");
  const popupMenu = document.getElementById("popup-menu");

  popupLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      popupMenu.classList.toggle("show"); // Toggle the visibility of the pop-up menu
    });
  });
});
