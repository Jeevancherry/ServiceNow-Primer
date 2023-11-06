
// //number guessing game:
// const random_number=Math.floor(Math.random()*100)+1;
// let guess=prompt("enter a values between 1 to 100:");
// while(guess!=random_number){
// if(guess<random_number){
//     guess=prompt("too low , so try it again");
// }else{
//     guess=prompt("too high, so try it again");
// }
// }
// alert("correct! random number is "+ random_number);

const person={
    name:"",
    age:0,
    grade:"",
    displayInfo: function(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    },
};
person.name=prompt("Enter the name of the person:");
person.age=parseInt(prompt("Enter the Age:"));
person.grade=prompt("Enter the Grade:");
person.displayInfo();