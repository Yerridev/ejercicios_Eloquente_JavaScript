//LA VIDA SECRETA DE LOS OBJETOS

//---- Métodos

function speak(frase){
    console.log(`El perro ${this.name} dice '${frase}'`);
}

let perroYaco = {
    name: "Yaco",
    speak
}

let perroShadow = {
    nmae: "Shadow",
    speak
}

perroYaco.speak("Quiero salir");
perroShadow.speak("Tengo hambre");

speak.call(perroYaco, "crema");

//// this in around function

let buscador = {
    find(array){
        return array.some(v => v == this.value);
    },
    value: 5
};
console.log(buscador.find([4, 5]));


let parecido = {
    busca(array){
        return array.some(p => p == this.texto);
    },
    texto: 'u'
}

console.log(parecido.busca(['i', 'u']));

//// Prototipos

let vacio = {};
console.log(vacio.toString);
console.log(vacio.toString());

console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf(Object.prototype));

let protRabbit = {
    habla(frase){
        console.log(`El conejo ${this.tipo} dice '${frase}'`);
    }
};

let conejoNegro = Object.create(protRabbit);
conejoNegro.tipo = "negro";
conejoNegro.habla("Salto muy alto");

//// Clases

function makeRabbit(tipo){
    let conejo = Object.create(protRabbit);
    conejo.tipo = tipo;
    return conejo;
}

class Conejo {
    constructor(tipo){
        this.tipo = tipo;
    }
    speak(frase){
        console.log(`El conejo ${this.tipo} dice '${frase}'`);
    }
}

let conejoSaltante = new Conejo("saltador");

let object = new class {getWord() {return 'Hello'}};
console.log(object.getWord());

///// propiedades private
class CodigoAleatorio {
    #max;
    constructor(max){
        this.#max = max;
    }
    getNumber(){
        return Math.floor(Math.random() * this.#max);
    }
}

// Sobreescribiendo propiedades

Conejo.prototype.teeth = "pequeñas";
console.log(conejoSaltante.teeth);

conejoSaltante.teeth = "largos, afilados y sangrientos";
console.log(conejoSaltante.teeth);

console.log((new Conejo("basico")).teeth);
console.log(Conejo.prototype.teeth);

console.log(Array.prototype.toString ==
            Object.prototype.toString
);

console.log([1,2].toString());
console.log(Object.prototype.toString.call(20,2));

/// Mapas
let edades = {
    Yerri: 22,
    Anghy: 12,
    Yaco: 5
};

console.log(`Yaco tiene ${edades["Yerri"]}`);
console.log("¿SE conoce la edad de Juan ", "Juan" in edades);
console.log("¿Se conoce la edad de toString?" , "toString" in edades);

console.log("toString" in Object.create(null));

let ages = new Map();
ages.set("Yerri", 22);
ages.set("Anghy", 12);
ages.set("Julia", 62);

console.log(`Yerri tiene ${ages.get("Yerri")}`);
console.log("¿Se conoce la ead de Juan?", ages.has("Juan"));
console.log(ages.has("toString"));
console.log(Object.hasOwn({x: 1}, "x"));
console.log(Object.hasOwn({x:1}, "toString"));

//Polimorfismo (varias formas)
Conejo.prototype.toString = function(){
    return `un conejo ${this.tipo}`;
}

console.log(String(conejoSaltante));

Array.prototype.forEach.call({
    length: 2,
    0: "A",
    1: "B"
}, elt => console.log(elt));

// Getters, setters y estáticos
let varyingZise = {
    get size(){
        return Math.floor(Math.random() * 100);
    }
};

console.log(varyingZise.size);
console.log(varyingZise.size);

class TEmperature {
    constructor(celcius){
        this.celsius = celcius;
    }

    get fahrenheit(){
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value){
        this.celsius = (value - 32) / 1.8;
    }

    static fromFarenheit(value){
        return new TEmperature((value - 32)/ 1.8);
    }
}

let temp = new TEmperature(22);
console.log(temp.fahrenheit);

temp.fahrenheit = 86;
console.log(temp.celsius);

// Simbolos
let sym = Symbol("nombre");
console.log(sym == Symbol("nombre"));

Conejo.prototype[sym] = 55;
console.log(conejoSaltante[sym]);

const longitud = Symbol("longitud");
Array.prototype[longitud] = 0;

console.log([1,2].length);

console.log([1,2][longitud]);

let miViaje = {
    longitud: 2,
    0: "lankwitz",
    1: "Babelsberg",
    [longitud]: 21500
};
console.log(miViaje[longitud], miViaje.longitud);

// La interfaz del iterador
let okTierador = "OK"[Symbol.iterator]();
console.log(okTierador.next());
console.log(okTierador.next());
console.log(okTierador.next());



class List {
    constructor(value, rest){
        this.value = value;
        this.rest = rest;
    }

    get length() {
        return 1 + (this.rest ? this.rest.length : 0);
    }

    static fromArray(array){
        let result = null;
        for (let i = array.length - 1; i >= 0; i--){
            result = new this(array[i], result);
        }
        return result;
    }
}

class ListIterador {
    constructor(list){
        this.list = list;
    }

    next() {
        if (this.list == null){
            return { done: true};
        }
        let value = this.list.value;
        this.list = this.list.rest;
        return { value, done: false};
    }
}

List.prototype[Symbol.iterator] = function(){
    return new ListIterador(this);
};

let lista = List.fromArray([1,2,3]);
for (let elemento of lista){
    console.log(elemento);
}


//Herencia 

class LenghtList extends List {
    #length;

    constructor(valor, rest){
        super(valor, rest);
        this.#length = super.length;
    }

    get length() {
        return this.#length;
    }
}

console.log(LenghtList.fromArray([1,2,3]).length);

// El operador instaceof
console.log(
    new LenghtList(1, null) instanceof LenghtList
);
console.log(new LenghtList(2, null) instanceof List);
console.log(new List(3, null) instanceof LenghtList);
console.log([1] instanceof Array);




function saySome(message){
    console.log(`El perro de raza ${this.type} dice '${message}'`);
}

let bobby = {
    type: 'Dog',
    saySome
}

let bobyHappy = {
    type: 'Feliz',
    saySome
}

bobby.saySome("Soy el pequeño");
bobyHappy.saySome("Estoy saltando");

saySome.call(bobyHappy, "I am happy");

let ojtVacio = {};
console.log(ojtVacio.toString);
console.log(ojtVacio.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));


let protoRabbit = {
    hablar(mensaje){
        console.log(`El conejo ${this.type} dice '${mensaje}'`);
    }
};

let conejoNegros = Object.create(protRabbit);
conejoNegros.type = "Negro";
conejoNegros.habla('Soy el señor de la noche');



let protoPerro = {
    saludar(nombre){
        console.log(`Hola, soy ${nombre} de raza ${this.raza}`);
    }
}

let neron = Object.create(protoPerro);
neron.raza = "doverman";
neron.saludar("Neron");















































