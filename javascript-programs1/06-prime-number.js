

console.log("======= Number Is Prime Or Not========");

function isPrime(num){
    for (let index = 2; index < num; index++){
        if (num %index==0) {
     return false;   
    } 
    
}
return true;
}var result=isPrime(4);
console.log(`Is Number 4 Prime ${result}`);

var  result=isPrime(5);
console.log(`Is Number 5 Prime ${result} `);
