
class chefsf extends Persona {
    constructor(tipo) {
        this.tipo = tipo;
    }

    cocinar(plato){
        console.log(`Cocinando ${plato}`)
    }
}

//prototipos

const cheff = {
    tipo: 'Cocina Básica',
    cocinar: function (plato){
        console.log(`Cocinando ${plato}`);
    },
    presentation: function () {console.log(`Hola, soy un cheff especialista en ${this.tipo}`)}
};

const yerri = {
    nombre: 'Yerri',
    edad: 31,
    profesion: 'Developer',
    tipo: 'Front-End'
};


// yerri.__proto__ = cheff;
Object.setPrototypeOf(yerri, cheff);

cheff.cortar = function (ingrediente){
    console.log(`Cortando ${ingrediente}`)
}

yerri.cortar("papa");

const yaco = {nombre: 'Yaco'};
const numbers = [3,9,7];
const sumar = (a, b) => a + b;

const regexp = /\d+/gi;
const ahora = new Date();

// 4. maneras de usar prototipos en js

//// 1. aobjetos literales
const obj = { nombre: 'yerr'};
const numeros = [4, 5 ,2,3];
const sumara = (a,b) => a+b;

/// 2.object.create(proto)
const sasha = Object.creadte(cheff);

/// 3. Fucnion constructura y clases
///esto es con funciones 
function cheffs(tipo = 'cocina básica'){
    this.tipo = tipo;
}

cheffs.prototype.concinar = function(plato) {
    console.log(`coninando ${plato}`);
}

cheffs.prototype.presentarse = function () {
    console.log(`Hola, soy un cheff especializado en ${this.tipo}`);
}

const yeri = new cheffs();

/// forma actual con class
class Cheffs {
    constructor(tipo = "cocina Básica"){
        this.tipo = tipo;
    }

    cocinar(plato){
        console.log(`Cocina ${plato}`);
    }

    presentarse(){
        console.log(`Hola, soy un cheff especializado en ${this.tipo}`);
    }
}

///Object palabras claves
Object.setPrototypeOf(hijo, padre);
hijo.__proto__ = padre;

