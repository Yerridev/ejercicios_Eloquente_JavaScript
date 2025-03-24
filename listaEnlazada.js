
class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(otroVector){
        return new Vec(this.x + otroVector.x, this.y + otroVector.y);
    }

    minus(otroVector){
        return new Vec(this.x - otroVector.x, this.y - otroVector.y);
    }

    get length(){
        return (Math.sqrt(this.x**2 + this.y**2));
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);



class Lista {
    constructor(valor, nodo){
        this.valor = valor;
        this.nodo = nodo;
    }

    get longitud(){
        return 1 + (this.nodo ? this.nodo.longitud : 0);
    }

    static desdeArreglo(array){
        let resultado = null;
        for(let i = array.length - 1; i>=0 ; i--){
            resultado = new this(array[i], resultado);
        }
        return resultado;
    }
}

// console.log(Lista.desdeArreglo([1,2,3]));

class ListaIterador {
    constructor(lista){
        this.lista = lista;
    }

    next(){
        if(this.lista == null){
            return { done: true };
        }

        let value = this.lista.valor;
        this.lista = this.lista.nodo;
        return { value, done: false };
    }
}

let lista = Lista.desdeArreglo([1,2,3]);
let iterador = new ListaIterador(lista);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

Lista.prototype[Symbol.iterator] = function(){
    return new ListaIterador(this);
};

let enlazada = Lista.desdeArreglo([1,2,3]);
for(let elemento of enlazada){
    console.log(elemento);
}


class LengthList extends Lista {
    #length;

    constructor(valor, nodo){
        super(valor, nodo);
        this.#length = super.longitud;
    }

    get length(){
        return this.#length;
    }
}

console.log(LengthList.desdeArreglo([1,2,3,4]).length);







































