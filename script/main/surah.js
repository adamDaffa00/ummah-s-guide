const audioTag = document.querySelector('.audio audio');

document.addEventListener('DOMContentLoaded',renderAyah);


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
  let list = '';
   const listAyahs = ayah.verses;
   
   listAyahs.forEach(item => list += renderListAyahs(item));
   const ayahUl = document.querySelector('.ayat-section ul');
   const ayahLi = document.createElement('li');
   ayahLi.classList.add('box');
   ayahLi.innerHTML = list;
   ayahUl.appendChild(ayahLi);
}


function renderListAyahs(ayah){
  return `
      <div class="nav-ayat">
        <button>
          ${ayah.number.inSurah}
        </button>
        <div>
          <button  onclick="playSound(event)" data-src="${ayah.audio.primary}"><i class="fas fa-play"></i></button>
          <button onclick="addBookmark(event)"
          data-arabic="${ayah.text.arab}"
          data-translate="${ayah.translation.id}"
          data-tafsir="${ayah.tafsir.id.long}"
          data-latin="${ayah.text.transliteration.en}"
          ><i class="fas fa-bookmark"></i></button>
          <button onclick="copy(event)" data-textquran="${ayah.text.arab}" data-translate="${ayah.translation.id}"><i class="fas fa-copy"></i></button>
          <button onclick="share()"><i class="fas fa-share"></i></button>
        </div>
      </div>
      <div class="content-ayat">
        <p class="arab">
          ${ayah.text.arab}
        </p>
        <p class="latin">
          ${ayah.text.transliteration.en}
        </p>
        <p class="arti">
          <strong> artinya : <br></strong>
          ${ayah.translation.id}
        </p>
        <p class="tafsir">
          <strong> tafsir : <br></strong>
           ${ayah.tafsir.id.long}
          </p>
      </div>
  `;
}
// play audio
function playSound(e){
  const src = e.target.dataset.src;
  audioTag.src = src;
  audioTag.play();
}

// bookmark
function addBookmark(e){
  const arabTxt = e.target.dataset.arabic;
  const latinTxt = e.target.dataset.latin;
  const translateTxt = e.target.dataset.translate;
  const tafsirTxt  = e.target.dataset.tafsir;
} 

// copy text
function copy(e){
  const txtArabic = e.target.dataset.textquran;
  const txtTranslate = e.target.dataset.translate;
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
 
 
 // share ayah
function share(){
  alert('share succesfull');
}