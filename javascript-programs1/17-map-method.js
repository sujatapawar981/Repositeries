
console.log(`Traversing Using forEach()`);

const array=[10,21,30,43,50];
array.forEach((element)=>{


console.log(element);


}
);
console.log(`====== Finding Even numbers ======`);

array.forEach((element)=>{

if(element%2==0){
console.log(element);
}
}
);
console.log(`====== Transform array to its squre ======`);
const array1=[10,21,30,43,50];
console.log(array1);

const arraysqure=array1.map((element)=>{
return element*element;

});console.log(arraysqure);

console.log("=====Traversing arry of Object======= ");

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
    arrayEmployee.forEach((employee)=>{
        console.log(employee.emp_name);
        
    });
    console.log("===== Transforming array of object to employee name=====");
    
    const empName=arrayEmployee.map((employee)=>{
        return employee.emp_name;
        
    });
    console.log(empName);
    

    console.log("===== Transforming array of object to employee salary=====");
    
    const empSalary=arrayEmployee.map((employee)=>{
        return employee.emp_salary;
        
    });
    console.log(empSalary);