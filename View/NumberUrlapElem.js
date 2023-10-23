class NumberUrlapElem {
    #key;
    #elemLeiro;
    #valid = false;
    #ertek={};
    constructor(key, elemLeiro, szulElem) {
      this.#key = key;
      this.#elemLeiro = elemLeiro;
      this.formElem = szulElem;
      this.#numberElem();
      this.InputElem = $(`#${this.#key}`);
   
      this.ValidElem = this.formElem
        .children("div:last-child")
        .children(".valid");
      this.InValidElem = this.formElem
        .children("div:last-child")
        .children(".invalid");
    
      this.InputElem.on("keyup", () => {
  let ertek = this.InputElem.val();
  let regmin = this.#elemLeiro.regex.min;
  let regmax = this.#elemLeiro.regex.max;
  if (ertek >= regmin && ertek <= regmax) {
    this.#valid = true;
    this.ValidElem.removeClass("lathato");
    this.InValidElem.addClass("lathato");
  } else {
    this.#valid = false;
    this.InValidElem.removeClass("lathato");
    this.ValidElem.addClass("lathato");
  }
});
    }
    get valid(){
  
      return this.#valid
    }
    get ertek(){
      return this.#ertek;
    }
    get key(){
      return this.#key
    }
    #numberElem() {
      let txt = "";
      txt += `<div class="mb-3 mt-3">
              <label for="${this.#key}" class="form-label">${
        this.#elemLeiro.megj
      }</label>
              <input type="${this.#elemLeiro.type}" 
              class="form-control" id="${this.#key}" 
              placeholder="${this.#elemLeiro.placeholder}" 
              name="${this.#key}"
              value="${this.#elemLeiro.value}"
              min="${this.#elemLeiro.regex.min}"
              max="${this.#elemLeiro.regex.max}"> 
              <div class="valid lathato">OK</div>
              <div class="invalid lathato">${this.#elemLeiro.valid}</div> </div>`;
      this.formElem.append(txt);
    }
}
export default NumberUrlapElem;
