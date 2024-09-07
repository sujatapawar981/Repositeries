let myset=new Set();

myset.add(10);
myset.add(50);
myset.add(20);
myset.add(50);
myset.add(20);
    console.log(myset);
    
console.log("==== Finding Size of set=======");
console.log(myset.size);


console.log("==== Delete Element =======");

myset.delete(20);
console.log(myset);
console.log(myset.size);

console.log("=====Has Element =======");
 
console.log(myset.has(100));
console.log(myset.has(10));

console.log("=====Traversing Set=======");

for (const element of myset) {
    console.log(element);
    
}


console.log("======= Removing Doublicate element From array ======");
 let array=[10,20,30,20,80,30,10];
 let setNum=new Set();
 for (const element of array) {
    setNum.add(element);
    
 }
console.log(setNum);
// OR
 

// let setNum=new Set(array);
// console.log(setNum);


console.log("======= Removing Doublicate Element And Speread And store Another New array ======");

let arrayNew=[...new Set(array)];
console.log(arrayNew);

console.log("=======  1.WAp TO reverse String========");
let js="JavaScript";
let reverseString=js.split("").reverse().join("");
console.log(reverseString);


console.log("=======  2.WAp TO reverse String========");

let javaReverse="";
for (let index = index.length-1; index >= 0; index--) {
    let char=js.charAt(index);
    javaReverse=javaReverse+char;

    
}
console.log(javaReverse);
