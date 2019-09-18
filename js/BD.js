
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
            pregunta:"¿Por que escoji ser desarrollador?",
            respuesta:"Me gusta crear , me siento lleno cuando veo  que el fruto de mi esfuerso es de utilidad para las personas."
        },
        {
            pregunta:"¿En que area me gustaria desarrollarme?",
            respuesta:"BackEnd , me  parece un mundo muy entretenido pero en general todo a lo que conlleve programar."
        },
        {
            pregunta:"¿Mi leguaje favorito?",
            respuesta:"No lo tengo :( , hasta ahora todo lo que probe  tiene sus ventajas y desventajas pero considero que toda tecnologia tiene su utlidad en el momento adecuado. </br> Aunque de ves encuando me gusta jugar en el FrondEnd , desarrolle esta pagina con Html,CSS y JS sin frameworks( me gusta probarme que aun no pierdo mi toque ;) )"
        },
        {
            pregunta:"Mis habilidades Tecnicas",
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
            pregunta:"¿Que hago?",
            respuesta:"En todo este tiempo  eh adquirido habilidades en : <ul><li>Frond-End &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='cont-med-habilidad'><span style='width:"+hablidaddes.generales.frondEnd+"'></span></span></li><li>Back-End &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='cont-med-habilidad'><span style='width:"+hablidaddes.generales.backEnd+"'></span></span></li><li>Android(Java) &nbsp;&nbsp;&nbsp;<span class='cont-med-habilidad'><span style='width:"+hablidaddes.generales.android+"'></span></span></li><li>Desktop(VB .NET) <span class='cont-med-habilidad'><span style='width:"+hablidaddes.generales.descktop+"'></span></span></li></ul>"
        },
        {
            pregunta:"¿Donde estoy?",
            respuesta:"A la fecha 16/09/2019, estoy participando en la cominidad de Hack space, Aprendiendo .NET framework."
        }
    ]
}
let JsonAportes ={
    titulo:"Redes",
    Contenido:[
        {
            pregunta:"Linkedin : ",
            respuesta:"<a href='https://www.linkedin.com/in/frankli-yoan-campos-vilchez/'> ir  --></a>"
        },
        {
            pregunta:"Intagram : ",
            respuesta:"<a href='https://www.instagram.com/frankcamv/'> ir  --></a>"
        },
        {
            pregunta:"Facebook : ",
            respuesta:"<a href='https://www.facebook.com/frank12345687'> ir  --></a>"
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
        {urlCaptura:urlCapturasTrabajo+"capturavistacontrolFER.jpg",Descripcion:"App de control para Robot, este fue un  proyecto de un app android y una serie de aplicaciones de escritorio las cuales en conjunto sirven para la transmisión de audio y video  para la pc del robot , además de esto el App envía órdenes de movimiento a la pc y la pc al arduino . Las tecnologías que use fue java desktop , java en android, php(para hacer un login) <a href='https://drive.google.com/open?id=115PAVWLudRaWyW-tye8C0_w7t7jlM9NO' target='_blank'>Video demo</a>."},
        {urlCaptura:urlCapturasTrabajo+"captura-lista-cotizaciones-Plataformapraco.png",Descripcion:"Plataforma praco es un sistema web en el cual se puede generar cotizaciones , ordenes de compra  y cartas  de garantía para producto. Este fue desarrollado con laravel 5.5 y VueJS en este caso yo me encargue del API Rest y de darle mantenimiento al FrontEnd "},
        {urlCaptura:urlCapturasTrabajo+"STACK-MANAGER.PNG",Descripcion:"PICK , es un sistema desktop que sirve para tratar archivos CSV los cuales luego serán usados para hacer circuitos impresos, este proyecto está desarrollado en VB sobre el framework .NET."},
        {urlCaptura:urlCapturasTrabajo+"modifica-ambiente-SRD.PNG",Descripcion:"SRD , es  un sistema web para registrar datos de ambientes en edificios para luego ser analizados . Este proyecto fue desarrollado con VueJS y firebase."}        
    ],
    academicos:
    [
        {urlCaptura:urlCapturasAcademicos+"SAT.PNG",Descripcion:"SAT , es  un sistema web de asignación de tareas en el que un supervisor puede asignarle tareas diarias a un empleado.  Este fue un proyecto desarrollado con java web y sql server."},
        {urlCaptura:urlCapturasAcademicos+"SRD.png",Descripcion:"SRD , es  un app android  para registrar datos y luego procesarlos de ambientes de edificios  , luego procesarlos y analizarlos . Este proyecto fue desarrollado con java en android , java web y SQL server."},
        {urlCaptura:urlCapturasAcademicos+"frank-pe.png",Descripcion:"Mi sitio web personal, muestro información de contacto y sobre mis aportes. Las tecnologías que uso son PHP,CSS3,HTML5,JavaScript , Jquery y la base de datos  MySQL."},
        {urlCaptura:urlCapturasAcademicos+"gestorDePedidos.png",Descripcion:"SGP, es un  proyecto de fin de curso (DAA) consiste en un sistema web cuyas funcionalidades consisten en registrar , modificar, eliminar y buscar pedidos. las tecnologías que uso son JAVA WEB (JSP ,SERVLETS),CSS3,HTML5,JavaScript, JQuery AJAX y la base de datos ORACLE 11g."}
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

function ItemParalistaDeHabilidades(LP){
    return "<li><span class='nomHablidad'>"+LP.toUpperCase()+"</span> <span class='cont-med-habilidad'><span style='width:"+hablidaddes.detallado[LP]+"'></span></span></li>" 
}
function retornaItemsPortafolio(arreglo){
    let items =""
    for(i =0 ; i<arreglo.length;i++){
        items +="<div class='Captura'> <img src='"+arreglo[i].urlCaptura+"'><span>"+arreglo[i].Descripcion+"</span> </div> " 
       
    }
    return items
}
export {JsonSobreMi,JsonInicio,JsonAportes,JsonContacto,JsonPortaFolio}
