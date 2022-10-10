/*  creamos un arrays  para las notas del estudiante*/
/* let notasArray=[]
let promedio */
/* funcion */
/* const notasActuales = (notas) => 
{
    while(notas <0 || notas >5){
        notas = +prompt("ingrese otra vez la nota");
    }
    notasArray.push(notas)
}  */
/* 
for (let i = 0; i < 4; i++) { */
    /* formas de concatenar */
    /* let notas = prompt("ingrese la nota"+ i+1) */
/*     let notas = +prompt(`ingre su nota ${i+1}`)
    notasActuales(notas)  
} */

/* console.log(notasArray)

const sumaDeNotas= (array) =>
{
    promedio= array.reduce((a,b) => a+b)/array.length

} */
/* metodos de el arrays */
/* push:agrega datos al final del array */
/* pop:elimina el ultimo dato del array */
/* unshift:agrega al array */
/* shift:agrga elemntos al array */
/* sort:ordena el array */
/* reverse: voltear el array */

// function sumar()
// /* queryselector es un selector Css y trae el primero elemento que tenga relacion con eso */
// {
//     let valorUno=+(document.querySelector('#valorUno').value) 
//     let valorDos= parseInt(document.getElementById('valorDos').value)
//     document.getElementById('resultado').innerHTML=valorUno+valorDos
// }
// function restar()
// {
//     let valorUno= parseInt(document.getElementById('valorUno').value) 
//     let valorDos= parseInt(document.getElementById('valorDos').value)
//     document.getElementById('resultado').innerHTML=valorUno-valorDos   
// }
// function multiplicar()
// {
//     let valorUno= parseInt(document.getElementById('valorUno').value) 
//     let valorDos= parseInt(document.getElementById('valorDos').value)
//     document.getElementById('resultado').innerHTML=valorUno*valorDos
// }
// function dividir()
// {
//     let valorUno= parseInt(document.getElementById('valorUno').value) 
//     let valorDos= parseInt(document.getElementById('valorDos').value)
//     document.getElementById('resultado').innerHTML=(valorUno/valorDos).toFixed(3)
// }
/* let valorUno=+(document.getElementById('valorUno').value) 
let valorDos=+(document.getElementById('valorDos').value)
let resultado=document.getElementById('resultado')
function sumar()
{
    resultado.innerHTML= valorUno+valorDos
} */
/* //////////////////////////////////////////////////////////////////////////////////////// */
/* ejercicio clase */
/* ejemplo 1: creando lista HTML con un arra */
const opciones= ['Modulo 1','Modulo 2','Modulo 3', 'Moldulo 4']

function generarListaOrdenada(vec)
{
    let s= ''
    function comienzo()
    {
        s= '<ol>'
    }
    function fin()
    {
        s=  s +'<ol>'
    }
    /* ejecutar funcion comienzo */
    comienzo()
    /* llenar la lista <ol> */
   for (let f = 0; f < vec.length; f++) 
   {
        s = s +'<li>' + vec[f] +'</li>'
    
   }
   /* ejecutar la funcion fin */
   fin()
   return s;

}

document.getElementById('div1').innerHTML= generarListaOrdenada(opciones)
/* ejemplo 2: creando div con un array  */
const numPrueba =[2,4,6,8,10,12]
function prueba(arrayLista) 
{
    let v=''
    for (let index = 0; index < arrayLista.length; index++) 
    {
       v += '<div>' + arrayLista[index] +'</div>'      
    }
    return v
}
document.getElementById('array1').innerHTML= prueba(numPrueba)
/* opcion 2 */
/* const mtdMostrar = () => 
{
    numPrueba.forEach((valor, i)=>
    {
        alert("numero" +i+"["+valor+"]")
    })
}
mtdMostrar();
 */
/* opcion 3 */
/* function mostrarDom(elemento, arr) 
{
    for (let index = 0; index < arr.length; index++) 
    {
        document.getElementById(elemento).innerHTML+= '<div>' ${arr[index]} '</div>'
        
    }  
    /* opcion 4 */ 
  /*   arr.array.forEach(valor => 
    {
        document.getElementById(elemento).innerHTML+='<div>'
        
    }); 
}  */
/* ///////////////////////////////////////////////////// */
/* componentes de formulario */
/* una funcion para capturar dos datos de caja de texto */
let resul  = 0;
function calcular() 
{
    let numUno = document.getElementById("n1").value,
    numDos = document.getElementById("n2").value;
    if (numUno>0 && numDos>0) 
    {
        resul = parseInt(numUno) + parseInt(numDos)
    
    }else
    {
        alert

    }
    
     document.getElementById("formRes").value = resul
}

