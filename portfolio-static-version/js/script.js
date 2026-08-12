const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");


if (menuButton && nav) {

    const icon = menuButton.querySelector("ion-icon");


    menuButton.addEventListener("click", () => {


        nav.classList.toggle("active");


        if (nav.classList.contains("active")) {

            icon.setAttribute("name", "close");

        } else {

            icon.setAttribute("name", "layers");

        }


    });



    // затваряне при клик извън менюто

    document.addEventListener("click", (event) => {


        const clickedMenu = nav.contains(event.target);

        const clickedButton = menuButton.contains(event.target);



        if (!clickedMenu && !clickedButton) {


            nav.classList.remove("active");


            icon.setAttribute("name", "layers");


        }


    });


}