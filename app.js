/*
let titulo = document.querySelector("h1");
titulo.innerHTML = "Bienvenidos al juego";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Ingresa un numero del 1 al 10";
*/
let numeroDeUsuario = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return 
}

function verificarIntento(){
    //alert("Le di click al boton intentar");
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); //Aqui estamos trayendo el dato del input 

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); //Aqui utlizamos los operadores ternearios 
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //El usuario no acerto 
        //asignarTextoElemento("p", "Sigue intentando");
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El numero es menor");

        }else{
            asignarTextoElemento("p", "El numero secreto es mayor");

        }
        intentos ++;
        limpiarCaja();
        
    }
    return 
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';//Aqui limpiamos nuestra cajita 
}




//let numeroSecreto = generarNumeroSecreto(); //Esta es la variable global que se iguala a una funcion 
//console.log(numeroSecreto);





function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1; //Aqui se retorna la variable global

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posbiles");//Aqui le decimos al usuario que ya se dieron todos los numeros posbles del 1 al 10 
    }else{
        if(listaNumeroSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto
        }else
        {
            listaNumeroSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }

}
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);

}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true")
}


condicionesIniciales();
//Nos quedamos en la condicional 