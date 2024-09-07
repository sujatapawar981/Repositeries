function squareOfWordLength(sentence)
{
    console.log(`Given sentence is:${sentence}`);
    var result=sentence.split(" ");
    var len=result.length;
    var square=len*len;
    return square;
    
}
 
var result=squareOfWordLength("javascrpt");
console.log(`square of world length is :${result}`);


var result=squareOfWordLength("Google chrom");
console.log(`square of world length is :${result}`);

var result=squareOfWordLength("web Developer smart");
console.log(`square of world length is :${result}`);



console.log("====== step 2  =======");

var greet="I am Angular developer";
var greethlength=greet.length;
console.log(`the length of string"I am Angular Developer"is:${greethlength}`);

var result=greethlength/4;
console.log(`the result after divide :${result}`);
console.log("====== step 3 =======");

var result=greethlength*4;
console.log(`the result after multiplication :${result}`);