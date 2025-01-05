
//Función para que tiene dos parametros uno inicial y otro final que returna un array de numeros
function rango(inicio, final, paso = inicio < final ? 1 : -1){
    let numeros = [];
    if (paso > 0){
        for(inicio; inicio <= final; inicio += paso){
            numeros.push(inicio);
        }
    }else{
        for(inicio; inicio >= final; inicio += paso){
            numeros.push(inicio);
        }
    }
    return numeros;
}

console.log(rango(1, 10, 3));
console.log(rango(10, 1, -3));

//Función para sumar un array de numeros
function suma(contenedor){
    let resultado = 0;
    for(let numero of contenedor){
        resultado += numero;
    }
    return resultado;
}

console.log(suma(rango(1,10)));
