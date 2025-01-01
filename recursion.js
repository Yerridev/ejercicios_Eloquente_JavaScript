function potencia(base, exponente){
    if(exponente == 0){
        return 1; //caso base
    } else {
        return base * potencia(base, exponente - 1);
    }
}

console.log(potencia(2,3));


//Acertijo: Comenznado desde el número 1 y repetidamente agregando 5 o multimplicando por 3, una cantidad infinita de números nuevos peuden ser producidoos. ¿Cómo

function encontrarSolucion(objetivo){
    function encontrar (actual, historia){
        if(actual == objetivo){
            return historia;
        } else if(actual > objetivo){
            return null;
        }else {
            return encontrar (actual + 5, `(${historia} + 5)`) ||
                   encontrar (actual * 3, `(${historia} * 3)`);
        }
    }
    return encontrar(1, "1");
}

console.log(encontrarSolucion(24));

