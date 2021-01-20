const menuBtn = document.querySelector('.config');
const configMenu = document.querySelector('.config-menu');


menuBtn.addEventListener('click',toggleMenu);


function toggleMenu(){
  configMenu.classList.toggle('show');
}
