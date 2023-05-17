function evenOdd (name){
    const remainder = name.length % 2;
    if (remainder === 0){
        // console.log('this is even')
        return 'is even'
    }
    else {
        // console.log('this is odd');
        return 'is odd'
    }
}
const result = evenOdd('jakir');

