let  iconbarras = document.getElementById("iconBarras")
let  lineasDentrodeiconBarras = iconbarras.children
let contMenu  = document.getElementById("contMenu")
let contMenuUl = document.getElementsByClassName("menuCont")
let barrasCortina = document.getElementsByClassName("barraCortina")
let lstcontenedoreImagenes = document.getElementsByClassName("envol-img")
let lstItemsMenu = document.getElementsByClassName("textoItemMenu")
let contenido = document.getElementsByClassName("children")
let estadoActivoMenu = false; 
let CantidadClicksElemento = 1 ;
const urlCapturasTrabajo = "./imagenes/capturas-portafolio/trabajo/"
const urlCapturasAcademicos = "./imagenes/capturas-portafolio/academico/"

let hablidaddes = {
    generales:{frondEnd: 45,backEnd:50,android:37,descktop:35},
    detallado:{java:40,php:40,vb:30,js:50,html:50,css:50,mySql:50,sqlServer:40,NET:30,laravel:40,jQuery:40,git:30,VueJs:40,linux:30,Android:35,bootstrap:50,Vuetify:40}
}
let JsonSobreMi = {
    titulo:"Sobre mi",
    Contenido:[
        {
            pregunta:"¿Por que escogí ser desarrollador?",
            respuesta:"Me gusta crear , me siento lleno cuando veo  que el fruto de mi esfuerzo es de utilidad para las personas."
        },
        {
            pregunta:"¿En que área me gustaría desarrollarme?",
            respuesta:"BackEnd , me  parece un mundo muy entretenido pero en general todo a lo que conlleve programar."
        },
        {
            pregunta:"¿Mi leguaje favorito?",
            respuesta:"No lo tengo , hasta ahora todo lo que probé  tiene sus ventajas y desventajas pero considero que toda tecnología tiene su utilidad en el momento adecuado.</br>Aunque de ves en cuando me gusta jugar en el FrondEnd ."
        },
        {
            pregunta:"Mis habilidades Técnicas",
            respuesta:"<ul>"+ItemParalistaDeHabilidades("java")+ItemParalistaDeHabilidades("php") +ItemParalistaDeHabilidades("vb")+ItemParalistaDeHabilidades("js")+ItemParalistaDeHabilidades("html")+
            ItemParalistaDeHabilidades("css")+ItemParalistaDeHabilidades("mySql")+ItemParalistaDeHabilidades("sqlServer")+ItemParalistaDeHabilidades("NET")+ItemParalistaDeHabilidades("laravel")+ItemParalistaDeHabilidades("jQuery")+
            ItemParalistaDeHabilidades("git")+ItemParalistaDeHabilidades("VueJs")+ItemParalistaDeHabilidades("linux")+ItemParalistaDeHabilidades("Android")
            +ItemParalistaDeHabilidades("bootstrap")+ItemParalistaDeHabilidades("Vuetify")+"</ul>"
        }
    ]
}
let JsonInicio = {
    titulo:"Inicio",
    Contenido:[
        {
            pregunta:"Franklin Yoan Campos Vilchez ",
            respuesta:"Desarrollador Web, Android y Desktop"
        },{
            pregunta:"¿Que hago?",
            respuesta:"He adquirido habilidades en : <ul><li><span class='nomHablidadGeneral'>Frond-End</span><span class='cont-med-habilidad'><span style='width:"+hablidaddes.generales.frondEnd+"%'></span></span></li><li> <span class='nomHablidadGeneral'>Back-End</span><span class='cont-med-habilidad'><span style='width:"+hablidaddes.generales.backEnd+"%'></span></span></li><li><span class='nomHablidadGeneral'> Android(Java)</span><span class='cont-med-habilidad'><span style='width:"+hablidaddes.generales.android+"%'></span></span></li><li><span class='nomHablidadGeneral'> Desktop(VB .NET) </span><span class='cont-med-habilidad'><span style='width:"+hablidaddes.generales.descktop+"%'></span></span></li></ul>"
        },
        {
            pregunta:"5 cosas sobre mi : ",
            respuesta:"<ol><li>Tengo facilidad para el autoaprendizaje.</li> <li>Me comprometo con mi trabajo.</li><li>Creo que todos podemos aprender.</li><li> Me gusta jugar con JS y Html.</li><li>Siempre estoy aprendiendo algo nuevo.</li></ol>"
        },
        {
            pregunta:"¿Dónde estoy?",
            respuesta:"A la fecha 25/10/2019, estoy trabajando en el mantenimiento del sistema OBSERVATORIO DE PRECIOS DE MECICAMENTOS  para DIGEMID ( dependencia del Ministerio de Salud ). "
            //respuesta:"A la fecha 16/09/2019, estoy participando en la comunidad de <a href='https://www.facebook.com/HackSpacePeru' target='_blank'>Hack space</a>, Aprendiendo .NET framework y un poco de Data Science."
        }
    ]
}
let JsonEstudios ={
    titulo:"Estudios",
    Contenido:[
        {
            pregunta:"IDAT",
            respuesta:"<ul><li>Informática</li></ul>"
        },
        {
            pregunta:"Udemy",
            respuesta:"<ul><li>VueJS + Vuetify </li><li>Laravel</li><li>Android (JAVA)</li></ul>"
        },
        {
            pregunta:"CEPS UNI",
            respuesta:" <ul><li>AutoCAD I</li><li>AutoCAD II</li><li>AutoCAD III</li></ul>"
        }

    ]
}
let JsonContacto = {
    titulo:"Contacto",
    Contenido:[
        {
            pregunta:"¿Como te contacto?",
            respuesta:"Mi correo es : <b> frankfdbz@gmail.com</b> /  <a href='https://www.facebook.com/frank12345687' target='_blank'>Mi facebook </a>  "
        }
    ]
}
let JsonCapturasPortafolio = {
    trabajos:
    [
        {urlCaptura:urlCapturasTrabajo+"medicamentos-esenciales.png",Descripcion:"Aplicativo para Medicamentos Esenciales Este es un aplicativo web desarrollado en .NET( C# ) con JQuery , este fue desarrollado en respuesta a la Resolución Ministerial N° 1097-2019-MINSA, El objetivo de este aplicativo es identificar las farmacias o boticas privadas que tienen estos medicamentos, se pueden aplicar algunos filtros por Departamento, provincia o distrito."},
        {urlCaptura:urlCapturasTrabajo+"capturavistacontrolFER.jpg",Descripcion:"<b>App de control para Robot</b>, este fue un  proyecto de un app android y una serie de aplicaciones de escritorio las cuales en conjunto sirven para la transmisión de audio y video  para la pc del robot , además de esto el App envía órdenes de movimiento a la pc y la pc al arduino . Las tecnologías que use fue java desktop , java en android, php(para hacer un login) <a href='https://drive.google.com/open?id=115PAVWLudRaWyW-tye8C0_w7t7jlM9NO' target='_blank'>Video demo</a>."},
        {urlCaptura:urlCapturasTrabajo+"captura-lista-cotizaciones-Plataformapraco.png",Descripcion:"<b>Plataforma praco</b> es un sistema web en el cual se puede generar cotizaciones , ordenes de compra  y cartas  de garantía para producto. Este fue desarrollado con laravel 5.5 y VueJS en este caso yo me encargue del API Rest y de darle mantenimiento al FrontEnd."},
        {urlCaptura:urlCapturasTrabajo+"STACK-MANAGER.PNG",Descripcion:"<b>PICK </b>, es un sistema desktop que sirve para tratar archivos CSV los cuales luego serán usados para hacer circuitos impresos, este proyecto está desarrollado en VB sobre el framework .NET."},
        {urlCaptura:urlCapturasTrabajo+"modifica-ambiente-SRD.PNG",Descripcion:"<b>SRD</b> , es  un sistema web para registrar datos de ambientes en edificios para luego ser analizados . Este proyecto fue desarrollado con VueJS y firebase."}        
    ],
    academicos:
    [
        {urlCaptura:urlCapturasAcademicos+"SAT.PNG",Descripcion:"<b>SAT</b> , es  un sistema web de asignación de tareas en el que un supervisor puede asignarle tareas diarias a un empleado.  Este fue un proyecto desarrollado con java web y sql server."},
        {urlCaptura:urlCapturasAcademicos+"SRD.png",Descripcion:"<b>SRD</b> , es  un app android  para registrar datos y luego procesarlos de ambientes de edificios  , luego procesarlos y analizarlos . Este proyecto fue desarrollado con java en android , java web y SQL server."},
        {urlCaptura:urlCapturasAcademicos+"frank-pe.png",Descripcion:"<b>Mi sitio web personal</b>, muestro información de contacto y sobre mis aportes. Las tecnologías que uso son PHP,CSS3,HTML5,JavaScript , Jquery y la base de datos  MySQL."},
        {urlCaptura:urlCapturasAcademicos+"gestorDePedidos.png",Descripcion:"<b>SGP</b>, es un  proyecto de fin de curso (DAA) consiste en un sistema web cuyas funcionalidades consisten en registrar , modificar, eliminar y buscar pedidos. las tecnologías que uso son JAVA WEB (JSP ,SERVLETS),CSS3,HTML5,JavaScript, JQuery AJAX y la base de datos ORACLE 11g."}
    ]

}
let JsonPortaFolio = {
    titulo:"Portafolio",
    Contenido:[
        {
            pregunta:" En el trabajo :",
            respuesta:"<div class='contenedorItemsPortafolio'> "+retornaItemsPortafolio(JsonCapturasPortafolio.trabajos)+"</div>"
        },
        {
            pregunta:" Academicos : ",
            respuesta:"<div class='contenedorItemsPortafolio'> "+retornaItemsPortafolio(JsonCapturasPortafolio.academicos)+"</div>"
        }
    ]
}
iconbarras.addEventListener("click",showMenu)
window.addEventListener('DOMContentLoaded',function(){
    mover()
    llenaContenido(JsonInicio)
})
function mover(){
    for( let i=0; i< lstItemsMenu.length; i++ ){
        lstItemsMenu[i].addEventListener('click',function(){
            let altoFirst  = lstItemsMenu[0].style.marginTop
            let Objt = DevuelveAltoAndPosicion(this)
            let altoSelecionado =  Objt.Alto
                if(isNaN(parseInt(altoFirst) * -1)){
                    lstcontenedoreImagenes[0].style.marginTop="-" + altoSelecionado
                }else{
                    lstcontenedoreImagenes[0].style.marginTop="-" +  (   (parseInt( altoFirst ) * - 1)  + (altoSelecionado * 1) )   
                }
                showMenu()
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

function showMenu(){
    if(!estadoActivoMenu){    
        lineasDentrodeiconBarras[0].style.transform = "rotate(45deg)"
        lineasDentrodeiconBarras[0].style.top="0px"
        lineasDentrodeiconBarras[0].style.backgroundColor="white"  
        lineasDentrodeiconBarras[1].style.transform = "rotate(-45deg)"
        lineasDentrodeiconBarras[1].style.top="0px"
        lineasDentrodeiconBarras[1].style.backgroundColor="white"
        contMenu.style.width = "100%"
        contMenu.style.backgroundColor ="rgba(0,0,0,0.5)"
        contMenuUl[0].style.marginLeft="0%"       
        estadoActivoMenu = true
        setTimeout(function(){
            for( let i = 0 ; i < barrasCortina.length ; i++){
                let tiempo =(i%2) == 1 ? i*50:i*100
                setTimeout(function(){
                    barrasCortina[i].style.width = "0%"
                },tiempo )
                
            }
        },500)
        console.log("Abriendo")
    }else{
        
        lineasDentrodeiconBarras[0].style.transform = "rotate(0deg)"
        lineasDentrodeiconBarras[0].style.top="2px"
        lineasDentrodeiconBarras[0].style.backgroundColor="black"  
        lineasDentrodeiconBarras[1].style.transform = "rotate(0deg)"
        lineasDentrodeiconBarras[1].style.top="6px"
        lineasDentrodeiconBarras[1].style.backgroundColor="black"  
        contMenu.style.width = "100px"
        contMenu.style.backgroundColor ="transparent"
        estadoActivoMenu = false
        contMenuUl[0].style.marginLeft="-110%"
        setTimeout(function(){
            for(let i = 0 ; i < barrasCortina.length ; i++){
                
                barrasCortina[i].style.width = "100%"
                
            }
        },500)
        console.log("cerrando")
        
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
        CreaNodosParaContenido(Json)
        contenido[1].scrollTop = 0
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
            if(json == JsonPortaFolio || json == JsonSobreMi || json== JsonInicio){
                contenido[1].style.display ="block"
            }else{
                contenido[1].style.display ="flex"
            }
    }  
}

function ItemParalistaDeHabilidades(LP){
    return "<li><span class='nomHablidad'>"+LP.toUpperCase()+"</span> <span class='cont-med-habilidad'><span style='width:"+hablidaddes.detallado[LP]+"%'></span></span></li>" 
}
function retornaItemsPortafolio(arreglo){
    let items =""
    for(i =0 ; i<arreglo.length;i++){
        items +="<div class='Captura'> <img src='"+arreglo[i].urlCaptura+"'><span>"+arreglo[i].Descripcion+"</span> </div> " 
       
    }
    return items
}