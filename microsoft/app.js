//Creamos un negocio

let golocinas = ["Cuates", "Ole Ole", "Chonman", "inka cola", "Coca cola"];

golocinas = [
    {nombre: "Cuates", tipo: "Comer", precio: 1},
    {nombre: "Ole Ole", tipo: "Comer", precio: 0.5},
    {nombre: "Chonman", tipo: "Comer", precio: 1},
    {nombre: "Inka Kola", tipo: "Bebida", precio: 3},
    {nombre: "Coca Kola", tipo: "Bebida", precio: 3},
];


let transacciones = [];
transacciones.push({ventas: ["Cuates", "Chonman", "Inka Kola"], total: 5});
transacciones.push({ventas: ["Ole Ole", "Cuates", "Coca Kola"], total: 4.5});
transacciones.push({ventas: ["Cuates", "Ole Ole", "Inka Kola"], total: 4.5});

let ganaciaDia = transacciones.reduce((acumulado, actual) => acumulado + actual.total, 0);
console.log(ganaciaDia);


let reporte = transacciones.reduce( (acumulado, actual) => {
    actual.ventas.forEach(venta => {
        if(!acumulado[venta]){
            acumulado[venta] = 0;
        }
        acumulado[venta]++;
    })
    return acumulado;
}, {});

console.log(reporte);


