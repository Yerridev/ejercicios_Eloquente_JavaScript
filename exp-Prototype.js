

const HistoriaClinica = {
    nombre: 'Yerri',
    edad: 22,
    diagnostico: 'Intoxicación',

    __proto__: {
        diagnostico: "No registrado",
        alergias: "Ninguna"
    }
};

// HistoriaClinica.[[Prototype]] = propiedades { diagnostico, alergias}
// HistoriaClinica.[[Prototype]].[[Prototype]] = Object.Prototype { metodos especiales que tienes todos los objetos}


console.log(HistoriaClinica.nombre);


console.log(HistoriaClinica.edad);


console.log(HistoriaClinica.diagnostico);


console.log(HistoriaClinica.alergias);


console.log(HistoriaClinica.tipoSangre);


const Padre = {
    valor: 2,
    metodo(){
        return this.valor + 1;
    },
};

console.log(Padre.metodo());

const hijo = {
    __proto__: Padre,
};

console.log(hijo.metodo());

hijo.valor = 6;

console.log(hijo.metodo());






const boxes = [
    { valor: 1, obtenerValor() { return this.valor;}},
    { valor: 2, obtenerValor() { return this.valor;}},
    { valor: 3, obtenerValor() { return this.valor;}},
];

const prototipoCaja = {
    obetenerCaja(){
        return this.valor;
    },
};

const cajas = [
    {value: 1, __proto__: prototipoCaja },
    {value: 2, __proto__: prototipoCaja },
    {value: 3, __proto__: prototipoCaja },
];


//Funcion constructora
function Caja(valor) {
    this.valor = valor;
}

Caja.prototype.getValue = function(){
    return this.valor;
}

const caajas = [ new Caja(1), new Caja(2), new Caja(2)];


































