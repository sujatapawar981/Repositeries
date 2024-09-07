
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
    console.log("====== 1.array Employee descending order  of emp_id and log with id,name and department=== ");
    console.log("===== first sort array asending order using custome logic and reverse it=======");
    const arrayEmpSort=arrayEmployee.sort((emp1,emp2)=>{
        return emp1.emp_name>emp2.emp_name?1:-1;
    });
    for (const element of arrayEmpSort) {
          console.log(element.emp_id,element.emp_name,element.emp_dept)}

          const reverseArray=arrayEmpSort.reverse();
          console.log(reverseArray);
          
          for (const element of arrayEmpSort) {
            console.log(element.emp_id,element.emp_name,element.emp_dept)
             
          }  

          console.log("====== 2.array employee ascending order of emp_dep and log id,dep and company=== ");

          const arrayEmpSorts=arrayEmployee.sort((emp1,emp2)=>{
            return emp1.emp_dept>emp2.emp_dept?1:-1;
        });
        for (const element of arrayEmpSorts) {
              console.log(element.emp_dept,element.emp_id,element.emp_company)}

          console.log("====== 3.array employee descending order of emp_salary and log name,salary and company=== ");
          
              const arrayEmpSort12=arrayEmployee.sort((emp1,emp2)=>{
                return emp1.emp_salary>emp2.emp_salary?1:-1;
            });
            for (const element of arrayEmpSort12) {
                  console.log(element.emp_name,element.emp_salary,element.emp_company)}
        
                  const reverseArray2=arrayEmpSort12.reverse();
                  console.log(reverseArray2);
                  
                  for (const element of arrayEmpSort12) {
                    console.log(element.emp_name,element.emp_salary,element.emp_company)
                     
                  }  
        