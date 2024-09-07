
let array=[10,20,30,20,80];
console.log(array);
console.log("Insert the Element At the End of array");
array.push(40);
console.log(array);

console.log("Insert the Element At the  Begining of array");
array.unshift(90);
console.log(array);


console.log("Delete the Element At the  End of array");
let arraynum=[10,20,30,20,80];
console.log(arraynum);

arraynum.pop();
console.log(arraynum);

console.log("Delete the Element At the  Begining of array");
arraynum.shift();
console.log(arraynum);


console.log("====== Slice()    ==========");



console.log("===Select index From =====");
 let numArray=[10,20,30,20,80,40];
 let arraySlice=numArray.slice(3);
 console.log(arraySlice);
console.log("===");

console.log("===Starting  index From =====");
const sliceElement= numArray.slice(1,4);
console.log(sliceElement);


console.log("======= Splice()// Deleting Middle======");

let list=[10,20,30,20,80,40];
let splice3=list.splice(3);
console.log(list);
console.log(splice3);
console.log(list);


let listone=[10,20,30,20,80,40,90,100];
console.log(listone);
const splice32=listone.splice(3,2);
console.log(listone);
console.log(splice32);




console.log("Splice() Insert Element Without any replacing any element ");

let listTwo=[10,20,30,80,40];
console.log(listTwo);
const newArray=listTwo.splice(2,0,444);
console.log(newArray);
console.log(listTwo);


let listThree=[90,66,88,30];
console.log(listThree);
const deletedCount=listThree.splice(1,0,11,22,33,44);
console.log(deletedCount);
console.log(listThree);

console.log("======Splice() Insert Element  by replaceing array element======== ");


let listFour=[10,20,30,80,40];
console.log(listFour);
let DeletedCount=listFour.splice(2,1);
console.log(deletedCount);
console.log(listFour);

console.log("=== Example 2  =======");
 
 let listFive=[10,20,30,80,40];
 console.log(listFive);
 const countDeleted=listFive.splice(2,2,88,99,66,33,11);
 console.log(countDeleted);
 console.log(listFive);
 
 
 


