
function ciclo(valor, prueba, iterar, cuerpo){
    for (let i = valor; prueba(i); i = iterar(i)){
        cuerpo(i);
    }
}

ciclo(1, n => n < 10, n => n + 1, console.log);
