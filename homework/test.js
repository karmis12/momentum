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

// --- if문


const age=parseInt(prompt("How old are you??"));
// console.log(isNaN(age));

if(isNaN(age)||age<0){
    console.log("Please tell your right age in number!!");
}else if(age<20){
    console.log("You are too young to drink alcohol");
}else if(age>=20 && age<60){
    console.log("Welcome What do you want to drink??");
}else if(60<=age && age<=99){
    console.log("Take care of your body!");
}else{
    console.log("Do whatever you want!");
}