
// Arrow Function with no argument and no return value
var show= ()=>{

    console.log(`Inside show Function`);
    
}
show();
// // Syntax of Arrow Function
// ()=>{

// }
// Arrow Function with  argument and no return value

let add=(n1,n2)=>{
    console.log(`Addition is:${n1+n2}`);
    
}
add(10,20);
// Arrow Function with  argument and  return value
let multiply=(n1,n2)=>{
let result=n1*n2;
return result;
}
let mul=multiply(20,5);
console.log(`Multiplication is:${mul}`);
