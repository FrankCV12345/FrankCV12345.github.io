const urlCapturasTrabajo = "./imagenes/capturas-portafolio/trabajo/"
const urlCapturasAcademicos = "./imagenes/capturas-portafolio/academico/"


const returmItemsForPortafolio = (arregloPortafolio) => arregloPortafolio
                                                                    .map( item => "<div class='Captura'> <img loading='lazy' src='"+item.urlCaptura+"'><span>"+item.Descripcion+"</span> </div> ")
                                                                    .join()

const getHtmlItemLI = (LP) => "<li><span class='nomHablidad'>"+LP.toUpperCase()+"</span> <span class='cont-med-habilidad'><span style='width:"+hablidaddes.detallado[LP]+"%'></span></span></li>" 


let hablidaddes = {
    generales:{frondEnd: 47,backEnd:70,android:40,descktop:35., ia:5,sql:40},
    detallado:{java:65,php:40,vb:30,js:50,html:50,css:50,mySql:50,sqlServer:40,NET:35,laravel:40,jQuery:40,git:30,VueJs:40,linux:30,Android:35,bootstrap:50,Vuetify:40,Spring:50,Dart:10,Flutter:10}
}

/*Habilidades parametros para grafico radar*/
let ctx 

let  data = {
            labels: ['BackEnd', 'FrondEnd', 'IA', 'Desktop','Android','SQL'],
            datasets: [{
                data: [hablidaddes.generales.backEnd,hablidaddes.generales.frondEnd, hablidaddes.generales.ia,hablidaddes.generales.descktop
                    , hablidaddes.generales.android,hablidaddes.generales.sql],
                radius: 5,
                backgroundColor:['rgba(26, 115, 232, 0.4)','rgba(0, 77, 64, 6)','rgba(62, 39, 35, 0.6)','rgba(33, 33, 33, 0.6)','rgba(198, 40, 40, 0.6)'],
                label:'Mis Habilidades',
                borderColor:['#000']
            }]
        }

var chartOptions = {
                
                scale: {
                    responsive: true,
                    ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    stepSize: 20
                    },
                    pointLabels: {
                       fontSize: 12
                    }
                }
            };

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
            respuesta:"<ul>"+getHtmlItemLI("java")+getHtmlItemLI("Spring")+getHtmlItemLI("php") +getHtmlItemLI("vb")+getHtmlItemLI("js")+getHtmlItemLI("html")+
            getHtmlItemLI("css")+getHtmlItemLI("mySql")+getHtmlItemLI("sqlServer")+getHtmlItemLI("NET")+getHtmlItemLI("laravel")+getHtmlItemLI("jQuery")+
            getHtmlItemLI("git")+getHtmlItemLI("VueJs")+getHtmlItemLI("linux")+getHtmlItemLI("Android")
            +getHtmlItemLI("bootstrap")+getHtmlItemLI("Vuetify")+getHtmlItemLI("Dart")+getHtmlItemLI("Flutter")+"</ul>"
        }
    ]
}