/* ejercicio 2 */
window.onload = function() 
{
    document.querySelector("#sumar").onclick = sumar
    document.querySelector("#restar").onclick = restar
    document.querySelector("#multiplicar").onclick = multiplicar
    document.querySelector("#dividir").onclick = dividir
}

let result = 0;
function sumar() 
{
    numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value 
    result = parseInt(numUno) + parseInt(numDos)
}
function restar() 
{
    numUno = document.getElementById("nUno").value,
    numDos = document.getElementById("nDos") .value,
    result = parseInt(numUno) - parseInt(numDos)
}
function multiplicar() 
{
    numUno = document.getElementById("nUno").value,
    numDos = document.getElementById("nDos") .value,
    result = parseInt(numUno) * parseInt(numDos)
}
function dividir() 
{
    numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    result = parseInt(numUno) / parseInt(numDos)
}
function calcularBoton()
{
    document.querySelector("#resul").value = result
}

/* //////////////////////////////////////////////// */
/* ejercicio 3 */
let num;
function cuentaRegre() 
{
    document.getElementById("tiempo").value = num
    num--
    if (num> 0) 
    {
       setTimeout(cuentaRegre, 1000)
    }
}


function datos() 
{
    num =+ document.getElementById("num").value
    cuentaRegre()
}
/* ////////////////////////////////////////////////// */
/* ejecicio 7 */
let color= document.getElementById('select1');
function cambiarColor() 
{
    document.getElementById('text1').value = color.selectedIndex
    document.getElementById('text2').value = color.options[color.selectedIndex].text
    document.getElementById('text3').value = color.options[color.selectedIndex].value
    let valuecolor = color.options[color.selectedIndex].value
    document.getElementById('valuecolor').value = ("#"+valuecolor)  
    
}
/*  el evenentlistener es el que esta pendiente de los eventos o agregar eventos*/
color.addEventListener('change', cambiarColor );
/* ///////////////////////////////////// */
/* ejercicio 5 textarea */
const controlarCaracteres = () =>
{
    let tamTextarea = document.getElementById('description')
    if (tamTextarea.value.length == 0) {
        alert('campo de texto vacío')
        
    }else if (tamTextarea.value.length > 50) {
        alert(' Texto debe ser de 50max')
        
    }else{
        alert(' Tamaño de texto correcto')

    }
}
/* funcion caracteres */
let boton= document.getElementById('btnTextArea')
boton.addEventListener("click", controlarCaracteres);


/* ///////////////////////////////////////////////// */
/* ejercicio 6 *
/*  expresiones regulares*/

/* PATRON SE CREA CON SLASH INICIA ^ FINALIZA $ */
let patronStartLet = /^[a-zA-Z]/;
let patronVocales = /[aeiouAEIOUáéíóú]/;
/* let  textRegular= document.getElementById(`textRegular`); */

let textoAfirmar = "Ha ingresado los caracteres correctamente";
let textoNegar = "Los caracteres no están correctos";

function validarCaracteres() 
{    
    let textoExp = document.getElementById("txtCar").value;
    if(patronStartLet.test(textoExp) && patronVocales.test(textoExp))
    {
        textRegular.innerHTML = textoAfirmar;
        textRegular.classList.remove("text-danger")
        textRegular.classList.add("text-success")
        /* document.getElementById(`textRegular`).innerHTML = textoAfirma; */
    }
    else
    {
        textRegular.innerHTML = textoNegar;
        textRegular.classList.remove("text-success")
        textRegular.classList.add("text-danger")
        /* document.getElementById(`textRegular`).innerHTML = textoNegar; */
    }
} 


let btn4 = document.getElementById("btnRegular");
btn4.addEventListener('click',validarCaracteres);

/* ejemplo 2 */

let patronNumLet = /^[a-zA-Z0-9]*$/
let patronNumeros = /[0-9]{10}/

let alertTexto2 = document.getElementById(`textCar2`);

