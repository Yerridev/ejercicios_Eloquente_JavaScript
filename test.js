
//Implementación de estructura de datos interable 
//LISTAS ENLAZADA / con clases

class Lista {
    constructor(valor, resto){
        this.valor = valor;
        this.resto = resto;
    }

    get length() {
        return 1 + (this.resto ? this.resto.length : 0);
    }

    static fromArray(array){
        let resultado = null;
        for ( let i = array.length - 1; i >= 0; i--){
            resultado = new this(array[i], resultado);
        }
        return resultado;
    }
}

