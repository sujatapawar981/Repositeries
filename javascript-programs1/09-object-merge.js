
const emp={

firstName:"Jenny",
lastName:"Jates",
age:52
}
console.log("======= Updat yOr Modifi Object =====");

emp.age=57;
console.log(emp);

console.log("==== can not change content use freeze====")
Object.freeze(emp);
emp.firstName="Elon";
console.log(emp);


// console.log("==== same for array====")

// Object.freeze(arrayName);

console.log("==== Object cloneing ====")

const student={
    firstName:"Jenny",
    lastName:"Jates",
    age:21
}
const cloneStudent=Object.assign({},student);
console.log(cloneStudent);

console.log("==== using spread oprator =====");
const cloneObj={...student};
console.log(cloneObj);

console.log("==== Object Merge  =====");

const std={
    firstName:"Jenny",
    lastName:"Jates",
    age:21
}

const address={
    city:"Mumbai",
    pin:413307
}
const merged = Object.assign({},std,address);

console.log(merged);
console.log("=== using spread opread ===== ");
 
const merge1={...std,...address};
console.log(merge1);
