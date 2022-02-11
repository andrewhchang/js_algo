var maxProfit = function(prices) {
    let profit = 0;
    let min = null;
    
    prices.forEach((price) => {
        if (price > min) {
            profit = Math.max(profit, price-min);
        } else if(price < min) {
            min = price;
        };
    });
    
    return profit;
};

// Keep track of 1 thing, max profit.
// If you find a lower number further on, that becomes the new lowest number you
// calculate the rest of the max profits on.
//
// Return max profit.
