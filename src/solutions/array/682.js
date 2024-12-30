export const calPoints = function(o) {
    let recordArr = [];
    let sum = 0;
    for(let i = 0; i < o.length; i++){
        if(o[i] === "C") {
            const prevScore = recordArr.pop();
            sum -= prevScore;
        }
        else if(o[i] === "D"){
            sum += recordArr[recordArr.length - 2] * 2
            recordArr.push(recordArr[recordArr.length - 2] * 2)
        } 
        else if(o[i] === "+"){
            sum += sum
            recordArr.push(sum)
        } 
        else {
            sum += o[i]
            recordArr.push(o[i])
        }
    }
    return sum
};