let array=[10,20,30,20,80];
console.log(array);
 console.log (array[2]); // Read the value from array Or accessing Using Index
 
 console.log(array[array.length-1]); // Read the  the last value from array 
 

 
 console.log(`======= Update  value from array======`);
 
 array [1]=100;
 console.log(array);

 console.log("====== String Element Array   ========");
 let arrayList=["Jenny","Elon","Stew","Bill","Warn"];
console.log(arrayList[2]);

console.log("==== Update String Element==== ");

arrayList[3]="Alt";
console.log(arrayList);

console.log("======== Traversing an Arrary");

for (let index = 0; index < arrayList.length; index++) {
    const element = arrayList[index];
    console.log(element);
    
}

console.log("======== Traversing an Arrary in reverse order");
for (let index = arrayList.length-1; index >=0; index--) {
    const element = arrayList[index];
    console.log(element);
    
}


console.log("======== Print only Even Indexed elements");
for (let index = 0; index<=arrayList.length;index=index+2) {
    const element = arrayList[index];
    console.log(element);
    
}


console.log("========= OR========");


for (let index = 0; index<=arrayList.length;index=index+2) {
    if (index%2==0) {
        
    
    const element = arrayList[index];
    console.log(element);
}
}