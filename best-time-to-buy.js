function maxProfit(prices){
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++){
        for (let j = 0; j < prices.length; j++){
            if (j > i && (prices[j] - prices[i] > maxProfit)){
                maxProfit = prices[j] - prices[i];
            }
        }
    }
    return maxProfit;
}