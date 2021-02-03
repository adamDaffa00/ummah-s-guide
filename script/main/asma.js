import data from './../data/asmaul-husna.js'

document.addEventListener('DOMContentLoaded', render);

async function render(){
  try {
   data.forEach(item => displayList(item));
  } catch (e) {
    alert(e);
  }
}

function displayList(item){
  const ul = document.querySelector('.list-asma');
  const li = document.createElement('li');
  li.innerHTML = `
      <li class="list box">
        <p> ${item.number} </p>
        <div>
          <p class="arab"> <strong> ${item.arabic} </strong> </p>
          <p> ${item.latin} </p>         
          <p> ${item.meaning} </p>
        </div>
      </li>
  `;
  ul.appendChild(li);
}