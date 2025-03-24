

class Group {
    #contenedor;

    constructor(){
        this.#contenedor = [];
    }

    add(valor){
        //condicion aun no es miembro
        if(!this.has(valor)){
            this.#contenedor.push(valor);
        }
    }

    delete(valor){
        this.#contenedor = this.#contenedor.filter((item) => item !== valor);
    }

    has(valor){
        return this.#contenedor.includes(valor);
    }

    static from(iterable){
        let grupo = new Group;
        for(let elemento of iterable){
            grupo.add(elemento);
        }
        return grupo;
    }

    [Symbol.iterator](){
        return new GroupIterador(this.#contenedor);
    }
}

let conjunto = Group.from([2,3,4]);

console.log(conjunto.has(2));
console.log(conjunto.has(1));
conjunto.add(9);
console.log(conjunto.has(9));
conjunto.delete(9);
console.log(conjunto.has(9));

class GroupIterador {
    #elementos;
    #posicion;

    constructor(elementos){
        this.#elementos = elementos;
        this.#posicion = 0;
    }

    next(){
        if(this.#posicion >= this.#elementos.length){
            return {done: true};
        } else {
            let resultado = { value: this.#elementos[this.#posicion], done: false};
            this.#posicion++;
            return resultado;
        }
    }
}

for (let elemento of Group.from([1,2,3])){
    console.log(elemento);
}
