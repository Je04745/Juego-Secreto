let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMáximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El Número Secreto es Menor');
        } else {
            asignarTextoElemento('p','El Número Secreto es Mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMáximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMáximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números Posibles');
    } else {
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número Secreto!');
    asignarTextoElemento('p',`Indica un Número del 1 al ${numeroMáximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego() {
    //Limpiar Caja 
    limpiarCaja();
    //Indicar el mismo mensaje del Inicio
    //Generar el número aleatorio
   //Inicializar el número de Intentos 
       condicionesIniciales();
    //Deshabilitar de nuevo el botón
document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();