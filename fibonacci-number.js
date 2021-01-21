let fib = function(n) {
    if (n === 0){
        return 0;
    }
    if (n === 1){
        return 1;
    }

    let num1 = 0;
    let num2 = 1;
    let next;
    let count = 2;
    let result;

    while (count <= n){
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        result = next;
        count++;
    }
    return next;
}

console.log(fib(6));