
// reduce meaning reduce one value from array
const array=[2,3,1,5,4];
const sum=array.reduce((runningTotal,element)=>{
return runningTotal+element;



},0);
console.log(sum);



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
// 1.find The avarage salary  of employee from 'Wipro' company

// 2.Find the avarage salary of wipro or infy
const wiproEmp=arrayEmployee.filter((employee)=>{
    return employee.emp_company=='Wipro'||employee.emp_company=='Infy';
});
console.log(wiproEmp[0]);
console.log(wiproEmp[1]);

// transferming new array using map method
const wiproSalary=wiproEmp.map((employee)=>{

    return employee.emp_salary;
});
console.log(wiproSalary);

let salarySum=0;
for (const element of wiproSalary) {
    salarySum=salarySum+element;

}
console.log(`salarySum is:${salarySum}`);
let avgSalry=salarySum/wiproEmp.length;
console.log(`Avarage Salary:${avgSalry}`);

