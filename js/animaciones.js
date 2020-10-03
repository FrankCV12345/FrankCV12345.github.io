const contMenu  = document.getElementById("contMenu")
const contMenuUl = document.getElementsByClassName("menuCont")
const barrasCortina = document.getElementsByClassName("barraCortina")
const lstcontenedoreImagenes = document.getElementsByClassName("envol-img")
const lstItemsMenu = document.getElementsByClassName("material-icons")
const contenido = document.getElementsByClassName("children")
const btnPortafolio = document.getElementById("btnPortafolio")
const estadoActivoMenu = false; 
let CantidadClicksElemento = 1 ;

window.addEventListener('DOMContentLoaded',function(){
    mover()
    llenaContenido(JsonInicio)
})


btnPortafolio.addEventListener('click',function(){
    llenaContenido(JsonPortaFolio)
})

function mover(){
    for( let i=0; i< lstItemsMenu.length; i++ ){
        lstItemsMenu[i].addEventListener('click',function(){
            let altoFirst  = lstItemsMenu[0].style.marginTop
            let Objt = DevuelveAltoAndPosicion(this)
            for(let i =0 ; i < lstItemsMenu.length;i++){
                lstItemsMenu[i].style.color = "grey"
            }
            this.style.color = "#1a73e8";
            let altoSelecionado =  Objt.Alto
                if(isNaN(parseInt(altoFirst) * - 1)){
                    lstcontenedoreImagenes[0].style.marginTop="-" + altoSelecionado
                }else{
                    lstcontenedoreImagenes[0].style.marginTop="-" +  ((parseInt( altoFirst ) * - 1)  + (altoSelecionado * 1))   
                }
                //showMenu()
                switch (Objt.Indice){
                    case 0:
                            llenaContenido(JsonInicio)
                        break;
                    case 1:
                            llenaContenido(JsonEstudios)
                        break;
                    case 2:
                            llenaContenido(JsonContacto)
                        break;
                    case 3 :
                            llenaContenido(JsonSobreMi)
                        break;
                    case 4:
                            llenaContenido(JsonPortaFolio)
                        break;
                    default:
                            console.error("Indicie no econtrado") 
                        break;   
                }
                CantidadClicksElemento += 1
             })
    }
}



function DevuelvePosicion( nodeList , elementoABuscar){
        let Tamanio = nodeList.length
        for(let i =0  ; i < Tamanio; i++){
            if(nodeList[i] == elementoABuscar){
                return i;
            }
        }
}

function DevuelveAltoAndPosicion(item){
    let indice = DevuelvePosicion(lstItemsMenu,item)
    let Alto = 0 ;
    if(indice > 0){
        for( let i = indice ;  i > 0 ; i-- ){
            Alto += lstcontenedoreImagenes[indice].clientHeight 
        }
    }else {
        Alto = 0
    }
    return {Alto :Alto,Indice:indice}
}

function llenaContenido(Json){
    
    if(contenido[1].hasChildNodes()){
        while(contenido[1].childNodes.length >=1)
        {
            contenido[1].removeChild(contenido[1].firstChild)
        }
    }
        //creo nodos para llenar el contenido 
        CreaNodosParaContenido(Json)
        //muevo el scroll para que se ponga al inicio de la pagina 
        contenido[1].scrollTop = 0
        // muevo los contenedores de pregunta/respuesta para que se muestren con una transicion
    setTimeout(function(){
        let Elementos = document.getElementsByClassName("contenedor-pregunta")
        for( let x = 0 ; x < Elementos.length;x++){
            Elementos[x].style.marginLeft = "0"
        }
    }, 300)

}
function CreaNodosParaContenido(json){

    for(let i = 0 ; i < json.Contenido.length; i ++){
        let Pregunta = document.createElement("h2")
        let Respuesta = document.createElement("p")
        let Contenedor = document.createElement("div")
        let linea = document.createElement("hr")
        Contenedor.setAttribute("class","contenedor-pregunta")
            if((i%2) == 1){
                Contenedor.style.marginLeft = "-110%"
            }else{
                Contenedor.style.marginLeft = "110%"
                }
            Pregunta.innerHTML = json.Contenido[i].pregunta
            Respuesta.innerHTML = json.Contenido[i].respuesta
            Contenedor.appendChild(Pregunta)
            Contenedor.appendChild(linea)
            Contenedor.appendChild(Respuesta)
            
            contenido[1].appendChild(Contenedor)
            
    }

    if(json == JsonPortaFolio || json == JsonSobreMi || json== JsonInicio){
        contenido[1].style.display ="block"
        if(json == JsonInicio){
            ctx = document.getElementById("chartRadar").getContext("2d")

            let myChart= new Chart(ctx,{
                type:"radar",
                data:data,
                options: chartOptions 
            });
        }
    }else{
        contenido[1].style.display ="flex"
    }
      
}


