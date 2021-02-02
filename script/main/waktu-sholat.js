document.addEventListener('DOMContentLoaded',renderSholahTime)

async function renderSholahTime(){
  const cityList = await getCityList();
  displayCityList(cityList);
}

function getCityList(){
  return fetch('https://api.banghasan.com/sholat/format/json/kota')
  .then(res => res.json())
  .then(data => data.kota);
}

function displayCityList(listCity){
  const ul = document.querySelector('.list-city');
  let list = '';
  listCity.forEach(city => {
    list += renderCityList(city);
  });
  ul.innerHTML = list;
}

function renderCityList(city){
  return `
     <li class="city-results box">
         <p> ${city.nama} </p> 
         <ul class="time">
           <li> <strong> Subuh: </strong> <span> 4:28 </span>  </li>
           <li> <strong> Dhuha: </strong> <span> 6:20 </span>  </li>
           <li> <strong> Dzuhur: </strong> <span> 11:57 </span>  </li>
           <li> <strong> Ashar: </strong> <span> 14:40 </span>  </li>
           <li> <strong> Maghrib: </strong> <span> 17:58 </span>  </li>
           <li> <strong> Isya: </strong> <span> 18:59 </span>  </li>
         </ul>
     </li>
  `;
}