function minimizeBias(ratings) {
    let bias = 10000000000;
    let ratingIndex = [];
    let ratingIndex1;
    let ratingIndex2;
    let result = 0;
    for (let i = 0; i < ratings.length; i++) {
        if (ratingIndex.includes(i)) {
            break;
        } else {
            let ratingOne;
            let ratingTwo;
            for (let j = 1; j < ratings.length; j++) {
                if (ratingIndex.includes(j)) {
                    break;
                } else if(i===j){
                    break;
                }else {
                    let difference = Math.abs(ratings[i] - ratings[j]);
                    if (difference < bias) {
                        bias = difference
                        ratingOne = ratings[i];
                        ratingTwo = ratings[j];
                        ratingIndex1 = i;
                        ratingIndex2 = j;
                    }
                }

            }
            console.log(ratingOne, ratingTwo);
            ratingIndex.push(ratingIndex1, ratingIndex2);
            console.log(ratingIndex);
            result += Math.abs(ratingOne - ratingTwo);
        }
    }
    return result;
}

console.log(minimizeBias([4, 2, 5, 1]))