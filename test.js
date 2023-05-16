// const a=4;
// const b=3;
// let myName="jimmy";


// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("my name is "+myName);

// myName="jung_tae";
// console.log("my name is "+myName);

// const theWeekend=["mon", "tue","wed","thu","fri","sat"];

// console.log(theWeekend);
// console.log(theWeekend[0]);
// theWeekend.push("sun");
// console.log(theWeekend);

// const jimmy={
//     age:25,
//     height:175,
//     weight:66,
//     blood:"b"
// }

// console.log(jimmy);
// console.log(jimmy.age);

function myName(myName){
    console.log("Hello my name is "+myName)
}

myName("jimmy");




function plus(a,b){
    console.log(a+b);
}
function minus(a,b){
    console.log(a-b);
}
function multi(a,b){
    console.log(a*b);
}
function divide(a,b){
    console.log(a/b);
}

plus(2,4);
minus(2,4);
multi(2,4);
divide(2,4);

const player={
    name:"jimmy",
    age:25,
    sports:"soccer",
    sayHello:function(otherPersonName){
        console.log("hello "+otherPersonName);
    }
}

console.log(player.name)
console.log(player.age)
console.log(player.sports)
player.sayHello("alice");