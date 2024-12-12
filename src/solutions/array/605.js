export const canPlaceFlowers = function (flowerbed, n) {
    let counter = 0;
    if (flowerbed[0] === 0) {
        counter++;
        flowerbed[0] = 1;
    }

    for (let i = 1; i < flowerbed.length - 1; i++) {
        if(i === flowerbed.length - 1){
            if(flowerbed[i] === 0 && flowerbed[i + 1] === 0) counter++;
            break;
        }
        if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            counter++;
        }
    }

    return counter >= n

};