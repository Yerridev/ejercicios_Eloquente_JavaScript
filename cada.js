
function every(array, predicado){
    for(let elemento of array){
        if (predicado(elemento)){
            return true;
        }
    }
    return false;
    
}

function everyTwo(array, predicado){
    return !array.some(elemento => !predicado(elemento));
}


console.log(every([1,2,3], n => n < 10));
