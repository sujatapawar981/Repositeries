
// I Promise,will share Notes
const PromiseNotes=new Promise((resolve,rejected)=>{
    // you guys wait till 3 PM
//  resolve("hey...here you go..takes these Notes") ;
rejected("sorry.guys.I didn't get time..")  

});
PromiseNotes.then((success)=>{
    console.log(success);
    
}).catch((rejected)=>{
    console.log(rejected);
    
}).finally(()=>{
    console.log("I must have Notes");
    
});