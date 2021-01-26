function getIdealNums(low, high) {
    let numbers = 0;
    for (let i = low; i <= high; i++) {
        let number = i;
        while (number % 3 === 0){
            number /= 3;
        }
        while (number % 5 === 0){
            number /= 5;
        }
        if (number === 1){
            numbers++;
        }
    }
    return numbers;
}

console.log(getIdealNums(1, 1));