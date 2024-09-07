
let person ={ 
firstName:" Jenny",
lastName:"Gates",
pin:400407,
age:24,
isMarried:true,
skills:["HTML","CSS","JS"],
mark:{
math:80,
physics:90,
english:56,
chemistry:70
}

}
console.log(person);
const frName=person.firstName;
console.log(`First Name: ${frName}`);
console.log(`age: ${person.age}`);



console.log("======== Adding Array Element  At the End   ======")

person.skills.push("Git And GitHub");

const personSkill=person.skills;
console.log(`person skill :${personSkill}`);

console.log("======== OR Array Traversing   ======")

for (const element of personSkill) {
    console.log(element);
    
    }  
    console.log("======== Marks  ======")
    console.log(person.mark.english);
    
    console.log("======== Update  ======")
     person.age=30;
     console.log(`Updateed Age:${person.age}`);
     console.log(person);
     

     console.log("========  Add new Property======")
     person.country="India";
     console.log(`Adding New Property :${person.country}`);

     console.log("======== Traversing Object person =======");

for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(`${key},${element}`);
        
    }
}


console.log("========  Delete the Property======")

delete person.isMarried;
    console.log(person);
    
    
console.log("========  Creating Emty Object======")
let student={



}
console.log(student);

console.log("========   Method  in Object or function()======")
 let employee={
fullName:"Elon Musk",
age:40,
city:"LA",
country:"USA",
details:function() {


console.log(`Full Name:${this.fullName},City:${this.city},Country:${this.country}`);  
}
}
employee.details();

