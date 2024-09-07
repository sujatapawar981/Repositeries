function greaterNumber(n1 ,n2)
{
    var result= n1>=n2?n1:n2;
    
    console.log(`Given numbers are ${n1},${n2}: and greater number is:${result}`);
    
    
}
greaterNumber(10, -10);
greaterNumber(800,899);
function isEvenOrOddNum(num){

var result=num%2==0?true:false;
return result;


}


var result=isEvenOrOddNum(29);
console.log(`Number is:29 even:${result}`);

 
var result=isEvenOrOddNum(44);
console.log(`Number is:44 even:${result}`);
var result=isEvenOrOddNum(0);
console.log(`Number is:0 even:${result}`);
var result=isEvenOrOddNum(101);
console.log(`Number is:101 even:${result}`);


