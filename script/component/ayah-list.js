import './ayah-item.js';

class ayahList extends HTMLElement {
  set ayahs(ayahs){
    this._ayahs = ayahs;
    this.render();
  }
  get elements(){
    return this.querySelectorAll('.content-ayat p');
  }
  render(){
     this.innerHTML = "";
     this._ayahs.forEach(ayah => {
      const ayahItemEl = document.createElement('ayah-item');
      ayahItemEl.ayah = ayah;
      this.appendChild(ayahItemEl);
    });
  }
}

customElements.define('ayah-list',ayahList);