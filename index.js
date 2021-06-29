const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const readmore = document.querySelector(".more");
const description = document.querySelector(".description");

hamburger_menu.addEventListener("click", () =>{
    container.classList.toggle("active");
    
})

readmore.addEventListener("click", () =>{
   
        description.classList.toggle("clicked")
        readmore.classList.toggle("clicked")
     
})

