
const HistoriaClinica = {
    nombre: 'Yerri',
    edad: 22,
    diagnostico: 'Intoxicación',

    __proto__: {
        diagnostico: 'No registrado',
        alergias: 'Ninguna',
    }
}


console.log(HistoriaClinica.nombre);

console.log(HistoriaClinica.edad);

console.log(HistoriaClinica.diagnostico);

console.log(HistoriaClinica.alergias);



console.log(HistoriaClinica.tiposangre);



//heredando metodos

const equipo = {
    valor: 20000,

    metodo(){
        return this.valor + 100;
    }
}

console.log(equipo.metodo());


const universitario = {
    __proto__ : equipo,
}

console.log(universitario.metodo());


universitario.valor = 50000;

console.log(universitario.metodo());


// Constructurores ejemplso

const equiposFut = [
    {valor: 1, getValor() { return this.valor + 1}},
    {valor: 2, getValor() { return this.valor + 1}},
    {valor: 3, getValor() { return this.valor + 1}},
]

const equipoPrototipo = {

    getValor() {
        return this.valor + 2;
    }
}

const equiposFutbol = [
    {valor: 1, __proto__: equipoPrototipo},
    {valor: 2, __proto__: equipoPrototipo},
    {valor: 3, __proto__: equipoPrototipo},
]

// funcion constructora

function Vehiculo (modelo, marca){
    this.modelo = modelo;
    this.marca = marca;   
};

Vehiculo.prototype.especificaciones= function(){
    return `This car is convertible and its ferrari brand`;
}

const ferrari = new Vehiculo('convertly', 'ferrari');

console.log(ferrari);

console.log(ferrari.especificaciones());

// Reescribir en clases

class Caja {
    constructor(valor){
        this.valor = valor;
    }

    obtenerValor(){
        return this.value;
    }
}



class Vehiculos {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    obtenerEspecificaciones(){
        return `This car is model ${this.modelo} and its ${this.marca} brand`;
    }
}


//Construyendo cadenas de herencia mas largas
function Base() {}
function Derivada() {}
// establecemos el [[Protipo]] de 'Derivada.prototype'
// a 'Base.prototype'
Object.setPrototypeOf(Derivada.prototype, Base.prototype);

const obj = new Derivada();
// obj ---> Derivada.prototype ---> Base.prototype ---> Object.prototype ---> null


//Lo que en clases vendria a ser el clasico extends 

class base {}

class derivada extends base {}

const objt = new derivada();
// objt ---> Derivada.prototype ---> Base.prototype ---> Object.prototype ---> NULL

//// creando la herencia con Object.create()
function Jefe() {}
function Empleado() {}
//Reasigna 'empleado.prototype' a un nuevo objeto
// con 'Jefe.prototype' como '[[Prototype]]'
// NO HACER ESTO - Usa Objet.setPrototypeOf para heredar en su lugar
Empleado.prototype = Object.create(Jefe.prototype);

//INSPECCIONANDO PROTOTYPE
function doSomething(){}
console.log(doSomething)
/**
 * No importa cómo declares la función, a
 * la función en JavaScript siempre tendrá un valor predeterminado 
 * propiedad prototype - con una excepción: una función flecha no tien una propiedad de prototipo predeterminada:
 */

const doSomothingFromArrowFunction = () => {};
console.log(doSomothingFromArrowFunction.prototype);

