// This will get imported in main.js
export const burgerMenu = () => {
    const menuBtn = document.querySelector(".menu-container"),
    navigation = document.querySelector(".navigation"),
    navigationListItem = document.querySelectorAll(".navigation li"),
    key = {escape: 27};

    // Toggles the menu open and close
    menuBtn.addEventListener("click", function(){
        menuBtn.classList.toggle("open");
        navigation.classList.toggle("open");
    });

    //Close menu when one of the li's is clicked
    for (let item of navigationListItem) {
        item.addEventListener("click", function(){
            menuBtn.classList.remove("open");
            navigation.classList.remove("open");
        });
    }

    // add the key listener to close the menu when hitting esc
    window.addEventListener('keydown', HandleEscKeyEvent);
    function HandleEscKeyEvent (e){
        if(e.keyCode === key.escape) {
            menuBtn.classList.remove("open");
            navigation.classList.remove("open");
        }
    }
};
