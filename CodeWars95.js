function divisibleBy(numbers, divisor){
    let arr=[];
    for (let i=0; i<numbers.length; i++) {
        if(numbers[i]%divisor==0) {
            arr.push(numbers[i]);
        }
    }
    return arr

}