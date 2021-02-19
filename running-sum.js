function runningSum(nums){
    let sums = [];
    let sum = 0;
    for (let num of nums){
        sum += num;
        sums.push(sum);
    }
    return sums;
}