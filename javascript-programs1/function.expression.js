
console.log("====== fuction expression   ========")

console.log("===== Function Expression with No argument And No return value ===== ")

 var add=function(){

    console.log("Inside function Expression.....");
    
  }

   add();

   console.log("======= Function Expression with Argument And Return Value =====");

      var add=function(n1,n2){

           var result=n1+n2;
           
           return result;

        }
        var result=add(10,20); 
           
           console.log(result);

           console.log("===== Function Expression with argument And No return value ===== ");
            
           var add=function(n1,n2){

            console.log(`Addition is:${n1+n2}`);

          }
        add(10,20);
 