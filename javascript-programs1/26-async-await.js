
async function fetchData(){

    console.log(" promise the fetching Data...");

    // fetching data dont no how time to take so use promise
     const promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            // resolve("sucessfully Fetched Data");
            reject("fail to Fetched data");
        }, 4000);
     });
     return promise;
    }
 async function main(){
    console.log("main function");
    
    try {
        const promise= await fetchData();
        console.log(promise);
    } catch (error) {
        console.log(error);
        
    }
   
//    promise.then((success)=>{
//     console.log(success);

    
//    }).catch((failure)=>{
//     console.log(failure);
    
//    });


console.log("After Fetch...");
}
main();