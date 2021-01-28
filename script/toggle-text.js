
const text = document.querySelectorAll('ayah-list');
const togglers = document.querySelectorAll('.config-menu li label');


let translateClick = false;
let latinClick = false;
let tafsirClick = false;


togglers[0].addEventListener('click', translateToggle);
togglers[1].addEventListener('click', latinToggle);
togglers[2].addEventListener('click', tafsirToggle);


function translateToggle(){
  if(!translateClick) {
    alert('yes');
    translateClick = true;
  }else {
    alert('no');
    translateClick = false;
  }
}

function latinToggle(){
  if(!latinClick) {
     alert('yes');
    latinClick = true;
  }else {
     alert('no');
    latinClick = false;
  }
}

function tafsirToggle(){
  if(!tafsirClick){
     alert('yes');
    tafsirClick = true;
  }else {
     alert('no');
    tafsirClick = false;
  }
}