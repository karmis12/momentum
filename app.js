// const calculator={
//     plus:function(a,b){
//         console.log(a+b);
//     },
//     minus:function(a,b){
//         console.log(a-b);
//     },
//     multi:function(a,b){
//         console.log(a*b);
//     },
//     divide:function(a,b){
//         console.log(a/b);
//     },
//     square:function(a,b){
//         console.log(a**b);
//     }
// }

// calculator.plus(9,3);
// calculator.minus(9,3);
// calculator.multi(9,3);
// calculator.divide(9,3);
// calculator.square(9,3);

const calculator={
    plus:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    multi:function(a,b){
        return a*b;
    },
    divide:function(a,b){
        return a/b;
    },
    square:function(a,b){
        return a**b;
    }
}

const plusResult=calculator.plus(4,5);
const minusResult=calculator.minus(plusResult,4);
const multiResult=calculator.multi(7,minusResult);
const divideResult=calculator.divide(multiResult,5);
const squareResult=calculator.square(divideResult,2);

console.log(plusResult, minusResult, multiResult, divideResult,squareResult);