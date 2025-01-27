let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan"];

iceCreamFlavors.push("Mint chip");

iceCreamFlavors.splice(2,1);
console.log(iceCreamFlavors);

for (let i = 0; i < iceCreamFlavors.length; i++){
    console.log(iceCreamFlavors[i]);
}

//Bucle forEach

/**
 * - Es una función superio
 * - Recorre interando los elementos
 * - Simplifica el bucle 
 *      - No necesita contador.
 */

let numeros = [10, 20, -30, 40, 50];
numeros.forEach(numero => console.log(numero));

/// Si deseas aceder al indice alcual si le agrear otro parametro a la función flecha

numeros.forEach((numero, index) => console.log(`${numero} : indece ${index}`));


for (let i = 0; i < numeros.length; i++){
    if(numeros[i] < 0){
        break;
    }
    console.log(numeros[i]);
}


//Filtrado
/// Buscar mendiante find()

iceCreamFlavors.find(sabor => sabor === "Chocolate");

// Filtra con una propiedad comun
let saboresDeHelados = [
    { nombre: "Chocolate", tipo: "Chocolate"},
    { nombre: "Fresa", tipo: "Fruta"},
    { nombre: "Vainilla", tipo: "Vainilla"},
    { nombre: "Pistacho", tipo: "Nueces"},
    { nombre: "Napolitano", tipo: "Chocolate"},
    { nombre: "Mint Chip", tipo: "Chocolate"}
];

let conChocolate = saboresDeHelados.filter(sabor => sabor.tipo === "Chocolate");
console.log(conChocolate);


//Comprobación de una condición 
let existeNueces = saboresDeHelados.some(sabor => sabor.tipo === "Nueces");
console.log(existeNueces);

/// Que sabores puede escoger el cliente | es alergico a las nueces
let disponibleAlergias = saboresDeHelados.filter(sabor => sabor.tipo !== "Nueces");
console.log(disponibleAlergias);


//Asignación de proyecciones
saboresDeHelados.map(sabor =>{ 
    sabor.precio = 1; 
    return sabor;
})
console.log(saboresDeHelados);

//Agregaciones
let ventas = [
    {
        fecha: '2025-04-01',
        cantidad: 2
    },
    {
        fecha: '2025-01-01',
        cantidad: 1
    }
];

//Bucle para sumar todas las ganancias
let suma = 0;
for (let i = 0; i < ventas.length; i++){
    suma += ventas[i].cantidad;
}

console.log(suma);


// usar "reduce()" para calcular las ventas
let totalGanancia = ventas.reduce((acumulado, actual) => acumulado + actual.cantidad, 0);

console.log(totalGanancia);
