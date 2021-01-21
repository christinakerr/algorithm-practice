let fib = function(n) {
    let result = 0;
    let accumulator = 0;
    for (let i = 0; i <= n; i++){
        accumulator = result;
        result += accumulator;
        console.log(result);
    }
    return result;
}

console.log(fib(5));