 
 const menuCard = document.querySelectorAll('.menu .card');
 
 
document.addEventListener('DOMContentLoaded',displaySurah());


menuCard[0].addEventListener('click',directToMurotalPage);
menuCard[1].addEventListener('click',directToAsmaulHusnaPage);
menuCard[2].addEventListener('click',directToPrayTimePage);
menuCard[3].addEventListener('click',directToPrayPage);
menuCard[4].addEventListener('click',directToWiridPage);



function directToMurotalPage(){
 window.location.pathname = '../../murotal.html';
}
function directToAsmaulHusnaPage(){
   window.location.pathname = '../../asmaul-husna.html';
}
function directToPrayTimePage(){
   window.location.pathname = '../../waktu-sholat.html';
}
function directToPrayPage(){
  alert("yokai");
}
function directToWiridPage(){
 window.location.pathname = '../../wirid.html';
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
        <p class="arab"> <strong> ${surah.name.short} </strong> </p>
      </li>
  `;
  return str;
}

function openSurah(number){
  localStorage.setItem('number-surah',number);
  window.location = '../../ayat.html';
}