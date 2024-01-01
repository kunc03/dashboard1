const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sideBar = document.querySelector('.container .left-section');
const sideBarItem = document.querySelectorAll('.container .left-section .sidebar .item');

menuOpen.addEventListener('click', () => {
  sideBar.style.top = '0';
});

menuClose.addEventListener('click', () => {
  sideBar.style.top = '-60vh';
});

let activeItem = sideBarItem[0];

sideBarItem.forEach((item) => {
  item.addEventListener('click', () => {
    activeItem && activeItem.removeAttribute('id');

    item.setAttribute('id', 'active');
    activeItem = item;
  });
});
