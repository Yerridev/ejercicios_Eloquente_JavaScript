/**
 * Estructura de dato común -> la lista
 *  - Es un conjutno anidado de objetos.
 *  - El 1er objeto tiene una referencia al 2do.
 *  - el 2do al 3ro, sucesivamente.
 * Bueno de las lista:
 *  - puedes compartir partes de su estrucuta.
 * 
 */
let lista = {
    valor: 1,
    resto: {
        valor: 2,
        resto: {
            valor: 3,
            resto: null
        }
    }
};


// function arrayALista(array){
//     let list = null;
//     for (let elemet of array){
//         list = {
//             valor: elemet,
//             resto: list
//         }
//     }
//     return list;
// }

function arrayALista(array){
    let lista = null;
    for(let i = array.length - 1; i >= 0; i--){
        lista = {
            valor: array[i],
            resto: lista
        };
    }
    return lista;
}

let num = [1, 2, 3];
console.log(JSON.stringify(arrayALista(num), null, 4));

function listaAArray(list){
    let arry = [];
    for (let nodo = list; nodo; nodo = nodo.resto ){
        arry.push(nodo.valor);
    }
    return arry;
}


console.log(listaAArray(arrayALista([1,2,3])));


function preceder(elemento, lista){
    let list = {
        valor: elemento,
        resto: lista
    }
    return list;
}

function prepend(value, list){
    return {value, rest: list};
}

console.log(preceder(10, preceder(20, null)));

function posicion(lista, numero){
    if(!lista) return undefined;
    else if (numero == 0) return lista.valor;
    else return posicion(lista.resto, numero - 1);
}

console.log(posicion(lista, 0));
