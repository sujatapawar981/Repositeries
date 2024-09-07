
const array=[10,21,30,43,50];
const evenArray=array.filter((element)=>{

 return element%2==0;



});
console.log(evenArray);



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



    console.log("====== filter out All employee who works in 'TCS' company");
    
    const employeeTCS =arrayEmployee.filter((employee)=>{
         return arrayEmployee.emp_company=="TCS";

    });
    employeeTCS.forEach((employee)=>{
        console.log(employee);
    });
    
    const arrayTCSNames=employeeTCS.map((employee)=>{


        return employee.emp_name;

    });
    console.log(arrayTCSNames);
    console.log("==== filter out all emp in IT Depart and filterout another array===");  
    console.log("====== use chaing in====");
    
const arrayTCSEmployee =arrayEmployee.filter((employee)=>{
   return employee.emp_dept=="IT";
}).map((employee)=>{

   return employee.emp_name;
});
console.log(arrayTCSEmployee);


    