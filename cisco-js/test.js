
let contacto =  {
	email_1: "yerri.contactos@gmail.com",
	email_2: "cramirezabonda@uss.edu.pe"
};

for (let i = 1; i<=2; i++){
	let llave = "email_" + i;
	console.log(llave);
	console.log(contacto[llave]);
}


for (let i = 1 ; i <= 2; i++){
    let key = "email_" + i;
    console.log(`${key}: ${contacto[key]}`);
}

if(contacto.notas){
    console.log(contacto.notas);
}

console.log(contacto.notas);

if("notas" in contacto){
    console.log(contacto.notas);
}

let contact = {
    phone: "922 653 095",
    email: "yerri.contactos@gmail.com"
};

for (let x in contact){
    console.log(x);
}

for (let item in contact){
    console.log(contact[item]);
}

for(let all in contact){
    console.log(`${all}: ${typeof contact[all]} : ${contact[all]}`);
}

let llaves = Object.keys(contact);

console.log(llaves);

// Copiando objetos

let punto0 = {x:10, y: 20};
let punto1 = punto0; // Acá copiamos la referencia
let punto2 = {};
Object.assign(punto2, punto0); // copiamos las propiedades detro del nuevo objeto
console.log(punto2.x);
console.log(punto2.y);
console.log(punto1 === punto0); // true
console.log(punto1 === punto2); // false

let punto3 = {};
Object.assign(punto3, punto0, {z: 100});
console.log(punto3.z);

var punto4 = {};
Object.assign(punto4, punto3, {z: 200, color: "red"});
console.log(punto4.z);

let punto6 = { x: 10, y: 20};
let punto7 = Object.assign({}, punto6);
let punto8 = Object.assign({}, punto6, {z: 100});
console.log(punto8);

let puntoUno = {x:10, y: 20};
let puntoDos = {...puntoUno};
let puntoTres = {...puntoUno, z: 100};
console.log(puntoDos);

//prueba de copia con objetos anidados
let circulo1 = {
	radio: 100,
	centro: {
		x: 100,
		y: 100
	}
};

let circulo2 = {...circulo1};
circulo1.radio = 200;
circulo1.centro.x = 200;
console.log(circulo2.radio);
console.log(circulo2.centro.x);
console.log(circulo1 === circulo2); // false
console.log(circulo1.centro === circulo2.centro) // true

//implementación de función para clonacion profunda
let clonacionProfunda = function(objeto){
	let nuevoObjeto = {...objeto};
	for(let propiedad in nuevoObjeto){
		if(typeof nuevoObjeto[propiedad] === "object"){
			nuevoObjeto[propiedad] = clonacionProfunda(nuevoObjeto[propiedad]);
		}
	}
	return nuevoObjeto;
}

let comida = {
    nacionalidad: "peruana",
    desayuno: {
        pan: 2,
        huevos: 4
    },
    almuerzo: {
        arroz: 500,
        menestra: 200,
        postre: {
            flan: 1,
            torta: 3
        }
    }
}

let comida2 = clonacionProfunda(comida);
console.log(comida2);
console.log(comida === comida2);
console.log(comida2.almuerzo.postre.flan);

//Métodos

let circulo = {
    radio: 100,
    centro: {
        x: 0,
        y: 0
    },

    obtenerTipo(){
        return (typeof circulo.radio === "number" ? "circulo" : "desconocido");
    }
}

console.log(circulo.obtenerTipo());


//this

let figura = {...circulo};
delete circulo.radio;
console.log(figura.radio);
console.log(figura.obtenerTipo());

let contactos = {
	_edad: 22,
	nombre: "yerri",
	apellido: "chilcon",
	get fullName() {return `${this.nombre} ${this.apellido}`;},
	get edad() {return this._edad;},
	set edad(a) { if(a > 0) this._edad = a;}
};

console.log(contactos.fullName);
contactos.edad = -20;
console.log(contactos.edad);

let claves = Object.keys(contactos);
console.log(claves);

let desc = Object.getOwnPropertyDescriptor(contactos, "nombre");
console.log(desc);

let persona = {};
Object.defineProperty(persona, "_age", {
    value: 22,
    writable: true,
    enumerable: false,
    configurable: true
});
Object.keys(persona);
console.log(persona._age);
let enumKeys = Object.keys(persona);
let allKeys = Object.getOwnPropertyNames(persona);
console.log(enumKeys);
console.log(allKeys);


let createPoint = function(x, y){
    let obj = {};
    obj.x = x;
    obj.y = y;
    return obj;
}

let point1 = createPoint(1, 1);
let point2 = createPoint(2, 2);
console.log(point1.x);
console.log(point2.x);

let crearColorPunto = function(x, y, color){
    let _info = "objeto bajo construcción";
    let _color = color;
    console.log(_info);

    return {
        x: x,
        y: y,
        obtenerColor(){ return _color}
    }
};

let colorearPunto1 = crearColorPunto(1,1,"red");
let colorearPunto2 = crearColorPunto(2,2, "pink");
console.log(colorearPunto1.obtenerColor());
console.log(colorearPunto2.obtenerColor());
console.log(colorearPunto1._color);
console.log(colorearPunto1._info);

let des = Object.getOwnPropertyNames(colorearPunto1);
console.log(des);

let ColoredPoints = function(x, y, color){
    let _info = "... objeto bajo construcción";
    let _color = color;
    console.log(_info);

    this.x = x;
    this.y = y;
    this.getColor = function(){return _color};
}

let coloredPoint1 = new ColoredPoints(1,1,"red");
let coloredPoint2 = new ColoredPoints(2,2,"pink");
console.log(coloredPoint1.getColor());
console.log(coloredPoint2.getColor());
console.log(coloredPoint1._color);

console.log(ColoredPoints.constructor.name);

console.log(typeof ColoredPoints.constructor);

let a = {};
console.log(typeof a.constructor);
