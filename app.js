 
let NumeroSecreto = 0;
let intentos= 0;
let listaNumerosSorteados = [];
let= numeroMaximo = 10;

 
 
  function asignarTextoElemento(Element,Text) {                 //coloca titulos a h1 y parrafos

    let elementoHtml = document.querySelector(Element);
    elementoHtml.innerHTML= Text; 
 }


function verificarIntento(){

    //let numeroDeUsuario=document.querySelector(input)  //se podria capturar el valor escripto por el usuario usando el querySelector

    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);  // captura valor escrito por el usuario por medio del Id
     //console.log(numeroDeUsuario);

    if (numeroDeUsuario === NumeroSecreto){
          
      asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'Intento' : 'Intentos'}`); 

      document.getElementById("reiniciar").removeAttribute('disabled'); // para poder activar el boton nuevo juego
     }  
      
     // el usuario no acerto

      else if (numeroDeUsuario > NumeroSecreto ){

      asignarTextoElemento ('p', 'El numero secreto es menor'); 
      
     } else {
       asignarTextoElemento('p', 'el numero secreto es mayor');


     } 
      intentos ++;
      limpiarCaja(); //invocamos a la funcion para que limpie la caja de texto 
    }




function generarNumeroSecreto(){                          //crea un numero random entre 1 a 10

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1 ;  //genera el numero aleatorio

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);

   // Si ya sorteamos todos los numeros

   if (listaNumerosSorteados.length == numeroMaximo){

    asignarTextoElemento("p", "Ya se sortearon todos los números posibles")

   } else {



    if (listaNumerosSorteados.includes(numeroGenerado))   //verifica que no este en la matrix - genera true o false
      {
          return generarNumeroSecreto();  //recursividad  //si esta ejecuta nuevamente la funcion para generar el numero aleatorio

    } else {

      listaNumerosSorteados.push(numeroGenerado); // si el numero no esta en la matrix lo agrega al final

      return numeroGenerado;                      // retorna el numero aleaorio
    }

    //si el numero generado esta incluido en la lista
     }
}

function reiniciJuego() {

  // lipiar caja
  limpiarCaja();
  //indicar mensaje de intervalo de numeros
  condicionesIniciales();
  //generar el numero aleatorio
   // inicializar el numero de intentos
   

  //deshabilitar el boton de nuevo juego
 document.querySelector('#reiniciar').setAttribute('disabled','true'); //para deshabilitar el boton reinicia el juego


}

function condicionesIniciales(){

asignarTextoElemento('h1',"Juego del número secreto");            // llamado a la funcion para cambio de titulos
asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`);

NumeroSecreto = generarNumeroSecreto();
intentos= 1;

//console.log(NumeroSecreto);
}


condicionesIniciales();  // llamado a la funcion para cambio de titulos
            



function limpiarCaja()
{
//let valorCaja = document.querySelector('#valorUsuario')     //para borrar el campo de texto.  como se usa querySelector debemos anteponer el # al nombre del id
//valorCaja.value='' ;

// se puede simplificar de esta forma

document.querySelector('#valorUsuario').value="";


}




 