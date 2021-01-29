import './murotal-item.js';

class murotalList extends HTMLElement {
  set surahs(surahs){
    this._surahs = surahs;
    this.render();
  }
  get elements(){
    return this.querySelectorAll('.playBtn');
  }
  render(){
    this._surahs.forEach(surah => {
      const murotalEl = document.createElement('murotal-item');
      murotalEl.ayah = surah;
      this.appendChild(murotalEl);
    });
  }
}

customElements.define('murotal-list',murotalList);