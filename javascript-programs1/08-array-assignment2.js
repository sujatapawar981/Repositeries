
let array=[20,31,40,25,23,11,29,9,60,2,11];
array.length;
console.log(array);
//  console.log (array[2]); // Read the value from array Or accessing Using Index
 
//  console.log(array[array.length-1]); // Read the  the last value from array 
 
console.log("===== 2.Log First Element & Last Element =======");
 let arrayNumbers=array[0];
 
 console.log(`First ELement:${arrayNumbers}`);
 console.log(`Last Element :${array[array.length-1]}`);

 console.log("===== 3.log Thired Last Element Using Length Property =======");
 console.log(`Last Thired Element :${array[array.length-3]}`);

console.log("======== 4.Find Out All even Number using For Of loop =======");

let even=[];
 for (const element of array) {
     if (element%2==0) {
        even.push(element);}
     }
     console.log(`Even numbers in an array are: ${even}`);
 
console.log("======== 5.Find Out All Odd Number using For Of loop =======");

let odd=[];
 for (const element of array) {
     if (element%2==1) {
        odd.push(element);}
     }
     console.log(`Even numbers in an array are: ${odd}`);
 

     console.log("======== 6.All Even position Element From arrayNumbers Sum it And log =======");
let addition=0;
for (let index = 0; index < array.length; index++) {
    if (index%2==0) {
        
    
    const element = array[index];
    addition=addition+element;
}
}console.log(addition);

console.log("======== 6.All Odd position Element From arrayNumbers Sum it And log =======");
let addition1=0;
for (let index = 0; index < array.length; index++) {
    if (index%2==1) {
        
    
    const element = array[index];
    addition1=addition1+element;
}
}console.log(addition1);

console.log("======== 8.Sum Of All Element =======");
 
let sum=0;
for (const element of array) {
    sum=sum+element;
}
console.log(sum);



console.log("======== 9.115 Is Avilable in array set() =======");
  

const set = new Set(array);
console.log(set.has(115));

console.log("======== 10.23 Is Avilable in array set() =======");

const set1 = new Set(array);
console.log(set1.has(23));

console.log("======== 11.Insert Numbers 55,66 at index 3 And log Array splice() =======");
const newArray=array.splice(3,0,55,66) ;
console.log(array);


console.log("=== 12.Delete 3 Eleement Starting From Index 4 And log arrayNumbers on Console =====");


const newArray1=array.splice(4,3) ;
console.log(newArray1);

console.log(array);


