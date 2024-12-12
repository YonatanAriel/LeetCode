export const kidsWithCandies = function(candies, extraCandies) {
    let biggestNum = candies[0];
    for(let i = 1; i < candies.length; i++){
        biggestNum = Math.max(biggestNum, candies[i])
    }
    
    const result = []
    for(let i = 0; i < candies.length; i++){
        if(extraCandies + candies[i] >= biggestNum) result.push(true)
        else result.push(false)
    }
    return result
};