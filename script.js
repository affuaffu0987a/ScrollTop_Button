const arrowUp = document.querySelector(".arrowup")

// let scrollPoint = window.
// console.log(scrollPoint);
window.addEventListener("scroll",(e)=>{
    console.log(window.scrollY.length);
    if(window.scrollY >= 900){
        arrowUp.style.display = "block"
    }
    else{
        arrowUp.style.display = "none"
    }
})

arrowUp.addEventListener("click",(e)=>{
    window.scrollTo({top:0, left:0, behavior:"smooth"});
})