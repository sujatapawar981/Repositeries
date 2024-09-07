
const arrayRollNumber=[113,45,56,11,32,45,109,799,56,45];
console.log(arrayRollNumber);

console.log("======1. Reverse The Array========");
 const reverseArray=arrayRollNumber.reverse();
 console.log(reverseArray);
 console.log("======2. use sort() method without custome logic (notice Issue)========");
 const onlySort=arrayRollNumber.sort();
 console.log(onlySort);
 
 console.log("===== 3.sort array asending order using custome logic=======");
 const sortCustLogic=arrayRollNumber.sort((n1,n2)=>{
    return n1>n2?1:-1;

 });
 console.log(sortCustLogic);
 console.log("===== 4.sort array asending order using custome logic and find out largest number=======");
 const largest = arrayRollNumber.sort((n1,n2)=>n1-n2)[arrayRollNumber.length - 1];
 console.log(largest);
 
 console.log("===== 5.sort array asending order using custome logic and find out smallest number=======");
 const smallest = [arrayRollNumber[0]];
 console.log(smallest);
 
 console.log("===== 6.Remove Dublicate from array without spread =======");
 const uniqueArray=[];
 for(let i=0;i<arrayRollNumber.length;i++){
    let element=arrayRollNumber[i];
    if (uniqueArray.indexOf(element)==-1) {
        uniqueArray.push(element);

    }
 }
 console.log(uniqueArray);
 