function min(num1, num2){
    if(num1 === num2){
        return null;
    } else if (num1 < num2){
        return `${num1} es menor`;
    } else return `${num2} es menor`
}

let number = min(4, 4);
console.log(number);

//ojo recordar siemrpe utilizar operadores ternarios

function minimo(a, b){
    if(a === b){
        return "son iguales";
    }
    return a < b ? `${a} es menor` : `${b} es menor`;
}

let hallarMin = minimo(5, 2);
console.log(hallarMin);

