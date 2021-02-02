
import './../component/murotal-list.js';

const listMurotal = document.querySelector('murotal-list');

document.addEventListener('DOMContentLoaded',loadMurotal);


setTimeout(function() {
  listMurotal.elements.forEach(el => {
    el.addEventListener('click',(e) => {
      playMurotal(e.target);
    });
  });
},3000);


async function loadMurotal(){
  try {
   let surah = await getAudio();
   renderAudio(surah);
  }
  catch(error){
    alert(error);
  }
}

function getAudio(){
  return fetch('https://al-quran-8d642.firebaseio.com/data.json?print=pretty')
  .then(response => response.json())
  .then(data => data);
}

function renderAudio(surah){
  listMurotal.surahs = surah;    
}
  

function playMurotal(target){
  const dataSrc = target.dataset.audio;
  const icon = target.children[0];
  const audio = document.querySelector('.audio audio');
  audio.src = dataSrc;
  audio.play();
}
