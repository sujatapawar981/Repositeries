

function jenneyHomework(callback){

console.log("====== Jenny Stared Homework=====");
console.log("she is completed her homework");
console.log("she have completed her home work  step by step");
callback();

}
let eloneCopyHomeWork=function (){

console.log("===Elone Come back=====");
console.log("straed copy HomeWork");
console.log("finally Compleyted his Assienment");



}
jenneyHomework(eloneCopyHomeWork);

console.log("====== Inbuild callback function=======");
// 1sec=1000 mill sec
var greet=function(){

    console.log("Hello-Good Morning");
}
// 1.way
setTimeout (greet,8000);
// 2.way
// setTimeout (function(){

// console.log(`Hello-Good morning`);


// },80000);