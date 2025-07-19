document.addEventListener("DOMContentLoaded", () => {
    const sideMenu = document.getElementById("sideMenu");
  
    window.openMenu = function () {
      sideMenu.style.right = "0";
    };
  
    window.closeMenu = function () {
      sideMenu.style.right = "-16rem";
    };
  });
  