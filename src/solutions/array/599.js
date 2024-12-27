export const findRestaurant = function(list1, list2) {
    const map = new Map();
    list1.forEach((item, i)) => {
        map.set(item, {index1: i})
    }
    list2.forEach((item, i)) => {
        const value = map.get(item) 
        if(!value) continue
        value.index2 = i
        map.set(value)
    }
    let result = []
    for (const [key, value] of map){
        if (!value.hasOwnProperty('index2')) continue
        result.push([key, value.index1 + value.index2])
    }
    return result.sort((a, b) => a[1] - b[1])]).map(subArray => subArray[0]).pop()
};