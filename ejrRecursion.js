function esPar (num){
    let number = Math.abs(num);
    if(number === 0){
        return 'par';
    } else if(number === 1){
        return 'impar';
    }
    else return esPar(number - 2);
}


console.log(esPar(-2));

//solución del libro

function isEven (number){
    if(number === 0) return true;
    else if(number === 1) return false;
    else if(number < 0) return isEven(-number);
    else return isEven(number - 2);
}

console.log(isEven(-1));

