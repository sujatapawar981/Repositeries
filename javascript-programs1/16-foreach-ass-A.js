
const array=[1,-7,40,-77,91,0,108,89,-601];
array.forEach((element, index) => {
    console.log(element,index);
    
});

console.log("====== log the positive Numbers=====");

array.forEach((element)=>{
    if(element>=0){
        console.log(element);
        
    }
});

console.log("====Find negative number ,add into new array and log it== ");

const newArray=[];
array.forEach((element)=>{
    if(element<0)
    {
        newArray.push(element);
    }
});
newArray.forEach((element)=>{console.log(newArray);
});


console.log("====== Find even numbers======= ");
array.forEach((element)=>{
    if(element%2==0){
        console.log(element);
        
    }
});
console.log("====== sum of all element and log on console======= ");
let sum=0;
array.forEach((element)=>{

    sum=sum+element;

});
console.log(sum);

console.log("======log even index array value on console======= ");


console.log(array);

array.forEach((element,index)=>{
    if(index%2==0){
        console.log(element);
        
    }
});