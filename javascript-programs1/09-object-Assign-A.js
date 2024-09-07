
console.log("====== 1.Add all Properties =======");
console.log("====== 2.Include Nested Object Degrees =======");
console.log("====== 3.Add  Certificate Array =======");

let professor={
    firstName:"Mr.Sachin",
    lastName:"Patil",
    college:"VMS",
    city:"Mumbai",
    Country:"India",
    age:45,
    certificates:["Hacker Rank Participation","certificate in IFE cource","certificate in Adv Programming"],
    degrees:{
        Engineering:"CSC",
        PHD:"Adv Computing",
        Graduaction:"IT"

    }
}
console.log(professor);

console.log("====== 4.Add new property Total Experience  14 Years=======")
professor.totalExperience="14 Years";
console.log(professor);

console.log("====== 5.Update / Modify any Existing Property=======")

professor.age=50;
console.log(`Updated Age is:${professor.age}`);

console.log("====== 6.Add new Certificate in Array=======")
professor.certificates.push("JAVA Programming certificate ");

const personSkill=professor.certificates;
console.log(`New certificate :${personSkill}`);


console.log("====== 7.log last Value in Array=======")

 
console.log(`Last Element: ${professor.certificates[professor.certificates.length-1]}`);

console.log("====== 8.Log Complete Object Using For loop=======")
 for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key},${element}`);
        
    }
 }

 console.log("====== 9.Traversing  the Array Using for of loop =======")
 for (const element of professor.certificates) {
    console.log(element);
    
 }