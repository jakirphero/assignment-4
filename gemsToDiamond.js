function gemsToDiamond(friend1, friend2, friend3){
    const total = friend1 + friend2 + friend3;
    if(total > 2000){
        const substaction = total - 2000;
        return substaction;
    }
    
}
const result = gemsToDiamond(550, 500, 1000);
// console.log(result);