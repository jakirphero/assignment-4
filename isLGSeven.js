function isLGSeven (number){
    if (number < 7){
        const substaction = number - 7;
        return substaction;
    }
    else {
        const equal = number * 2;
        return equal;
    }
}
console.log(isLGSeven(-15));