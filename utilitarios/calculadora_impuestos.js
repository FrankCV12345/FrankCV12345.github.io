let UIT_VAL =  4300
let cantidadUITs = 7
let elementShowBalance =  document.getElementById("saldo")

document.getElementById("txtbrutoAnual").addEventListener("keyup",function(element){
    let value =  element.target.value;
    elementShowBalance.innerText = isEmpty(value) ? "--" : obtenerExcedente(value)
})
    // TODO : completar algoritmo 
function obtenerExcedente(ingresoBurtoAnual){
    let ingresoBrutoAnualFloat =  parseFloat(ingresoBurtoAnual);
    let maxWithOutTax =   (UIT_VAL * cantidadUITs );
   
    if(ingresoBrutoAnualFloat > maxWithOutTax){
        return ingresoBrutoAnualFloat - maxWithOutTax;
    }else if(ingresoBrutoAnualFloat === maxWithOutTax){
        return ingresoBrutoAnualFloat
    }else{
        return ingresoBrutoAnualFloat;
    }
}
function isEmpty(string){
    return (!string || string.length === 0)
}
