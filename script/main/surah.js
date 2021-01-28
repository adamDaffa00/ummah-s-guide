
import './../component/ayah-list.js';

document.addEventListener('DOMContentLoaded',renderAyah);
document.addEventListener('click',featured);



async function renderAyah(){
  try {
    const numberSurah = localStorage.getItem('number-surah');
    const ayah = await getAyahs(numberSurah);
    displayAyah(ayah);
  }catch(error) {
    alert(error);
  }
}

function getAyahs(numb){
 return fetch(`https://api.quran.sutanlab.id/surah/${numb}`)
   .then(res => {
    if(!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
    })
    .then(result => result.data);
}

function displayAyah(ayah){
   ayahLi.ayahs = ayah.verses;
}

function featured(e){
  // playing audio 
  if(e.target.classList.contains('fa-play')){
    playAudio(e.target);
  }else if(e.target.classList.contains('fa-bookmark')){
    // add to bokmark
    addBookmark(e.target);
  }else if (e.target.classList.contains('fa-copy')) {
    // copy 
    copy(e.target);
  }
}

function playAudio(target){
  const src = target.parentElement.dataset.src;
  const audioTag = document.querySelector('audio');
  audioTag.src = src;
  audioTag.play();
}

function copy(target){
  const txtArabic = target.parentElement.dataset.textquran;
  const txtTranslate = target.parentElement.dataset.translate;
  const txt = [txtArabic,txtTranslate];
  const el = document.createElement('textarea');
  txt.forEach(item => {
    el.value += item;
  });
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function addBookmark(target){
  const arabTxt = target.parentElement.dataset.arabic;
  const latinTxt = target.parentElement.dataset.latin;
  const translateTxt = target.parentElement.dataset.translate;
  const tafsirTxt  = target.parentElement.dataset.tafsir;
  console.log(arabTxt,latinTxt,translateTxt,tafsirTxt);
} 

const ayahLi = document.querySelector('ayah-list');

ayahLi.elements.forEach(element => {
  /**
 const latinText = element.classList.contains('latin');
 const artiText = element.classList.contains('arti').innerText;
 const tafsirText = element.classList.contains('tafsir').innerText;
 **/

 alert(element);
 
});