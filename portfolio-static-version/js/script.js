
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuButton && nav) {
  const icon = menuButton.querySelector("ion-icon");
  const navLinks = nav.querySelectorAll("a");

  // Отваряне / затваряне на менюто
  menuButton.addEventListener("click", (event) => {
    event.stopPropagation();

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      icon.setAttribute("name", "close");
    } else {
      icon.setAttribute("name", "layers");
    }
  });

  // Затваряне при клик върху линк
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      icon.setAttribute("name", "layers");
    });
  });

  // Затваряне при клик извън менюто
  document.addEventListener("click", (event) => {
    const clickedMenu = nav.contains(event.target);
    const clickedButton = menuButton.contains(event.target);

    if (!clickedMenu && !clickedButton) {
      nav.classList.remove("active");
      icon.setAttribute("name", "layers");
    }
  });
}

