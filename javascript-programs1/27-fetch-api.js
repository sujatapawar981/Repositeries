
const data= await fetch('https://fakestoreapi.com/products')
 const jsonData= await data.json();       
  console.log(jsonData);
   jsonData.forEach(product => {//traversing array
    console.log(`Id:${product.id},title:${product.title},price:${product.price},rating:${product.rating.rate}`);
 
 console.log("===================================================================================================");
 
});
  console.log("***********************************************************");
  
const product= await fetch('https://fakestoreapi.com/products/5')
 const productJson= await product.json();       
  console.log(productJson);