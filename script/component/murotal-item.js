class murotaIItem extends HTMLElement {
  set ayah(ayah){
    this._ayah = ayah;
    this.render();
  }
  render(){
    this.innerHTML = `
     <li class="list box">
      <p> ${this._ayah.nomor} </p>
      <div>
        <p> <strong> ${this._ayah.nama} </strong> </p>
        <p> Syaikh Mishari Alafasy </p>
      </div>
      <button class="playBtn" data-audio="${this._ayah.audio}"><i class="fas fa-play"></i></button>
     </li>
    `;
  }
}

customElements.define('murotal-item',murotaIItem);