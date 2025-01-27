function mayorQue(n){
    return m => m > n;
}

let mayor10 = mayorQue(10);
console.log(mayor10(11));

//Puedes tener funciones que cambien otras funciones
function ruidosa(funcion){
    return(...argumentos) => {
        console.log("llamado con", argumentos);
        let resultado = funcion(...argumentos);
        console.log("llamado con", argumentos, ", retorno", resultado);
        return resultado;
    };
}

 ruidosa(Math.min)(3,2,1);

 //Incluso puedes escribir funcions que proporcinen nuevos tipos de flujo de control


function repetirLog(n){
    for( let i = 0; i <= n; i++){
        console.log(i);
    }
}

function repetir(n, accion){
    for(let i = 0; i <= n; i++){
        accion(i);
    }
}

function aMenosQue(prueba, entonces){
    if (!prueba) entonces();
 }

 repetir(3, n => {
    aMenosQue (n % 2 == 1, () => {
        console.log(n, "es par");
    });
 });

 ["A", "B"].forEach(letra => console.log(letra));

//Conjunto de datos de código
//funciones de orden superio donde brilla es procesamiento de datos.

import { SCRIPTS } from "./scripts.js";
// const SCRIPTS = require("./scripts");


//Filtrando arrays

function filtrar(array, prueba){
    let pasaron = [];
    for (let elemento of array){
        if(prueba(elemento)){
            pasaron.push(elemento);
        }
    }
    return pasaron;
}

console.log(filtrar(SCRIPTS, codigo => codigo.living));

console.log(SCRIPTS.filter(codigo => codigo.direction == "ttb"));


//Transformando con map
function map(array, transformar){
    let mapeados = [];
    for (let elemento of array){
        mapeados.push(transformar(elemento));
    }
    return mapeados;
}

let codeLeftRight = SCRIPTS.filter(codigo => codigo.direction == "rtl");
console.log(codeLeftRight);
console.log(map(codeLeftRight, codigo => codigo.name));

//Resumiendo cno reduce
function reduce(array, combinar, inicio){
    let actual = inicio;
    for (let elemento of array){
        actual = combinar(actual, elemento);
    }
    return actual;
}

console.log(reduce([1,2,3,4], (a,b) => a + b, 0))


function contandoCaracteres(codigo) {
    return codigo.ranges.reduce((cuenta, [desde, hasta]) => {
        return cuenta + (hasta - desde);
    }, 0);
}

console.log(SCRIPTS.reduce((a,b) => {
    return contandoCaracteres(a) < contandoCaracteres(b) ? b : a;
}));

//Composabilidad
let mayor = null;
for (let codigo of SCRIPTS){
    if (mayor == null ||
        contandoCaracteres(mayor) < contandoCaracteres(codigo)){
        mayor = codigo;
    }
}
console.log(mayor);

    //Las funciones de orden superio empiezan a brillar cuando necesitas componer operaciones.

function promedio(array){
    return array.reduce((a,b) => a + b) / array.length;
}

console.log(Math.round(promedio(
    SCRIPTS.filter(codigo => codigo.living).map(codigo => codigo.year)
)));

console.log(Math.round(promedio(
    SCRIPTS.filter(codigo => !codigo.living).map(codigo => codigo.year)
)));

let total = 0, cuenta = 0;
for (let codigo of SCRIPTS){
    if(!codigo.living){
        total += codigo.year;
        cuenta += 1;
    }
}

console.log(Math.round(total / cuenta));

//Strings y códigos de caracteres
function codigoCaracter(codigo_caracter){
    for (let codigo of SCRIPTS){
        if (codigo.ranges.some(([desde, hasta]) => {
            return codigo_caracter >= desde && codigo_caracter < hasta;
        })){
            return codigo;
        }
    }
    return null;
}

console.log(codigoCaracter(121));


let caballo = "🐴";
console.log(caballo.length);
console.log(caballo[0]);
console.log(caballo.charCodeAt(0));
console.log(caballo.codePointAt(0));

let dragonRosa = "🐉🌹";
for (let caracter of dragonRosa){
    console.log(caracter);
}

//Reconociendo texto
function contarPor(elementos, nombreGrupo){
    let cuentas = [];
    for (let elemento of elementos){
        let nombre = nombreGrupo(elemento);
        let conocido = cuentas.findIndex(c => c.nombre = nombre);
        if (conocido == -1) {
            cuentas.push({nombre, cuenta: 1});
        } else {
            cuentas[conocido].cuenta++;
        }
    }
    return cuentas;
}

console.log(contarPor([1, 2, 3, 4, 5], n => n > 2));


function codigosTexto(texto){
    let codigos = contarPor(texto, caracter => {
        let codigo = codigoCaracter(caracter.codePointAt(0));
        return codigo ? codigo.name : "ninguno";
    }).filter(({name}) => name != "ninguno");

    let total = codigos.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No se encontraron codigos";

    return codigos.map(({name, count}) => {
        return `${Math.round(count * 100 / total)} % ${name}`;
    }).join(", ");
}

console.log(codigosTexto('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
