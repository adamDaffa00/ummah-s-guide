
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
  const audio = document.querySelector('.audio audio');
// toggle fas icon 
//  toggleIcon(target,audio);
  audio.src = dataSrc;
  audio.play();
}

/**
let audioPlay = false;
function toggleIcon(element,audioEl){
  audioPlay = true;
  if(element.children[0].classList.contains('fa-pause')){
    alert('playing');
    element.children[0].classList.replace('fa-pause','fa-play');
    audioPlay = false;
  }
  if(audioPlay){
    alert('paused');
    element.children[0].classList.replace('fa-play','fa-pause');
    audioEl.pause();
    audioPlay = false; 
  }
}
**/