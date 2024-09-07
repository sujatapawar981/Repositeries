
let array=[10,20,30,20,80];
console.log(array);
const result=array.join(",");
console.log(result);
console.log(typeof result);

console.log("======= concat()======");

let arrayOne=[10,20,30];
let arrayTwo=[100,200,300];
const arrayContact=arrayOne.concat(arrayTwo);
console.log(arrayContact);



console.log("======= Creating array From Existing arrey====");

 let arrayThree=[10,20,30,20,80];
 let arrayFour=[];
 for (const element of arrayThree) {
    arrayFour.push(element);
    console.log(arrayThree);
    console.log(arrayFour);
    
    
 }
 console.log("======= Spread OPrater =======");
 let arrayFive=[10,20,30,20,80];
 console.log(arrayFive);
 
 console.log(...arrayFive);
 

 console.log("======= After spreading Adding new Array");
 let arraySix=[...arrayFive];
 console.log(arraySix);
 

 console.log("======= Array concatination /Adding Two spread  Array ");
  
 let arraySeven=[10,20,30];
 let arrayEight=[100,200,930];
 let arrayNine=[...arraySeven,...arrayEight];
 console.log(arrayNine);
 

 console.log("======== Sum array element========");
        let arrayten=[10,20,30,20,10];
        let sum=0;
        for (const element of arrayten) {
            sum=sum+element;

        }
        console.log(sum);
        
         console.log("======== Addition of Even position Numbers");
         
        var addition=0;
        for (let index = 0; index < arrayten.length; index++) {
            const element = arrayten[index];
            if (index%2==0) {
                addition=addition+element
            }
            
        }
        console.log(addition);

        console.log("======== Addition of Odd position Numbers");
        var addition=0;
        for (let index = 0; index < arrayten.length; index++) {
            const element = arrayten[index];
            if (index%2==1) {
                addition=addition+element
            }
            
        }
        console.log(addition);