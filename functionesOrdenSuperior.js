//Abstrayento la repetición 

for (let i = 0; i < 10; i++){
    console.log(i);
}

/**
 * Podemos abstraer "Hacer algo N veces"
 * Hcer una función que llame a console.log N veces
 */

function repetirLog(n){
    for( let i = 0; i <= n; i++){
        console.log(i);
    }
}

repetirLog(5);

function repetir(n, accion){
    for(let i = 0; i <= n; i++){
        accion(i);
    }
}

repetir(3, console.log);

let etiquetas = [];
repetir(5, i => {
    etiquetas.push(`Unidad ${i + 1}`);
});
console.log(etiquetas);


//Fucniones de orden superior
/// Funcion que crean nuevas funciones
function mayorQue(n){
    return m => m > n;
}

let mayorQue10 = mayorQue(10);
console.log(mayorQue10(22));

/// Funcion que cambie otra función
function ruidosa(funcion){
    return (...argumentos) => {
        console.log("llamado con", argumentos);
        let resultado = funcion(...argumentos);
        console.log("llamada con", argumentos, ", retorno", resultado);
        return resultado;
    };
}

ruidosa(Math.min)(3,2,1);

/// Funciones que proporcionen nuevos tipos de flujo de control
function aMenosQue(prueba, entonces){
    if(!prueba) entonces();
}

repetir(2, n => {
    aMenosQue(n % 2 == 1, () => {
        console.log(n, "es par");
    })
});

/// Método de array incorporado 'forEach'. proporciona un ciclo for con una funcion de orden superior.
["A", "B"].forEach(letra => console.log(letra));


//Fultrando Arrays
function filtrar(array, prueba){
    let pasaron = [];
    for (let elemento of array){
        if (prueba(elemento)){
            pasaron.push(elemento);
        }
    }
    return pasaron;
}

// /const SCRIPTS = require('./scripts.js');
import { SCRIPTS } from './scripts.js';
// /console.log(filtrar(SCRIPTS, codigo => codigo.living));

console.log(SCRIPTS.filter(codigo => codigo.direction == "ttb"));

//Trasnformando con Map
function map(array, transformar) {
    let mapeados = [];
    for (let elemento of array){
        mapeados.push(transformar(elemento));
    }
    return mapeados;
}

let codigoDerechoAIzquierda = SCRIPTS.filter(codigo => codigo.direction == "rtl");
// console.log(map(codigoDerechoAIzquierda, codigo => codigo.name));

console.log(codigoDerechoAIzquierda.map(codigo => codigo.name));

//Resumiendo con Reduce
function reduce(array, combinar, inicio){
    let actual = inicio;
    for (let elemento of array){
        actual = combinar(actual, elemento);
    }
    return actual;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

console.log([1, 2, 3, 4].reduce((a, b) => a + b));

function cuentaDeCaracteres(codigo){
    return codigo.ranges.reduce((cuenta, [desde, hasta]) => {
        return cuenta + (hasta - desde);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) =>{
    return cuentaDeCaracteres(a) < cuentaDeCaracteres(b) ? b : a;
}));

//Composabilidad
let mayor = null;
for (let codigo of SCRIPTS){
    if(mayor == null || cuentaDeCaracteres(mayor) < cuentaDeCaracteres(codigo)){
        mayor = codigo;
    }
}

console.log(mayor);

/// Código que encuentre el año de origne promedio para los códigos vivos y muertos en el conjunto de datos.

function promeido(array){
    return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(promeido(SCRIPTS.filter(codigo => codigo.living).map(codigo => codigo.year))));

console.log(Math.round(promeido(
    SCRIPTS.filter(codigo => !codigo.living).map(codigo => codigo.year)
)));

let total = 0, cuenta = 0;
for(let codigo of SCRIPTS){
    if(codigo.living){
        total += codigo.year;
        cuenta += 1;
    }
}

console.log(Math.round(total / cuenta));


//Strings y códigos de caracteres
function codigoCaracter(codigo_caracter){
    for (let codigo of SCRIPTS){
        if (codigo.ranges.some(([desde, hasta]) => {
            return codigo_caracter >= desde && codigo_caracter <hasta;
        })){
            return codigo;
        }
    }
    return null;
}

console.log(codigoCaracter(121));
