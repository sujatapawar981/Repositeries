
const fruits=["Banana","Orange","Apple","Mango","Water Melon"];

console.log("======= 1) First Element in Array =======");

console.log(`First Element : ${fruits[0]}`);


console.log("=======2) Last Element in Array =======");

console.log(`Last Element: ${fruits[fruits.length-1]}`);


console.log("=======  3) Add papaya befor Banana ======");
fruits.unshift("papaya");
console.log(fruits);

console.log("======= 4) Remove Mango From Array ======");

const fruits1=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits1);
const splice32=fruits1.splice(3,1);
console.log(fruits1);
console.log(splice32);


console.log("=======  5) Add Pineapple  At the last ======");
fruits1.push("pineapple");
console.log(fruits1);

console.log("======= 6) Add Dragan Fruit After Mango ======");

const fruits2=["Banana","Orange","Apple","Mango","Water Melon"];
const newArray=fruits2.splice(4,0,"Dragan Fruit");
console.log(fruits2);

console.log("======= 7) Replace Element Orange With Kiwi  ======");
 
const fruits3=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits3);
const countDeleted=fruits3.splice(1,1,"kiwi");
console.log(countDeleted);
console.log(fruits3);

console.log("======= 8) Log The Element Starting from Index 1 to 4  ======");
const fruits4=["Banana","Orange","Apple","Mango","Water Melon"];
const startFrom=fruits4.slice(1,4);
console.log(startFrom);


console.log("=======9) Only Select Last 3 Element & Log On Console ======");

const fruits5=["Banana","Orange","Apple","Mango","Water Melon"];

const lastElement=fruits5.slice(2);
console.log(lastElement);





