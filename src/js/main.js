// Test import of a JavaScript function
import { logSomething } from "./module";

logSomething("Hello World");

// open and close navigation
function burgerMenu() {
    const menuBtn = document.querySelector('.menu');
    const navigation = document.querySelector('.navigation');

    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('open');
        navigation.classList.toggle('open');
    })
}
burgerMenu();

//Scroll to anchor links on page
function scrollToAnchor() {
    let anchorlinks = document.querySelectorAll('a[href^="#"]');
    
    for (let item of anchorlinks) {  
        item.addEventListener('click', (e)=> {
            let hashval = item.getAttribute('href');
            let target = document.querySelector(hashval);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            history.pushState(null, null, hashval);
            e.preventDefault();
        })
    }
    
}
scrollToAnchor();