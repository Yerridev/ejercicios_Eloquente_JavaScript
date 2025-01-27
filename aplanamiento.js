
let arrays = [[10, 9, 8], [7, 6], [5]];

function aplanar(arrays){
    return arrays.reduce((acumulado, actual) => acumulado.concat(actual), []);
}

console.log(aplanar(arrays));
