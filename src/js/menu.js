// This will get imported in main.js
export const burgerMenu = () => {
    const menuBtn = document.querySelector(".menu");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", function(){
        menuBtn.classList.toggle("open");
        navigation.classList.toggle("open");
    });
};
