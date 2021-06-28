const menu = document.querySelector(".menubar");
const onoff = document.querySelector(".onoff");
const arrow = document.querySelector('.arrow');

//cards
const card = document.querySelector('.card')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const card4 = document.querySelector('.card4')
const card5 = document.querySelector('.card5')
const card6 = document.querySelector('.card6')

onoff.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    arrow.classList.toggle('clicked');
    onoff.classList.toggle('clicked');
});

//card clicked
card.addEventListener('click', ()=> {
    card.classList.toggle('clicked')
});

card2.addEventListener('click', ()=> {
    card2.classList.toggle('clicked')
});

card3.addEventListener('click', ()=> {
    card3.classList.toggle('clicked')
});

card4.addEventListener('click', ()=> {
    card4.classList.toggle('clicked')
});

card5.addEventListener('click', ()=> {
    card5.classList.toggle('clicked')
});

card6.addEventListener('click', ()=> {
    card6.classList.toggle('clicked')
});