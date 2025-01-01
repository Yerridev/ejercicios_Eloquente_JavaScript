let i = 1;

for (i; i <= 100; i++){
    // salida = "";
    // if(i % 3 === 0 && i % 5 === 0) salida += "fizzBuzz";
    // else if(i % 3 === 0) salida += "fizz";
    // else if(i % 5 === 0) salida += "Buzz";

    salida = (i % 3 === 0 ? 'fizz' : "") + (i % 5 === 0 ? 'Buzz' : "");

    console.log(salida || i);
}

