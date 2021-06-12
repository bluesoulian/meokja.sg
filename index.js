const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const readmore = document.querySelector(".btn");
const description = document.querySelector(".description");

hamburger_menu.addEventListener("click", () =>{
    container.classList.toggle("active");
    
})

readmore.addEventListener("click", () =>{
    description.innerHTML = `hello sdahfqhopwfjopqjfojqweijof
    sdkfjlqwefjkldjslkfjklsdjklfsjklfsdkl
    qhkfwelfhlkwhejfklklwfjkldjklfjksldf
    dfjkqwhfehwlqfeiljfqowefjweofjwejfoi
    wheuifhowiejfoiwjeofiwoiefohewofihowi
    qwefqefqwefqwefwfwefwefwefwefweffwefw
    qhwoefhowehfoiwejhiofwjiofejiowjfioio`;
})