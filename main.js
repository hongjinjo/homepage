const toggleBtn = document.querySelector('.navbar_toggleBtn'); 
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_sns_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

주석처리 색상 바꾸기 