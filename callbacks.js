// callback vs promises

const operation = (number1, number2, callback) => {
    return setTimeout(() => {
        callback(number1, number2);
    }, 500);
}


operation(1, 6, (a, b) => {
    console.log(a+b);
});


