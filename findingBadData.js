function findingBadData (numbers){
    let count = 0;
    for (let i = 0; i < numbers.length; i++){
        const elemnet = numbers[i];
        if(elemnet < 0){
            count = count + 1;
        }
    }
    return count;
}
const result = findingBadData([12, -2, 1, 20, 33, -4, -5]);
// console.log(result);