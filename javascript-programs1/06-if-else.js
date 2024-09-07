console.log(`==== multiple time checking if else statement then use Function =======`);

var votingChecker=function (age,person) {
    


if (age>=18) {
    console.log(`Hey ${person} your age is ${age} And you are eligible for vote`);
    
} else {
    console.log(` Unfortunately Hey ${person} your age is ${age} And you are not eligible for vote`);
}
}
votingChecker(21,"jenny");
votingChecker(17,"Elon");

var voteEligible=function(age)
{
    if (age==0||age<0||age>130||age==null ) 
     console.log(`Invalid Data Age ${age}`);
     else
     {
        console.log(`Valid Data :${age}`);
       if (age>=18) {
        console.log(`Eligible for Voting`);
        
       } else {
        console.log(`Not Eligible for Voting `);
        
       }    
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);

