
console.log("========   1. DOM API- getElementById() ==========");

const headingElement=document.getElementById("heading");
console.log(headingElement);
console.log(headingElement.innerHTML);

console.log("========   2. DOM API- getElementByTagName() ==========");

const h3Element=document.getElementsByTagName("h3");

console.log(h3Element[0].innerHTML);

console.log("========   3. DOM API- getElementByClassName() ==========");

const techElements=document.getElementsByClassName("tech");

console.log(techElements);
for (const element of techElements) {
    console.log(element.innerHTML);
    
}



console.log("========    NEW API   =========");


console.log("========   4. DOM API- querySelector()  ==========");
console.log("========   querySelector()-1.querySElector with name 2.with Id 3.with Class  ==========");

// querySelector return only one element
console.log("=======Fetching an element with it's tag name=========");
const elementh3=document.querySelector("h3");
console.log(elementh3.innerHTML);

console.log("=======Fetching an element with it's id=========");
const elementId=document.querySelector("#ang");
// access id in CSS by # here Similar
console.log(elementId.innerHTML);

console.log("=======Fetching an element with it's Class=========");
const elelmentClass=document.querySelector(".tech");
console.log(elelmentClass.innerHTML);



console.log("========   5. DOM API- querySelectorAll()  ==========");

console.log("=======Fetching an element with it's li tag name=========");
const selectorAll=document.querySelectorAll("li");
// here we have get collection so use for of loop
for (const element of selectorAll) {
    console.log(element.innerHTML);
}  
    console.log("=======Fetching an element with it's clsass name=========");


const elementclass=document.querySelectorAll(".tech");
for (const element of elementclass) {
    console.log(element.innerHTML);
    
}

console.log("======== Modifying element=======");
const modifyh3=document.querySelector("h3");
// for modify object use below sytax;
// objectName Property=Value;
modifyh3.innerHTML="My Skills";

console.log("========Applying Style=======");
const angElement=document.querySelector("#ang");
angElement.style.color="orange";
angElement.style.fontSize="larger";

console.log("======== chaning an attribute=======");
const changattribute = document.querySelector("a");
changattribute.setAttribute("href","https://www.facebook.com/");

console.log("======crating new node====== ");
const element_h2=document.createElement("h2");
const textNode=document.createTextNode("E_commerce:Student Management");
element_h2.appendChild(textNode);

const elementSection=document.querySelector("section");
elementSection.appendChild(element_h2);

console.log("======== Remove child=====");
const elementUl=document.querySelector("ul");
const elementreact=document.querySelector("#rea");
elementUl.removeChild(elementreact);

console.log("======== Event =====");
const graduparam=document.querySelector("#grad");
graduparam.addEventListener(`click`,()=>{
    // addEventListerner method take 2 argument 1.Event tab(click action)2.callback fuction
    
    // When we pass one function as an argument to another function  that we callback
    console.log(`you Click me aa....`);
    alert(`hey ..man you click me..ah.!`)
});


const  NumberToSqaure=document.querySelector("#NumberToSqaure");
const  bitSquare=document.querySelector("#sqaure");
 bitSquare.addEventListener(`click`,()=>{

alert(NumberToSqaure.value*NumberToSqaure.value);

 })

 const btnVowels = document.querySelector("#vowelsBtn");

 const vowels = "aeiou";
 
 let vowelsStr = "";
 
 btnVowels.addEventListener('click', () => {
 
    const givenName = prompt("Enter your name", "Jenny");
 
    const nameInLowerCase = givenName.toLowerCase();
 
    const isConfirm = confirm("Are you Sure ?");
 
    if (isConfirm) {
 
     for (const char of nameInLowerCase) {
 
         if (vowels.includes(char)) {
 
             vowelsStr = vowelsStr + char;
 
         }   
 
        }
 
        alert(`Vowels : ${vowelsStr} in given name and it's count is : ${vowelsStr.length}`);
 
    }
 
 });