let JsonInicio = {
    titulo:"Inicio",
    Contenido:[
        {
            pregunta:"Franklin Yoan Campos Vilchez ",
            respuesta:"Desarrollador Web"
        },{
            pregunta:"¿Que hago?",
            respuesta:"He adquirido habilidades en :  <div class='contenedor-radar' > <canvas width='400' height='500'  id='chartRadar'></canvas></div>"
        },
        {
            pregunta:"5 cosas sobre mi : ",
            respuesta:"<ol><li>Tengo facilidad para el autoaprendizaje.</li> <li>Me comprometo con mi trabajo.</li><li>Creo que todos podemos aprender.</li><li> Me gusta jugar con JS y Html.</li><li>Siempre estoy aprendiendo algo nuevo.</li></ol>"
        },
        {
            pregunta:"¿Dónde estoy?",
            respuesta:"A la fecha 02/06/2020 estoy colaborando en el proyecto <a href='https://traduciendoelderecho.github.io/'>Traduciendo el Derecho</a> "
            //"A la fecha 25/10/2019, estoy trabajando en el mantenimiento del sistema OBSERVATORIO DE PRECIOS DE MECICAMENTOS  para DIGEMID ( dependencia del Ministerio de Salud ). "
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
            respuesta:"<ul><li>Spring Boot</li><li>VueJS + Vuetify </li><li>Laravel</li><li>Android (JAVA)</li><li>Flutter (Introducción)</li></ul>"
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
        {
        urlCaptura:urlCapturasTrabajo+"traduciendoElDerecho.png",
        Descripcion:"<a target='_blank' href='https://traduciendoelderecho.github.io/'>Traduciendo el Derecho </a> , Es un sitio web  orientado a personas interesada en conocer temas sobre Derecho, Esta desarrollado con JS y Java para hacer la conversion de las publicaciones en word a formato JSON."
        } ,
        {urlCaptura:urlCapturasTrabajo+"medicamentos-esenciales.png",Descripcion:"<b>Aplicativo para Medicamentos Esenciales</b> Este es un aplicativo web desarrollado en .NET( C# ) con JQuery , este fue desarrollado en respuesta a la Resolución Ministerial N° 1097-2019-MINSA, El objetivo de este aplicativo es identificar las farmacias o boticas privadas que tienen estos medicamentos, se pueden aplicar algunos filtros por Departamento, provincia o distrito."},
        {urlCaptura:urlCapturasTrabajo+"capturavistacontrolFER.jpg",Descripcion:"<b>App de control para Robot</b>, este fue un  proyecto de un app android y una serie de aplicaciones de escritorio las cuales en conjunto sirven para la transmisión de audio y video  para la pc del robot , además de esto el App envía órdenes de movimiento a la pc y la pc al arduino . Las tecnologías que use fue java desktop , java en android, php(para hacer un login) <a href='https://drive.google.com/open?id=115PAVWLudRaWyW-tye8C0_w7t7jlM9NO' target='_blank'>Video demo</a>."},
        {urlCaptura:urlCapturasTrabajo+"captura-lista-cotizaciones-Plataformapraco.png",Descripcion:"<b>Plataforma praco</b> es un sistema web en el cual se puede generar cotizaciones , ordenes de compra  y cartas  de garantía para producto. Este fue desarrollado con laravel 5.5 y VueJS en este caso yo me encargue del API Rest y de darle mantenimiento al FrontEnd."},
        {urlCaptura:urlCapturasTrabajo+"STACK-MANAGER.PNG",Descripcion:"<b>PICK </b>, es un sistema desktop que sirve para tratar archivos CSV los cuales luego serán usados para hacer circuitos impresos, este proyecto está desarrollado en VB sobre el framework .NET."},
        {urlCaptura:urlCapturasTrabajo+"modifica-ambiente-SRD.PNG",Descripcion:"<b>SRD</b> , es  un sistema web para registrar datos de ambientes en edificios para luego ser analizados . Este proyecto fue desarrollado con VueJS y firebase."}   
    ],
    academicos:
    [   {urlCaptura:urlCapturasAcademicos+"web_sga.png",Descripcion:"<b> SGA WEB</b> Es un proyecto desarrollado con VueJs, el cual consume un API Rest desarrollado en Spring framework(java) y la BD fue desarrollada en SQL SERVER, Este web sirve para que los roles de administrado, secretaria y profesor puede llevar acabo algunas de sus actividades por ejemplo ingresar notas de alumnos , el administrador puede crear nuevas secciones y la secretaria puede procesar soliciudes de alumnos. "},
        {urlCaptura:urlCapturasAcademicos+"app_sga.png",Descripcion:"<b>SGA APP Android</b> es un proyecto de desarrollado con java y android studio , esta app sirve como complemento para el sistema de gestion academica en esta app el alumno puede ver sus notas de sus cursos , ingresar solicitudes/ver el estado de las mismas y puede calificar a sus profesores ademas de poder ver el perfil del profesor de acuerdo a otras calificaciones y comentarios."},
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
            respuesta:"<div class='contenedorItemsPortafolio'> "+returmItemsForPortafolio(JsonCapturasPortafolio.trabajos)+"</div>"
        },
        {
            pregunta:" Academicos : ",
            respuesta:"<div class='contenedorItemsPortafolio'> "+returmItemsForPortafolio(JsonCapturasPortafolio.academicos)+"</div>"
        }
    ]
}


