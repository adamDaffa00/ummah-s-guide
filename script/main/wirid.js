import data from './../data/wirid-text.js'


document.addEventListener('DOMContentLoaded',renderUI);

function renderUI(){
  const ul = document.querySelector('.list-wirid');
  let list = '';
  data.forEach(item => list += displayWiridList(item));
  ul.innerHTML = list;
}

function displayWiridList(item){
  return `
      <li class="box">
          <h3 class="arab" > ${item.text} </h3> 
          <p> ${item.keterangan} </p>
      </li>
  `
}