class FeliratElem {
    #key;
    #elemLeiro;
    #valid = false;
    #ertek = false;
  
    constructor(key, elemLeiro, szulElem) {
      this.#key = key;
      this.#elemLeiro = elemLeiro;
      this.formElem = szulElem;
      this.#feliratElem();
      this.InputElem = $(`#${this.#key}`);
  
      this.ValidElem = this.formElem
        .find(".valid");
      this.InValidElem = this.formElem
        .find(".invalid");
  
      this.InputElem.on("keyup", () => {
        this.#ertek = this.InputElem.prop("checked");
        let vartreg = this.#elemLeiro.regex.pipa;
  
        if (this.#ertek === vartreg) {
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
  
    get valid() {
      return this.#valid;
    }
  
    get ertek() {
      return this.#ertek;
    }
  
    get key() {
      return this.#key;
    }
  
    #feliratElem() {
      let txt = `
       
          <div class="form-check form-switch">
            <input class="form-check-input" type="${this.#elemLeiro.type}" id="${this.#key}" name="${this.#elemLeiro.megj}" value="${this.#elemLeiro.value}" checked>
            <label class="form-check-label" for="${this.#key}">${this.#elemLeiro.megj}</label>
            <div class="valid lathato">OK</div>
            <div class="invalid lathato">${this.#elemLeiro.valid}</div>
          
        </div>`;
      this.formElem.append(txt);
    }
  }
  
  export default FeliratElem;