let size = 8;
let tablero = "";

for(let y = 1; y<=size; y++){

    for(let x = 1; x<=size; x++){
        if ((x + y) % 2 === 0) tablero += " ";
        else tablero +="#";
    }
     tablero += "\n";
}

console.log(tablero);


