

console.log("  ===== Function Constructor =======");
 
// .....Not Important
function Student(fullName,graduation,college,city) {
    this.fullName=fullName;  //  1. here ""=fullName" is argument
    this.graduation=graduation; //  1.when the data member and agr are same then this is used for defference
    this.college=college;       //  2. this is reference variable which will point to current variable 
    this.city=city;

 
    
}
const std1 = new Student("jenny Gated",2024,"clg-one","pune");
console.log(std1);

const std2 = new Student("jenny Meny",2023,"clg-two","Mumbai");
console.log(std2);

Student.prototype.country="India";
console.log(std1.fullName,std1.country);
console.log(std2.fullName,std2.country);

// Prototype


const array=[10,20,30,40];
array.push(100);
array.pop();