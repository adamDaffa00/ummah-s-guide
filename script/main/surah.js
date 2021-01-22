document.addEventListener('DOMContentLoaded',renderAyah);


async function renderAyah(){
  try {
    const numberSurah = localStorage.getItem('number-surah');
    const ayat = await getAyahs(numberSurah);
  }catch(error) {
    alert(error);
  }
}

function getAyahs(numb){
 return fetch(`api.quran.sutanlab.id/surah/${numb}/`,{
    method: 'GET',
    headers: {'Content-Type': 'text/plain', },
    }
   )
   .then(res => {
    if(!res.ok) {
      throw new Error(res.statusText);
    }
    return res;
    });
}