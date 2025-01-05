
// Estructura de Datos: Objetos y Arrays

// Conjunto de datos -> Agruparlos en Arrays
let listaDeNumeros = [2, 4, 6, 1, 19];
console.log(listaDeNumeros[2]);
console.log(listaDeNumeros[0]);
console.log(listaDeNumeros[2-1]);

console.log("numoer" + listaDeNumeros["length"]);

//Métodos
let secuencia = [1, 2, 3];

secuencia.push(4);
secuencia.push(5);
console.log(secuencia);

console.log(secuencia.pop());

//Objetos
let diaOne = {
    ardilla: false,
    eventos: ["trabajo", "toque el arbol", "pizza", "salir a correr"]
};

console.log(diaOne.ardilla);

console.log(diaOne.lobo);

diaOne.lobo = false;

console.log(diaOne.lobo);

let description = {
    trabajo: "Fui a trabajar",
    "toque un arbol": "Toque un arbol"
};

let unObjeto = {izquierda: 1, derecha: 2};
console.log(unObjeto.izquierda);

//Operador delete -> eliminar propiedad de un objeto.
delete unObjeto.izquierda;
console.log(unObjeto.izquierda);

//Operador in(en) -> te dice si la propiedad esta en el objeto.
console.log("izquierda" in unObjeto);
console.log("derecha" in unObjeto);

//conocer las propiedades de un objeto.
console.log(Object.keys(description));
console.log(Object.keys({x: 0, y:0, z:2}));

//funcion para copiar las propiedades de un Objeto a otro:
let objetoA = {a:1, b:2};
Object.assign(objetoA, description);
console.log(objetoA);

//Los arrya son objetos especiales -> typeof(para ver el tipo)
console.log(typeof[listaDeNumeros]);


console.log(description["toque un arbol"]);

let diario = [
    {
        eventos: ["trabajo", "toque un arbol", "pizza",
                "salir a correr", "television"],
        ardilla: false 
    },
    {
        eventos: ["trabajo", "helado", "coliflor", "lasaña",
                "toque el arbol", "cepille los dientes"],
        ardilla: false
    },
    {
        eventos: ["fin de semana", "monte la bicicleta", "descanso", "nueces", "cerveza"],
        ardilla: true
    }
];

//Mutabilidad
let objeto1 = {valor: 10};
//Se dice que tienen la misma identidad
let objeto2 = objeto1;
let objeto3 = {valor: 10};

console.log(objeto1 == objeto2);
console.log(objeto1 == objeto3);

objeto1.valor = 15;
console.log(objeto2.valor);
console.log(objeto3.valor);

const puntuacion = {
    visitantes: 0,
    locales: 0
}

console.log(puntuacion);
puntuacion.visitantes = 1;

console.log(puntuacion);


//El diaro del licántropo
let diarioL = [];

function añadirEntrada(eventos, ardilla){
    diarioL.push({eventos, ardilla});
}

añadirEntrada(["trabajo", "toque el arbol", "pizza", "salir a correr", "television"], false);
añadirEntrada(["trabajo", "helado", "coliflor", "lasaña", "toque un arbol", "me cepille los dientes"], false);
añadirEntrada(["fin de semana", "monte la bicicleta", "descanso", "nueces", "cerveza", true]);

//Calculando la correlación

let eventoComerPizza = [76, 9, 4, 1];


function phi(tabla){
    return (tabla[3] * tabla[0] - tabla[2] * tabla[1]) /
        Math.sqrt((tabla[2] + tabla[3]) *
                  (tabla[0] + tabla[1]) *
                  (tabla[1] + tabla[3]) *
                  (tabla[0] + tabla[2]));
}

console.log(phi([75, 9, 4, 1]));

// const JOURNAL = require('./journal.js');
import { JOURNAL } from "./journal.js";

function tablaPra(event, journal){
    let tabla = [0,0,0,0];
    for (let i = 0; i< journal.length; i++){
        let entrada = journal[i], index = 0;
        if (entrada.events.includes(event)) index += 1;
        if(entrada.squirrel) index += 2;
        tabla[index] += 1;
    }
    return tabla;
}

