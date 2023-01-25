// function takes a number , square every gigit 

const squareDigit = (n) => {
    let result = "";
    while(n>0){ //9
        const digit = n%10; //9
        n = Math.floor(n/10); //0
        result = (digit*digit) + result; 
    }
    return (Number(result));
}

const squareDigitReduce = (n) => {
    const nAsAString = n.toString();
    const digits = nAsAString.split("");
    const result = digits.reduce((result , digit) => {
        result += (digit*digit);
        return result;
    } , "");

    return (result);


}

console.log(squareDigitReduce(123456));
console.log(squareDigit(123456));