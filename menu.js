const menu = document.querySelector(".menubar");
const onoff = document.querySelector(".onoff");
const arrow = document.querySelector('.arrow');

onoff.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    arrow.classList.toggle('clicked');
    onoff.classList.toggle('clicked');
});