function validarNumeros()
{
    let textoVali = document.getElementById(`textRegular2`).value;
    
    if(patronNumLet.test(textoVali) && patronNumeros.test(textoVali))
    {
        textRegular2.innerHTML = textoAfirmar;

        textRegular2.classList.remove("text-danger")
        textRegular2.classList.add("text-success")
    }
    else
    {
        textRegular2.innerHTML = textoNegar;
        textRegular2.classList.remove("text-success")
        textRegular2.classList.add("text-danger")
    }
}
let btn5 = document.getElementById(`btnRegular2`);
btn5.addEventListener(`click`,validarNumeros)


/* ejemplo 3 */
let alertext= document.getElementById(`alert`)

let patron = /^607[0-9]{7}$/;
function validarTelefono ()
{
    let numero = document.getElementById(`numeroalert`).value
    if (patron.test(numero)) 
    {
        alertext.innerHTML = `correcto`
    
        
    }else{
        alertext.innerHTML =  `incorrecto debe iniciar con 607`
    }
}
/* eventos de teclado */
/* ejercicio 9 */
/* input  se va activar cuando se cambia el valor del value */
let input = document.querySelector(`#input`)
let text = document.getElementById(`int`)
/*escuchador de eventos */
input.addEventListener(`input`, evaluartext)
function evaluartext() 
{
    text.innerText = input.value
   
}
/* ejericio 2 */
let canticaract = document.getElementById(`carat`)
let texto = document.getElementById(`intetx`)
canticaract.addEventListener(`input`,evaluarcaract)
/* para que se muestre, tambien evalua por el tamaño*/
texto.innerText = `faltan: ${50 - canticaract.value.length} caracteres`
function evaluarcaract() 
{
    /* cada que el esuchador haga un evento cambie */
    texto.innerText = `faltan: ${50 - canticaract.value.length} caracteres`

    if (canticaract.value.length==50) 
    {
        alert(`ya tiene 50 caracteres`)

    }
   
}
/* NOTAS: */
/* ternario solo trabaja con true y false */
/* keycode debe salir el numero del caracter, cuando salen tachados es por que salieron de la version de java o extita algun problema con el navegador */

/* ejercicio imagenes */
function muestra(numero) 
{
    let imagenes = document.images[numero].src 
    let click = document.images["imagendepantalla"] 
      click.src= imagenes
}


////////////////////////////////////////////////////////////////////////////////
/* ejercicio nodos */
const nuevoElemento= document.createElement("p")
/* creacion de un noto de texto */
const nuevoTexto = document.createTextNode("insertando nuevo texto -coex") 
/* opcion 1 */
const nuevoNodo = nuevoElemento.appendChild(nuevoTexto)
/* crear un nuevo nodo */
function fnCrear() 
{
    let contenedor = document.getElementById("nuevoTexto")
    contenedor.appendChild(nuevoNodo)

}
let btn =document.getElementById("btncrear")
btn.addEventListener("click",fnCrear)
/* funcion de copiar */
function fncopiar() 
{
    let copiarNodo =    document.getElementById("nuevoTexto")
    copia = copiarNodo.cloneNode(true)
    document.getElementById("copia").appendChild(copia)
}
let btn2 =document.getElementById("btnDuplicar")
btn2.addEventListener("click",fncopiar)
/* eliminar */
function fneliminar() 
{
    let eliminarNodo = document.getElementById("nuevoTexto") 
    eliminarNodo.parentNode.removeChild(eliminarNodo)   
}
let btn3 =document.getElementById("btnEliminar")
btn3.addEventListener("click",fneliminar)
/* ////////////////////////////////////// */
let listaElementos = document.querySelector("#elementos")

function fnAgregarElemento(Evento) 
{
    Evento.preventDefault()
    /* capturar el valor de laa caja de texto */   
    let newElement = document.getElementById("txtElemento").value 
    /* crear un nuevo elemento de la lista li */
  
    let li = document.createElement("li")
      /* crear un elemnto de tipo boton */
      let btnDelete = document.createElement("button")
      /* agregar elementos a las clases */
       li.className = "list-group-item"
       btnDelete.className = "btn btn.linght btn-outline-danger btn-sm float-end delete"
       /* agregar el nodo de textNode */
       li.appendChild(document.createTextNode(newElement))
       btnDelete.appendChild(Document.createTextNode("X"))
       listaElementos.appendChild(li)
       li.appendChild(btnDelete)
}





