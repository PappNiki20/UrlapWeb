import View from "../View/UrlapView.js"
import Model from "../Model/UrlapModel.js"
class Controller{
    constructor(){
        console.log("Const")
        this.Model = new Model()
        this.view =new View($(".urlap"), this.Model.leiro)
        /*console.log(this.Model.getleiro())
        console.log(this.Model.leiro)
        console.log(this.Model.leiro.nev)
        console.log(this.Model.leiro.szul.placeholder)
        console.log(this.Model.leiro.szul.regex.min)
        console.log(this.Model.leiro.nev.type)*/
        $(window).on("valid", () => {
            console.log(event.detail)
        })


    }

}
export default Controller