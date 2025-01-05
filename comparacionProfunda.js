
function igualdadProfunda(valor1, valor2){
    if(valor1 === valor2) return true;

    if (valor1 == null || typeof valor1 != "object" || 
        valor2 == null || typeof valor2 != "object" ) return false;
    
    let llavesValor1 = Object.keys(valor1), llavesValor2 = Object.keys(valor2);

    if(llavesValor1.length != llavesValor2.length) return null;

    for (let llave of llavesValor1){
        if(!llavesValor2.includes(llave) || !igualdadProfunda(valor1[llave], valor2[llave])) return false;
    }

    return true;
}

let obj1 = {
    aqui: { is: "an"},
    objeto2: 2
}

console.log(igualdadProfunda(obj1, obj1));
console.log(igualdadProfunda(obj1, {
    aqui: { is: "an"},
    objeto2: 2
}));

console.log(igualdadProfunda(obj1, {
    aqui: { is: "hola"},
    objeto2: 2
}));
