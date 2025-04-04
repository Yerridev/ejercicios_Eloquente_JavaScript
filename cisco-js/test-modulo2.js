
// let Vehiculo = function(id, latitud, longitud){

//     this.setPosition = function(latitud, longitud){
//         this.tiempo = Date.now();
//         this.longitud = longitud;
//         this.latitud = latitud;
//     };

//     this.id = id;
//     this.estado = 'desavilidato';
//     this.time = Date.now();
//     this.latitud = latitud;
//     this.longitud = longitud;
// };
// let vehiculo1 = new Vehiculo("UR022", 94.444, 18.92992);
// vehiculo1.setPosition(94.2342, 18.12342);
// console.log(vehiculo1);




// let Vehiculo = function(id, latitud, longitud){
//     this.setPosition = function(latitud, longitud){
//         this.time = Date.now();
//         this.latitud = latitud;
//         this.longitud = longitud;
//     };
//     this.id = id;
//     this.estado = "desavilitado";
//     this.setPosition(latitud, longitud);
// }



// let Vehiculo = function(datosIniciales){
//     let {id, latitud, longitud} = datosIniciales;
//     this.setPosition = function(latitud, longitud){
//         this.time = Date.now();
//         this.longitud = longitud;
//         this.latitud = latitud;
//     };
//     this.id = id;
//     this.estado = "desavilitado";
//     this.setPosition(latitud,longitud);
// };

// let vehiculo1 = new Vehiculo({id: "002", latitud: 49.3423, longitud: 19.234});
// let vehiculo2 = new Vehiculo({longitud: 19.2341, latitud: 34.9324, id:"002"});


// let Vehiculo = function({id, latitud, longitud}){
//     this.setPosition = function({latitud, longitud}){
//         this.time = Date.now();
//         this.longitud = longitud;
//         this.latitud = latitud;
//     };
//     this.getPosition = function(){
//         return {
//             latitud: this.latitud;
//             longitud: this.longitud
//         };
//     };
//     this.id = id;
//     this.estado = "desabilidatod";
//     this.setPosition({latitud, longitud});
// };
// let vehiculo1 = new Vehiculo({id: "001", latitud: 92.234, longitud: 12.43});
// let vehiculo2 = new Vehiculo({longitud: 14.234, latitud:48.23, id: "002"});

//clases
class ClaseVacia {};
let objetoVacio = new ClaseVacia;

class AlmostEmptyClass {
    constructor(sth){
        console.log(sth);
    };
    sayHi(){
        console.log("Hello!")
    };
};
let almostEmptyObject = new AlmostEmptyClass(120);
almostEmptyObject.sayHi();

class Vehiculo {
    constructor({id, latitud, longitud}){
        this.setPosition = function({latitud, longitud}){
            this.time = Date.now();
            this.longitud = longitud;
            this.latitud = latitud;
        };
        this.getPosition = function(){
            return {
                latitud: this.latitud,
                longitud: this.longitud
            };
        };
        this.id = id;
        this.estado = "desabilitado";
        this.setPosition({latitud, longitud});
    };
};


