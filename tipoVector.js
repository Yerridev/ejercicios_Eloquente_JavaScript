
class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(objeto) {
        return new Vec (this.x + objeto.x , this.y + objeto.y);
    }

    minus(objeto) {
        return new Vec (this.x - objeto.x, this.y - objeto.y);
    }

    get length(){
        return Math.sqrt(this.x**2 + this.y**2);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(2, 8). minus(new Vec(1, 8)));
console.log(new Vec(3, 4).length);


