



console.log("======== Interview  Questions========");
console.log("=====Flat()====");


const array=[10,20,[4,6,9,8]];
const newArray=array.flat();
console.log(newArray);
const arrrNested=[10,20,[4,6,[77,88],8]];
const flattenArray=arrrNested.flat(2);  //  depth level defauli is 1 but we assign 2 then all element are without array
console.log(flattenArray);


console.log("========= Hanling empty slots======");

const  arraOne=[10, ,20,40,50, ,80];
console.log(arraOne);
const arraTwo=arraOne.flat();
console.log(arraTwo);

