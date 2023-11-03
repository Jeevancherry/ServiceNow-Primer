/*
// pattern
let rows=prompt("Enter the number of rows:");
let string="";
for(let i=1;i<=rows;i++){
    string+="*".repeat(i);
    string+="\n";
}
console.log(string);
*/




/*
//factorial of a given number
let n=prompt("enter the number:");
function factorial(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact*=i;
    }
    return fact;
}
console.log(factorial(n));
*/



//calucation of a given number
let num1=parseInt(prompt("Enter the first number:"));
let num2=parseInt(prompt("Enter the second number:"));
let operation=prompt("Enter the operation(+, -, *):");

const add=(a,b)=>a+b;
const subtract=(a,b)=>a-b;
const multiply=(a,b)=>a*b;

let result;

switch(operation){
    case "+":
        result=add(num1,num2);
        break;
    case "-":
        result=subtract(num1,num2);
        break;
    case "*":
        result=multiply(num1,num2);
        break;
    default:
        console.log("Invalid operation");
}
console.log(result);