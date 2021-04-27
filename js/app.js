"use strict" // modo estricto q arroja errores de mala practica

alert('Hola desde un archivo externo');

console.log('Hola consola');
x = 3.1416 // mala practica, yaque debe ir con var
var x; // variable x declarada
//var public; // palabra reservada
var publicData = 'Hola';

var a = 10;
var b = 20;

var sum = a + b;
console.log('La suma de ' + a + ' + ' + b + ' es igual a: ', sum);
var incremento = a;
incremento ++; // incremento = incremento +1 // incremento += 1
console.log('el incremento ++ de ' + a + ' es: ', incremento)

var mayorQue = a > b;
console.log('Es ' + a + ' mayor que ' + b + ' : ' + mayorQue);

var menorQue = a < b;
console.log('Es ' + a + ' menor que ' + b + ' : ' + menorQue);

var nombre = 'Sergio';
var apellido = "Brito";
var concaTex = nombre + ' ' + apellido; // concatenacion
console.log('Los textos ' + nombre + ' y ' + apellido + ' se unen para formar: ' , concaTex);

var resultado = a > b ? 'si es mayor' : 'no es mayor'; // dos resultados
console.log('el resultado es: ', resultado);
var resultado = b > a ? 'si es mayor' : 'no es mayor'; // dos resultados
console.log('el resultado es: ', resultado);

var persona = {
    edad: 34, // numero
    deporte: 'correr' // cadena de texto    
} // objeto
console.log(typeof persona);
console.log(typeof persona.edad);
console.log(typeof persona.deporte);

var productos = 5;
for (let contador = 0; contador < productos; contador++){
    console.log('Producto #' + contador);
    //debugger;
}

var productos = 5;
while (productos > 0){
    console.log('Producto vendido');
    productos--;
    //debugger;
}

var productos = 5;
do {
    console.log('Producto vendido');
    productos--;
    //debugger;
}
while(productos>=1);

var contadore = 0;
var cuenta = 0;
for (contadore = 0;contadore <= 20; contadore++){
    if (contadore % 2 == 0){
        continue;
    }
    cuenta++;
    //debugger;
}
console.log('hay '+ cuenta + 'números impares');

///*

function saludar(){
    var saludo = 'Hola Mundo';
    console.log(saludo);
    //return saludo;
}
saludar();

function saludar(nombre, edad){ // funcion con 2 parámetros
    console.log('hola', nombre);
    console.log('edad', edad);
    var resultado = nombre + 'tiene ' + edad + ' años ';
    return resultado;
}
//saludar('yacaFx', 34); // enviar 2 parámetros q requiere la funcion
var mensaje = saludar('yacaFx', 34);
console.log(mensaje);

function parametro(numero=0){ // se preinicializa el parametro en caso de no recibir ninguno
    console.log(numero);
}
parametro(195); // ()ninguno

function cocinar(ingrediente1, ingrediente2, ...masIngredientes){ // parametro tipo Rest
    console.log('ingrediente1', ingrediente1);
    console.log('ingrediente2', ingrediente2);
    console.log('masIngredientes', masIngredientes);
}
cocinar('pollo', 'tomate', 'arroz', 'palta');

function cocinare(...masIngredientes){ // modo simple N cantidad de parámetros
    console.log('masIngredientes', masIngredientes);
}
cocinare('pollo', 'tomate', 'arroz', 'palta', 'pescado');

function cocinarte(ingrediente1, ingrediente2, ingrediente3,...otros){ // modo simple N cantidad de parámetros
    console.log('Ingrediente1', ingrediente1);
    console.log('Ingrediente2', ingrediente2);
    console.log('Ingrediente3', ingrediente3);
    console.log('otros', otros);
}
var ingredientesBase = ['pollo', 'tomate'];
cocinarte(...ingredientesBase, 'arroz', 'pescado', 'chile','pimenton');
/*
const boton = document.querySelector('.boton');
boton.addEventListener('click', function(){
    console.log('boton pulsado');
})
*/

