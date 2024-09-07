
function sayHello(callbck){
    console.log("hello......");
    callbck();
    let tata=function(){
        console.log("Good Buy.....");
        
 
    }


    return tata;
}
let greet=function(){
console.log("Good Evening......");

}
let result = sayHello(greet);
result();
// // 2 way 
// sayHello (greet)();