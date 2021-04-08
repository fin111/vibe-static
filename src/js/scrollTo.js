export const scrollToAnchor = () => {
    let anchorlinks = document.querySelectorAll('a[href^="#"]');
    
    for (let item of anchorlinks) {  
        item.addEventListener("click", (e)=> {
            let hashval = item.getAttribute("href");
            let target = document.querySelector(hashval);
            const offsetTop = target.offsetTop - 50;
            console.log(offsetTop);
            scroll({
                behavior: "smooth",
                top: offsetTop
            });
            history.pushState(null, null, hashval);
            e.preventDefault();
        });
    }
};