
var greet="Good Morning";
console.log("Given string is:",greet);
var greethlength=greet.length;
console.log("Total no of characters is:",greethlength);

var charAt0=greet.charAt(0);
console.log("Charactor at index 0 is:",charAt0);
var charAt5=greet.charAt(5);
console.log("charctor at index 5 is:",charAt5);

console.log("======== Finding Last  index Charactor===========");
 var lastchar=greet.charAt(greet.length-1);
console.log("last index charactor is:",lastchar);

console.log("========== toUppercase ()=========");
var upperCaseString=greet.toUpperCase();
console.log("Result is:",upperCaseString);

console.log("========== toLowerCase()=========");
var lowerCaseString=greet.toLowerCase();
console.log("Result is:",lowerCaseString);

console.log("========== concat()=========");
var firName="jenny";
var lastName=" Gates";
var concatString=firName+lastName;
console.log("Concat String using + operator:",concatString);


console.log("==========concat String using concat method=========");
var result=firName.concat(lastName);
console.log("concat String using concat method :",result);


console.log("========== Indexof()=========");
var indexofresult=greet.indexOf("M");
console.log("indexof charctor M is:",indexofresult);


var result=greet.replace("Morning","Afternoon");
console.log(" After Replace  :",result);

console.log("========== Trim()=========");
var day="   saturday   ";
var daylength=day.length;
console.log("Befor trim length is:",daylength );


var dayAfterTrim=day.trim();

var dayAfterTrimlength=dayAfterTrim.length;

console.log("After string trim length is:",dayAfterTrimlength);

console.log("Total remove Charactor:leading and traling:",daylength-dayAfterTrimlength);

console.log("======= includes ======");


var result=greet.includes("Mor");
console.log(result);


var result=greet.includes("mor");
console.log(result);

console.log("======= slice () ======");

var result=greet.slice(3,11);
console.log(result);


var result=greet.slice(5);
console.log(result);


console.log("======= split with space() ======");

var mylove="i love only javascript";
var result=mylove.split(" ");
console.log("Total no of words:",result.length); 
console.log("======= string Template ======");
var city="Mumbai";


var country="India";
console.log(`My Country Is:${country},My city  Name is: ${city}`);
