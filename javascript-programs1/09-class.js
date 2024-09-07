// class student {
// fullName
// graduation
// college
// city
// // constructor is special method used to object initialize
//  constructor(arg1,agr2,agr3,arg4) {
//         this.fullName=arg1;  //  1. this is reference variable which will point to current variable 
//         this.graduation=agr2; //  2.when the data member and agr are same then this is used for defference
//         this.college=agr3;
//         this.city=arg4;

//     }
    
// }
// // new student is object & point to const std1
// const std1 = new student("jenny Gated",2024,"clg-one","pune");
// console.log(std1);
// // when we write new student then constructor automatically call 

 

// console.log("=============================== OR ===================================");
class student1 {
    constructor(fullName,graduation,college,city) {
        this.fullName=fullName;  //  1. here ""=fullName" is argument
        this.graduation=graduation; //  1.when the data member and agr are same then this is used for defference
        this.college=college;       //  2. this is reference variable which will point to current variable 
        this.city=city;
    

    }
    
}
// new student is object & point to const std1

console.log("======= using string templete =======");
const std2 = new student1("jenny Gated",2024,"clg-one","pune");

 console.log(`Student details->Full Name ${std2.fullName},graducation ${std2.graduation},college ${std2.graduation},city ${std2.city}`);
 
const std1 =new student1("sid Gates",2024,"clg-two","Mumbai");
console.log(`student1 details->Full Name ${std1.fullName},graducation ${std1.graduation},college ${std1.graduation},city ${std1.city}`);


        console.log("============ using Method==========")
        
        // Class have constructor,Data member OR Method,Member Function
        class student2 {
            constructor(fullName,graduation,college,city) {
                this.fullName=fullName;  //  1. here ""=fullName" is argument
                this.graduation=graduation; //  1.when the data member and agr are same then this is used for defference
                this.college=college;       //  2. this is reference variable which will point to current variable 
                this.city=city;
        
            }
             // Data Member
                 display(){
                 console.log(`student2 details->Full Name ${this.fullName},graducation ${this.graduation},college ${this.graduation},city ${this.city}`);
                }
             
            
        }
        const std11=new student2("sid Gates",2024,"clg-two","Mumbai");
        std11.display();