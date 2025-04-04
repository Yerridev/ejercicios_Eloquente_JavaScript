//Desafio #1
let pinturas = [
    {
        titulo: "Mona liza", 
        autor: "Leonardo da Vinci", 
        fecha: 1503 }, 
    {
        titulo: "La última cena",
        autor: "Leonardo da Vinci",
        fecha: 1495
    },
    {
        titulo: "Noche Estrela",
        autor: "Vincent van Gogh",
        fecha: 1889
    },
    {
        titulo: "El Grito",
        autor: "Edvard Munch",
        fecha: 1893
    },
    {
        titulo: "Guernica",
        autor: "Pablo Picasso",
        fecha: 1937
    },
    {
        titulo: "El Beso",
        autor: "Gustav Klimt",
        fecha: 1907
    },
    {
        titulo: "Chica con un Pendiente de Perlas",
        autor: "Johannes Vermeer",
        fecha: 1665
    },
    {
        titulo: "El nacimiento de Venus",
        autor: "Sandro Botticelli",
        fecha: 1485
    },
    {
        titulo: "Las Meninas",
        autor: "Diego Velázquez",
        fecha: 1656
    },
    {
        titulo: "La Creación de Adan",
        autor: "Michelango",
        fecha: 1512
    }
];


pinturas.forEach(img => console.log(`${img.titulo} - (${img.autor}, ${img.fecha})`));


//Desafío #2
let Pintura = function(titulo, autor, fecha){
    this.titulo = titulo;
    this.autor = autor;
    this.fecha = fecha;
}

let getPintura = function(titulo, autor, fecha){
    return {
        titulo,
        autor,
        fecha
    }
}

let pinturas1 = [];
let pinturas2 = [];

pinturas.forEach(img => pinturas1.push(new Pintura(img.titulo, img.autor, img.fecha)));
console.log(pinturas1);

pinturas1.forEach(img => pinturas2.push(getPintura(img.titulo, img.autor, img.fecha)));
console.log("Creando con fabrica getPintura");
pinturas2.forEach(img => console.log(`${img.titulo} (${img.autor}, ${img.fecha})`));

//Desafío #3
let pintura = {
    lista: [],

    continue: function(titulo){
        let dentro = false;
        for(let img of this.lista){
            if(img.titulo === titulo){
                dentro = true;
                break;
            }
        }
        return dentro;
    },

    agregar: function(titulo, autor, fecha){
        if(!this.continue(titulo)){
            this.lista.push(new Pintura(titulo, autor, fecha));
        }else return "ya se agrego";
    },

    mostrar: function(){
        if(this.lista.length === 0){
            console.log('Lista vacia');
        }else{
            this.lista.forEach(item => console.log(`${item.titulo} - ${item.autor}, ${item.fecha}`));
        }
    },

    limpiar : function(){
        this.lista = [];
        console.log("Las pinturas han sido removidas");
    }
}



console.log("reto3")
pintura.agregar("Mona Lisa", "Leonardo da Vinci", 1503);
pintura.agregar('La ultima cena', 'Leonardo da Vinci', 1495);
pintura.agregar('La noche estrellada', 'Vincent van Gogh', 1889);
pintura.agregar('Mona Lisa', 'Leonardo da Vinci', 1503);
console.log(pintura.continue("Mona Lisa"));
pintura.mostrar();
pintura.limpiar();
pintura.mostrar();


//corregir el eliminar que sea iterable
//coreggir el prototitpo 
//hacer prueba de la función editar


// Reto #4

pintura.editar = function(titulo, autor, fecha){
    for(let img of this.lista){
        if(img.titulo === titulo){
            img.autor = autor;
            img.fecha = fecha;
            break;
        }
    }
};

pintura.delete = function(titulo){
    for(let i = 0; i<= this.lista.length; i++){
        if(this.continue(titulo)){
            this.lista.splice(Pintura[i],1);
        }
    }   
}

Pintura.prototype.view = function(){
    console.log(`${this.titulo} : ${this.autor}, ${this.fecha}`);
}

pintura.mostraras = function(){
    for(let img of this.lista){
        img.view();
    }
}

console.log("reto 4");
pintura.agregar('La noche estrellada', 'Vincent van Gogh', 1889);
pintura.agregar('Mona Lisa', 'Leonardo da Vinci', 1503);
pintura.mostrar();
pintura.editar('La noche estrellada', 'Vincent', 1504);
pintura.delete("Mona Liza"); 
console.log("use prototype");
pintura.agregar('La noche estrellada', 'Vincent van Gogh', 1889);
pintura.agregar('Mona Lisa', 'Leonardo da Vinci', 1503);
pintura.mostraras();





//Reto #5

let deepComp = function(objeto1, objeto2){
    let tamanio = Object.keys(objeto1).length === Object.keys(objeto2).length;
    if(tamanio){
        for(let i in objeto1){
            if(typeof(objeto1[i]) === typeof(objeto2[i])){
                tamanio = typeof(objeto1[i] === 'object' ? deepComp(objeto1[i], objeto2[i]) : objeto1[i] === objeto2[i]);
            } else {
                tamanio = false;
            }
            if(!tamanio) break;
        }
    }
    return tamanio;
}



let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b));
console.log(deepComp(a,c));
