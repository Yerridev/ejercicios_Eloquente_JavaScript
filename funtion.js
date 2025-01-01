// Definicion de una función

const cuadrado = function(x){
    return x * x;
};

console.log(cuadrado(10));

//Funciones pueden tener parametro o no:

const saludar = function(){
    console.log("Buen día");
};

saludar();

const potencia = function(base, exponente){
    let result = 1;
    for(let i = 0; i < exponente; i++){
        result *= base;
    }
    return result;
}

console.log(potencia(5,2));

//Alcance de variables
let x = 10;
if (true){
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}

console.log(x + z);

//Cada bloque de codigo conoce su variable definia dentro de este bloque.

const dividirMitad = function(numero){
    return numero/2;
};

let numero = 10;

console.log(dividirMitad(100));
console.log(numero);

//Alcance anidado
const pastel = function(factor){
    const ingrediente = function(cantidad, unidad, nombre){
        let cantidadIngrediente = cantidad * factor;
        if (cantidadIngrediente > 1){
            unidad += "s";
        }
        console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
    };
    ingrediente(2, "lata", "garbanzos");

};


//Funciones como valores
let lanzarMisiles = function(){
    sistemaDeMisiles.lanzar("ahora");
};

// if (modoSeguro==true) {
//     lanzarMisiles = function(){};
// }

//Notación de declaración
function cuadra(x){
    return x * x;
}

console.log("El futuro dice: ", futuro());

function futuro(){
    return "Prosperidad y trabajo";
}

//Esta trozo de código funciona aunque este la función este definidad despues de invocarla, todas las funciones se cargan al incio y no siguen el protocolo de arriba hacia abajo, aunque en teoria si porque se cargan al inicio. Nos da la libertad de crear las funciones y tener otro orden del significado que le quieras dar.

//Funciones de flecha
//Esta es otra notación o forma de crear funciones, 
//SUSTITUIMOS 'function' === (=>)

const potencias = (base, exponente) => {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++){
        resultado *=base;
    }
    return resultado;
};

//la flecha viene desdes de listar los parametros() y sigue el cuerpo de la funición {}

//Lo podemos leer de la siguiente manera:
/**
 * "Esta entrada de" (parámetros) produce => este resultado ({cuerpo})
 * 1. Cuando solo hay un parámetro los parentes se pueden omitir.
 * 
 */


const cuadrado1 = (x) => {return x * x;};
const cuadrado2 = x => x * x;

console.log(cuadrado1(12));
console.log(cuadrado2(2));


//Función flecha no tiene parametros es simplemente () vacios.
const parlante = () => {
    console.log("Sonando: Spotify");
}

parlante();


//La pila de llamadas
function saludarN(name){
    console.log("Hola " + name);
}

saludarN("yerri");
console.log("chao");


// function gallina(){
//     return huevo();
// }

// function huevo() {
//     return gallina();
// }

// console.log(gallina() + " vino primero.");


function sayHello(name){
    console.log(`Hello ${name}`)
}

sayHello('yaco');

const hacerSonido = function(){
    console.log("song");
};

hacerSonido();

const ponerPieza = () => {
    console.log("en su lugar");
};

ponerPieza();

/*
    mi la do la la x4
    la do mi
    sol mi sol mi re si
    si re re 
    mi re do si la
    la do mi
    sol mi sol mi re si 
    mi re do si la
    la do do
    re re re re do
    la do do
    re re re re do
    la do do
    re re re re do
    la do mi
    sol mi sol mi re si 
    si re re
    mi re do si la
    la do mi
    sol mi sol mi re si
    si re re
    mi re do si la 
    
*/


//Argumentos opcionales

function cuadradroI(x) { return x * x; };
// console.log(cuadradoI(4, true, "erizo"));
//uso

function menos(a, b){
    if( b === undefined) return -a;
    else return a - b;
}

console.log(menos(10));
console.log(menos(10, 5));

//poniedo = a un parámetro
function potenciaA (base, exponente = 2){
    let resulta = 1;
    for (let i = 0; i < exponente; i++){
        resulta *= base;
    }
    return resulta;
}

console.log(potenciaA(4));
console.log(potenciaA(2, 6))

//Cierre

function envolverValor(n){
    let local = n;
    return () => local;
}

let envolverValor1 = envolverValor(1);
let envolverValor2 = envolverValor(2);

console.log(envolverValor1());
console.log(envolverValor2());

function multiplicador(factor){
    return numero => numero * numero;
}

let duplicar = multiplicador(2);
console.log(duplicar(4));

//Recursividad
/**
 * una función que se llamada a si misma es llamada recursión
 */
function potenciaR(base, exponente){
    if (exponente == 0){
        return 1;
    } else {
        return base * potenciaR(base, exponente - 1);
    }
}

console.log(potenciaR(2, 3));

//solución recursiva
function encontrarSolucion(objetivo){
    function encontrar(actual, historia){
        if(actual == objetivo){
            return historia;
        } else if (actual > objetivo){
            return null;
        } else {
            return encontrar(actual + 5, `(${historia} + 5)`) ||
                   encontrar(actual * 3, `${historia} * 3`);
        }
    }
    return encontrar(1, "1");
}

console.log(encontrarSolucion(24));



//Funciones Crecientes
/**
 * Dos formas de implementar funciones:
 * 1. Código repetio.
 * 2. Funcionalidad que merezca su propia función.
 */

/**ejem:
 * - Un programa que imprima dos números.
 *      - Números de vacas y pollos.
 *      - con la palagras (vaca y pollo) despues del numero.
 *      - y 0 antes de los numeros para que siempre tengan 3 dígitos.
 */

function inventarioGranja(vacas, pollos){
    let stringVaca = String(vacas);
    while (stringVaca.length < 3) {
        stringVaca = "0" + stringVaca;
    }
    console.log(`${stringVaca} Vacas`);

    let stringPollos = String(pollos);
    while (stringPollos.length < 3){
        stringPollos = "0" + stringPollos;
    }
    console.log(`${stringPollos} Pollos`)

}

inventarioGranja(7, 11);

function imprimirNumeroYEtiqueta(numero, etiquieta){
    let cadena = String(numero);
    while(cadena.length < 3){
        cadena = "0" + cadena;
    }
    console.log(`${cadena} ${etiquieta}`);
}

function imprimirInventarioGranja(vacas, pollos, cerdos){
    imprimirNumeroYEtiqueta(vacas, 'Vacas');
    imprimirNumeroYEtiqueta(pollos, 'pollos');
    imprimirNumeroYEtiqueta(cerdos, 'cerdos');
}

imprimirInventarioGranja(11, 9, 10);


function rellenarConCeros(numero, longitud){
    let letras = String(numero);
    while(letras.length < longitud){
        letras = "0" + letras;
    }
    return letras;
}

function printInventarioGranja(pollos, vacas, cerdos){
    console.log(`${rellenarConCeros(pollos, 3)} Pollos`);
    console.log(`${rellenarConCeros(vacas, 3)} Vacas`);
    console.log(`${rellenarConCeros(cerdos, 3)} Cerdos`);
}

printInventarioGranja(4,11, 9);
