
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

const array=[emp_Anil,emp_Radha,emp_Rishi,emp_Sonali,emp_Monika,emp_viny,emp_Mahi];
for (const element of array) {
    console.log(element.emp_id,element.emp_name,element.emp_dept,element.emp_company,element.emp_salary);
    
}

console.log("1.Find the All Employee working in'TCS'and log only employee name on console");
for (const element of array) {
    if (element.emp_company=="TCS") {
        console.log(element.emp_name,element.emp_company);
        
    }
}

console.log("2.Find the All Employee working in'Finance'and log only Department And employe name on console");
for (const element of array) {
    if (element.emp_dept=="Finance") {
        console.log(element.emp_dept,element.emp_name);
        
    }
}
console.log("3.Find the Employee Whose Name Start With 'R'And Employee Details" );


for (const element of array) {
    if (element.emp_name.startsWith("R")) {
        console.log(element.emp_id,element.emp_name,element.emp_dept,element.emp_company,element.emp_salary);
        
    }
}
console.log("4.find the Employee Whose salary is greater than 75000 And log emp Name,company and salary" );


for (const element of array) {
    if (element.emp_salary>75000)
     {
        console.log(element.emp_name,element.emp_company,element.emp_salary);
        
    }
}
console.log("5.find the Employee Whose salary is greater or equal to  50000 And from IT log details" );


for (const element of array) {
    if (element.emp_salary>=5000 && element.emp_dept=="IT")
     {
        console.log(element.emp_id,element.emp_name,element.emp_dept,element.emp_company,element.emp_salary);
        
    }
}
console.log("5.find the Employee company from 'Infy'AND log details" );


for (const element of array) {
    if (element.emp_company=="Infy")
     {
        console.log(element.emp_id,element.emp_name,element.emp_dept,element.emp_company,element.emp_salary);
        
    }
}