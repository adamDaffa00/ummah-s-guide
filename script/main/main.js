 
 const menuCard = document.querySelectorAll('.menu .card');
 
 
document.addEventListener('DOMContentLoaded',displaySurah());


menuCard[0].addEventListener('click',directToMurotalPage);



function directToMurotalPage(){
 window.location.pathname = '../../murotal.html';
}



async function displaySurah(){
  // request ke server untuk menerima respons berupa data 
  try {
    const data = await requestSurah();
    render(data);
  }catch(e){
    alert(e);
  }
}

function requestSurah(){
  return fetch('https://api.quran.sutanlab.id/surah')
    .then(res => {
     if (!res.ok) {
       throw new Error(res.statusText);
     }
     return res.json()
    })
    .then(result => result.data)
}

function render(listSurah){
  let list = '';
  listSurah.forEach(surah => list += displayListSurah(surah));
  const listSurahEl = document.querySelector('.list-surah');
  listSurahEl.innerHTML = list;
  return list;
}

function displayListSurah(surah){
 let str =   `
      <li class="list box" onclick="openSurah(${surah.number})">
        <p> ${surah.number} </p>
        <div>
          <p> <strong> ${surah.name.transliteration.id} </strong></p>
          <p> ${surah.name.translation.id}: ${surah.numberOfVerses} ayat </p>
        </div>
        <p> <strong> ${surah.name.short} </strong> </p>
      </li>
  `;
  return str;
}

function openSurah(number){
  localStorage.setItem('number-surah',number);
  window.location = '../../ayat.html';
}