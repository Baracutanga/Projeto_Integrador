const menuOptions = document.getElementById('menu-opcoes');
const menu = document.getElementById('menu-container');

// EventListener 
menu.addEventListener('click', () => {
    menuOptions.style.display = 'flex';
})

menuOptions.addEventListener('mouseleave', () => {
    menuOptions.style.display = '';
})
