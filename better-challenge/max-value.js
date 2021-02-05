/*
Write a function that returns the maximum possible value obtained by inserting one '5' digit inside the decimal representation of integer N.

examples:
input: 1234 -> output: 51234
input: 7643 -> output 76543
input: 0 -> output 50
input: -661 -> output -5661
*/

function maxValue(n){
    if (n === 0){
        return 50;
    }
    const sign = Math.sign(n);
    const number = Math.abs(n).toString();
    let result = [];
    let fiveAdded = false;
    for (let i = 0; i < number.length ; i++){
        const num = parseInt(number[i]) * sign;
        if (num >= 5){
            result.push(number[i])
        } else if (!fiveAdded) {
            result.push("5");
            result.push(number[i]);
            fiveAdded = true;
        } else {
            result.push(number[i]);
        }
    }
    return parseInt(result.join("")) * sign;
}

console.log(maxValue(-661))