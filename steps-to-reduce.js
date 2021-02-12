// counter
// while num !== 0
// check if even or odd
// if even, divide by 2
// if odd, subtract 1

function numberOfSteps(num){
    let count = 0;
    while (num > 0){
        if (num % 2 === 0){
            num /= 2;
        } else {
            num -= 1;
        }
        count ++;
    }
    return count;
}

