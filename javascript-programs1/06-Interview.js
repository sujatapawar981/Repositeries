
var result=function (gradScore,hscScore,sscScore,candidateName) {
if (gradScore>=70||hscScore>=80||sscScore>=90) {
    console.log(`Congrats your eligible for Interview ${candidateName}`);
    
} else {
    console.log(`Unfortunately your not eligible for Interview ${candidateName} `);
    
}

} 
result(80,86,90,"Shiv");
result(70,65,55,"Shivnya");
result(60,79,88,"Shivraj");