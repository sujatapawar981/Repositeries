

let person={
    FirstName:"jenny",
    LastName:"Gates",
    Age:24,
    isMarried:true,
    city:"Pune",
    Pin:413307,
    street:"Wakad"
}


// object Destructuring
const {FirstName,LastName,Pin,city}=person



//  const FirstName=person.FirstName; // here const FirstName is variable 
// const LastName=person.LastName;
// const Pin=person.Pin;
// const city=person.city;
console.log(FirstName,LastName,Pin,city,country="India");

// object Destructuring with Default value



console.log(FirstName,LastName,Pin,city,country);

console.log("===== For Array=====");

const array=[10,20,30,40,50];
const[a0,a1,a2,a3]=array;
// 
// let a1=array[0];
// let a2=array[1];
// let a3=array[2];
// let a4=array[3];
console.log(a0,a1,a2,a3);
