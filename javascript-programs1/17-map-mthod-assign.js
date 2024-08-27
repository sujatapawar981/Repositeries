
const arrayNum=[20,11,40,25,23,11,9,31,60,2.19];
// 1.add 10 to each element and log the nwe array result
const addTen=arrayNum.map(element=>
    element+10);

console.log(addTen);

// 2.cube each array elelment and log result
const cubearray=arrayNum.map(element=>Math.pow(element,3));
console.log(`array after cubing each element`,cubearray);



// 3.add the index value to its correspoing  element and log the new array result
const addedindex=arrayNum.map((element,index)=>element+index);
console.log(addedindex);
