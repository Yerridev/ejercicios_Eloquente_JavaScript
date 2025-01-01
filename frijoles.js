// let letra = "string";
// console.log(letra[5]);
// console.log(letra.length);



function contarFs(string){
    let contar = 0;
    for (let i = 0; i <= string.length - 1; i++){
        if(string[i] === "F"){
            contar++;
        }
    }
    return contar;
}
console.log(contarFs("ContarFrijolesFrijolesFrijoles"));


function contarCaracteres(string, caracter){
    let contar = 0;
    for (let i = 0; i <= string.length - 1; i++){
        if(string[i] === caracter){
            contar++;
        }
    }
    return contar; 
}

let charA = contarCaracteres("AbondAnyerri", "A");
console.log(charA);


//solucion libro
function countChar(string, ch){
    let count = 0;
    for (let i = 0;i < string.length; i++){
        if(string[i] === ch){
            count++;
        }
    }
    return count;
}

function countBs(string){
    return countChar(string,"B");
}

console.log(countBs("Bonito Bueno"));
