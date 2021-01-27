class ayahItem extends HTMLElement {
  set ayah(ayah){
    this._ayah = ayah;
    this.render();
  }
  render(){
    this.innerHTML = `
    <li class="box">
      <div class="nav-ayat">
        <button>
          ${this._ayah.number.inSurah}
        </button>
        <div>
          <button data-src="${this._ayah.audio.primary}" id="play-btn" ><i class="fas fa-play"></i></button>
          <button data-arabic="${this._ayah.text.arab}"
          data-translate="${this._ayah.translation.id}"
          data-tafsir="${this._ayah.tafsir.id.long}"
          data-latin="${this._ayah.text.transliteration.en}" id="bookmark-btn"
          ><i class="fas fa-bookmark"></i></button>
          <button data-textquran="${this._ayah.text.arab}" data-translate="${this._ayah.translation.id}" id="copy-btn" ><i class="fas fa-copy"></i></button>
        </div>
      </div>
      <div class="content-ayat">
        <p class="arab">
          ${this._ayah.text.arab}
        </p>
        <p class="latin">
          ${this._ayah.text.transliteration.en}
        </p>
        <p class="arti">
          <strong> artinya : <br></strong>
          ${this._ayah.translation.id}
        </p>
        <p class="tafsir">
          <strong> tafsir : <br></strong>
          ${this._ayah.tafsir.id.long}
          </p>
      </div>
    </li>
    `;
  }
}

customElements.define('ayah-item',ayahItem);
