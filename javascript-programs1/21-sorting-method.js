
console.log("===== Reversing ARRAY=====");

const array=["Jenny","Stew","Elone","Bill"];
console.log(array);
const reverseArr=array.reverse();
console.log(reverseArr);

console.log("===== SORTING ARRAY in ascending array====");
const array1=["Jenny","Stew","Elone","Bill"];
console.log(array1);

const array2=array1.sort();
console.log(array2);


console.log("===== SORTING ARRAY in descending array====");


const array3=array1.reverse();
console.log(array3);

console.log("===== SORTING ARRAY Numbers====");
const array4=[10,2,900,30,4,7];
console.log(array4);
console.log("=========== ascending order========");

console.log("=============   writing our custom logic for asending Order======");

const arrayFive=array4.sort((n1,n2)=>{
    return n1>n2? 1:-1;
});
console.log(arrayFive);
console.log("=========== desending Order ========");
const array6=[10,2,900,30,4,7];
console.log("====== sorting array of numbers in desending order=====");
console.log("======= first way: sort in array using ctome logic in reverse it======");
console.log("===== second way:Modify sort()method custom logic");
const arraySix=array4.sort((n1,n2)=>{
    return n1>n2? -1:1;
});
console.log(arraySix);



class Employee{

    constructor(emp_id,emp_name,emp_dept,emp_company,emp_salary){
    
    this.emp_id=emp_id;
    this.emp_name=emp_name;
    this.emp_dept=emp_dept;
    this.emp_company=emp_company;
    this.emp_salary=emp_salary;
    
    }
    }
    const emp_Anil=new Employee(22,"Anil","IT","TCS",50000);
    const emp_Radha=new Employee(33,"Radha","HR","Wipro",74000);
    const emp_Rishi=new Employee(55,"Rishi","Finance","TCS",47000);
    const emp_Sonali=new Employee(66,"Sonali","Finance","Infy",45000);
    const emp_Monika=new Employee(77,"Monika","IT","Wipro",40000);
    const emp_viny=new Employee(88,"Vinayak","IT","TCS",75000);
    const emp_Mahi=new Employee(99,"Mahesh","HR","Infy",85000);
    
    const arrayEmployee=[emp_Anil,emp_Radha,emp_Rishi,emp_Sonali,emp_Monika,emp_viny,emp_Mahi];
    console.log("========== list the empoyee by their Names in asending order===== ");
    const arrayEmpSort=arrayEmployee.sort((emp1,emp2)=>{
        return emp1.emp_name>emp2.emp_name?1:-1;
    });
    for (const element of arrayEmpSort) {
          console.log(element.emp_name)
           
    }
    console.log("========== list the empoyee by their Salary in asending order===== ");
    const arrayEmpSalary=arrayEmployee.sort((emp1,emp2)=>{
        return emp1.emp_salary>emp2.emp_salary?1:-1;
    });
    for (const element of arrayEmpSalary) {
          console.log(element.emp_salary)
           
    }