console.log(tablaPra("pizza", JOURNAL));

for (let entrada of JOURNAL){
    console.log(`${entrada.events.length} eventos.`);
}


//El análisis final
//Primero encontrar cada tipo de evento
function eventosDiarios(diario){
    let eventos = [];
    for (let entrada of diario){
        for(let evento of entrada.events){
            if(!eventos.includes(evento)){
                eventos.push(evento);
            }
        }
    }
    return eventos;
}

console.log(eventosDiarios(JOURNAL));

for (let evento of eventosDiarios(JOURNAL)){
    console.log(evento + ": ", phi(tablaPra(evento, JOURNAL)));
}

console.log("\n");
for (let evento of eventosDiarios(JOURNAL)){
    let correalcion = phi(tablaPra(evento, JOURNAL));
    if(correalcion > 0.1 || correalcion < -0.1){
        console.log(evento + ":" ,correalcion);
    }
}
console.log("\n");

for (let entrada of JOURNAL){
    if( entrada.events.includes("peanuts") && 
        !entrada.events.includes("brushed teeth")){
        entrada.events.push("dientes con nueces");
    }
}

console.log(phi(tablaPra("dientes con nueces", JOURNAL)));

//Arrayologia avanzada
let listaDeTareas = [];
function recordar(tarea){
    listaDeTareas.push(tarea);
}

function obtenerTarea(){
    return listaDeTareas.shift(); //-> muestra y elimina el primer elemento
}

function recordarUrgente(tarea){
    listaDeTareas.unshift(tarea); // -> agregar al inicio del arrray
}

recordar("Gym");
recordar("Soccer");
recordar("Quena");
recordar("Programming");

console.log(listaDeTareas);

console.log(obtenerTarea());

recordarUrgente("Jugar Voly");

console.log(listaDeTareas);

console.log(obtenerTarea());

console.log(listaDeTareas);


console.log([1, "yerri", 3, 2, 1].indexOf("yerri"));
console.log([1, "yerri", 3, "yerria", "yerri"].lastIndexOf("yerri"));

//slice
console.log([0, 1, 2, 3, 4].slice(2, 4));

console.log([0, 1, 2, 3, 4].slice(2));

//concat and slice
function remove(array, indice){
    return array.slice(0, indice).concat(array.slice(indice + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));

//Strings y sus propiedades
console.log("panaderia".slice(0,3));
console.log("panaderia".indexOf("d"));

//trim("recortar")
console.log("  yerri .\n   ".trim());
console.log("  okey \n ".trim());

//rellenar padStart
console.log(String(1).padStart(5, "#"));

//split and join | dividir y unir
let oracion = "Los pajaros secretarios se espcializan en pisotear";
let palabras = oracion.split(" ");
console.log(palabras);
console.log(palabras.join(" - "));

console.log(" Yaco".repeat(7));

//Paramentros Rstantes
function maximo(...numeros){
    let resultado = -Infinity;
    for(let numero of numeros){
        if(numero > resultado) resultado = numero;
    }
    return resultado;
}

console.log(maximo(4,1,9,-2));

let numbers = [1, 3, 7, 2];
console.log(maximo(...numbers));

let words = ["never", "understand"];
console.log(["you", ...words, "completely"]);

//El objeto Math
function puntoAleatorioEnCirculo(radio){
    let angulo = Math.random() * 2 * Math.PI;
    return {x: radio * Math.cos(angulo),
            y: radio * Math.sin(angulo)
           };
}

console.log(puntoAleatorioEnCirculo(2))
console.log(Math.floor(Math.random() * 10));

//Desestructurando
//Alternativa a la definicon de la función phi

function phiDes([n00, n01, n10, n11]){
    return (n11 * n00 - n10, n11) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
                    (n01 + n11) * (n00 + n10));
}

let {nombre} = {nombre: "yerri", edad: 22};
console.log(nombre);

//JSON
let almacen = JSON.stringify({adilla: false,
                              evento: ["fin de semana"]});
console.log(almacen);

console.log(JSON.parse(almacen).evento);

