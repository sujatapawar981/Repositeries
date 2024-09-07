

var outvariable=100;


function outer(){
   let outervariable=200;
//    nested Function
    let inner=function () {
        let innervariable=300;
        console.log(innervariable);
        console.log(outervariable);
        console.log(outvariable);
        
        
    };
    return inner;

}
let result=outer();
// calling inner function 1.way
// result();
console.log("====calling inner function 2.way  ==");
 
outer()();