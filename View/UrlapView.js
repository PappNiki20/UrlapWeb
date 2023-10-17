import TextUrlapElem from "./TextUrlapElem.js"

class View{
    #leiro=[]
    #urlapElemList = []
    #valid = true
    #urlapAdatok={}
constructor(szuloelem, leiro){
this.#leiro = leiro
this.szuloelem = szuloelem
this.szuloelem.append("<form>")
this.formelem= this.szuloelem.children("form")
console.log(this.formelem)
this.#urlapLetrehoz()
this.submitElem = $("#submit")
this.submitElem.on("click", (event)=>{
    event.preventDefault()
    this.#valid = true
this.#urlapElemList.forEach((elem)=>{
    console.log(elem.valid)
    this.#valid = this.#valid && elem.valid
    console.log(this.#valid)
})
if (this.#valid) {
    console.log("valid az űrlap")
    this.#urlapElemList.forEach((elem)=>{
        let ertek = elem.ertek
        let kulcs = elem.key
        this.#urlapAdatok[kulcs]=ertek
        
        //console.log(this.#urlapAdatok)
    })

}
else{
    console.log("nem az")
}
this.#sajatEsemenyKezelo("valid")
})
}
#urlapLetrehoz(){
    for (const key in this.#leiro) {
        switch (this.#leiro[key].type) {
            case "text":
              //this.#textElem(key);
               this.#urlapElemList.push(new TextUrlapElem(key, this.#leiro[key], this.formelem)) 
                break;
                case "number":
                    this.#numberElem(key);
                    break;
            default:
                break;
        }
    }
    
    let txt = `<input type="submit" id="submit" value="ok">`
    this.formelem.append(txt)
    }
   
    

#numberElem(key){
    let txt=""

       txt+=`
    <div class="mb-3 mt-3">
    <label for="${key}" class="form-label">${this.#leiro[key].megj}</label>
    <input type="${this.#leiro[key].type}" class="form-control" id="${key}" 
    placeholder="${this.#leiro[key].placeholder}" name="${key}"
    value="${this.#leiro[key].value}"
    min="${this.#leiro[key].min}"
    max="${this.#leiro[key].max}"
    
    ">
    <div class="valid lathato">OK</div>
    <div class="invalid lathato">${this.#leiro[key].valid}</div>
  </div>
    `
    this.formelem.append(txt)
    

}
#sajatEsemenyKezelo(esemenynev){
    console.log(esemenynev)
    const esemenyem = new CustomEvent(esemenynev, {detail:this})
    window.dispatchEvent(esemenyem)
}


}
export default View