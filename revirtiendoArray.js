function revertirArray(arreglo){
    let salida = [];
    for(let i = arreglo.length - 1; i >= 0; i--){
        salida.push(arreglo[i]);
    }
    return salida;
}

function revertirArrayEnSuLugar(array){
    let inicio = 0;
    let final = array.length - 1;

    while(inicio < final){
        let temp = array[inicio];
        array[inicio] = array[final];
        array[final] = temp;

        inicio++;
        final--;
    }
    return array;
}

let numbers = [1, 2, 3, 4, 5];
let num = [7, 2, 1, 9, 2];

console.log(revertirArray(numbers));
console.log(revertirArrayEnSuLugar(num));

function reverseArrayInThePlace(arry){
    for (let i = 0; i < Math.floor(arry.length / 2); i++){
        let temp = arry[i];
        arry[i] = arry[arry.length - 1 - i];
        arry[arry.length - 1 - i] = temp;
    }
}

reverseArrayInThePlace(num);

console.log(num);
