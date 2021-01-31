export const scrollToAnchor = () => {
    let anchorlinks = document.querySelectorAll('a[href^="#"]');
    
    for (let item of anchorlinks) {  
        item.addEventListener("click", (e)=> {
            let hashval = item.getAttribute("href");
            //let target = document.querySelector(hashval);
            const offsetTop = document.querySelector(hashval).offsetTop;
            scroll({
                behavior: "smooth",
                top: offsetTop
            });
            history.pushState(null, null, hashval);
            e.preventDefault();
        });
    }
};