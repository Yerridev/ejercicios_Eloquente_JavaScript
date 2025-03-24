
class Group {
    #miembros = [];

    add (value){
        if(!this.has(value)){
            this.#miembros.push(value);
        }
    }

    delete(value) {
        this.#miembros = this.#miembros.filter(v => v !== value)
    }

    has(value){
        return this.#miembros.includes(value);
    }

    static from(coleccion){
        let group = new Group;
        for(let value of coleccion){
            group.add(value);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterador(this.#miembros);
    }
}

class GroupIterador {
    #miembros;
    #position;

    constructor(miembros){
        this.#miembros = miembros;
        this.#position = 0;
    }

    next(){
        if(this.#position >= this.#miembros.length){
            return {done: true};
        } else {
            let result = { value: this.#miembros[this.#position], done: false};
            this.#position++;
            return result;
        }
    }
}

for (let valor of Group.from(["a", "b", "c"])){
    console.log(valor);
}
