
console.log("====function with no argumentand no return value====");
function show() {
    console.log("inside show function");
}
 show();
// function call or invoke
console.log("====function with argumentand no return value====");
function multiply(n1,n2) {
var result=n1*n2;
console.log("multiplication is:",result);
}
    
multiply(8,9);
multiply(100,300);
multiply(123.67 ,90.77);
multiply(70);

console.log("====function with argumentand and return value====");

function demo() {
    console.log("Inside demo function");
    return "Good Morning";

}
var result= demo();
console.log(result);

function square(num) {
    console.log("Given number for square is:",num);
    var result=num*num;
    return result;

}
var returnvalue=square(5);
console.log("sqare is:",returnvalue);