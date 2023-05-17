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