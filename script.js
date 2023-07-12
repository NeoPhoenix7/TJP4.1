const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close_menu')
const nav2 = document.querySelector('.nav2')

hamburger.addEventListener('click', ()=> {
    hamburger.classList.add('hide');
    close.classList.remove('hide');
    nav2.classList.toggle('visible')
})

close.addEventListener('click', ()=> {
    close.classList.add('hide');
    hamburger.classList.remove('hide');
    nav2.classList.toggle('visible')
})