/*
const boton = document.querySelector('.boton');
boton.addEventListener('click', function(){ // en html sería Onclick
    console.log(this.innerHTML);
})
*/
/*
boton.addEventListener('mouseover', function(){
    console.log('el mouse esta sobre el boton');
})

boton.addEventListener('mouseout', function(){
    console.log('el mouse esta fuera del boton');
})

window.addEventListener('keydown', function(event){ //estoy presionando
    console.log('pulsando');
    console.log(event.keyCode); // muestra codigo de la tecla pulsada(sea min o may)
    console.log(String.fromCharCode(event.keyCode)); // muestra tecla (menos el Enter)
});

window.addEventListener('keypress', function(event){ //esta presionada
    console.log('pulsada');
});

window.addEventListener('keyup', function(event){ //dejo de presionar
    console.log('liberada');
});

window.addEventListener('load', function(){ //dejo de presionar
    console.log('el contenido de la ventana se a cargado');
});

const video = document.querySelector('.bigData');
video.addEventListener('play', function(){
    console.log('el video ha iniciado');
})
video.addEventListener('seeking', function(){
    //console.log('se esta buscando en el video');
    console.log('se esta buscando en el video', this.currentTime);
});
/*
video.addEventListener('ended', function(){
    console.log('el video ha terminado');
    alert('Mensaje\n\n El video ha terminado');
});
*/
/*
video.addEventListener('ended', function(){
    let resultado = confirm(' Desea verlo nuevamente?');
    console.log(resultado);
    if (resultado){ // si es true
        video.play();
    }else{
        window.location = 'http://www.google.com';
    }
});
*/
/*
var temporizador = setInterval(function(){
    setColor();
}, 2000); // 2 segundos(milisegundos)
*/

setTimeout(function(){ // solo una vez
    setColor();
}, 3000);

function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == 'blue' ? 'green' : 'blue';
    // al escribir setColor() cambiará azul y despues a verde, azul, etc
}
function stopChangeColor(){
    clearInterval(temporizador)
}

var numero = 'kol';
console.log('isNaN: ', isNaN(numero)); // No es un numero? = false si hay numero, true si hay texto

var lenguaje = 'javascript';
var lenguaje2 = 'HTML';
var mensajeMultilinea = `
Hola mundo,
estoy aprendiendo
${lenguaje} y me gusta
como se integra con ${lenguaje2} y CSS `;
console.log(mensajeMultilinea);

var platillos = ["ceviche", "tacos", "pastas", "tostadas"];
// destructuracion simple del arreglo (en orden)
var [platillo1, platillo2, platillo3, platillo4] = platillos;
console.log(platillo1, platillo2, platillo3, platillo4);
// destructuracion simple del arreglo (en desorden)
var [platillo3, platillo1, platillo4, platillo2] = platillos;
console.log(platillo1, platillo2, platillo3, platillo4);
console.log(platillos);

for (let platillo in platillos){ // recorre elementos
    console.log(platillo); // posicion de cada elemento
    console.log(platillos[platillo]); // muestra elementos
}

// fetch
var boton2 = document.getElementById('boton2');
var contenedor = document.getElementById('contenedor');
var posts = null;
/*
boton2.addEventListener('click', function(){
    fetch('http://jsonplaceholder.typicode.com/posts') // fetch(pomesa), aca vamos a consumir toda la informacion
    .then(data => data.json())
    .then(data => {
        posts = data;
        mostrarDatos(posts);
    })
});
*/
function mostrarDatos(posts){
    posts.map((posts, i) => {

        debugger;//////////////// pasado por alto?

        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');
        titulo.innerHTML = (i + 1) + ' - ' + posts.title;
        contenido.innerHTML = posts.body;
        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}

var boton2 = document.getElementById('boton2');
var contenedor = document.getElementById('contenedor');
var contBanderas = document.getElementById('banderas');
boton2.addEventListener('click', function(){
    getPosts()
        .then(data => data.json()) // transformar a data.json // no llevan ;
        .then(posts => {
            mostrarDatos(posts);
            return getCountries(); // retornar una promesa
        })
        .then(data => data.json()) // convertir a json siempre antes de usar los datos // sin ; 
        .then(countries => {
            mostrarBanderas(countries);            
        }) //sin ;
        .catch(error => { // atrapa error
            mensajes.classList.toggle('hide'); // metodo remover
            mensajes.innerHTML = error;
            setTimeout(() => mensajes.classList.toggle('hide'), 3000); // muestra error y oculta a los 3 seg
        })
});
function getPosts(){
    debugger; /////////////// este se ejecutó para analizar el programa
    return fetch('http://jsonplaceholder.typicode.comm/posts');//error aproposito//return fetch('http://jsonplaceholder.typicode.com/posts');

}
function getCountries(){
    return fetch('https://restcountries.eu/rest/v2/all');//no disponible?
}
function mostrarBanderas(countries){
    contBanderas.innerHTML = '';
    countries.map((country, i) => {
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width = '20';
        bandera.height = '20';
        contBanderas.appendChild(bandera);
    })
    
}