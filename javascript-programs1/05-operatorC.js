function interviewChek(gradScore,hscScore,sscScore,candateName)
{

       var result = gradScore>=70 || hscScore>=80 || sscScore>90  ?
 
       `congrats  ${candateName} you are eligiblefor TCS interview`:

       `unfortunately ${candateName} you are not eligiblefor TCS interview${candateName}`
        console.log(result);
}
interviewChek(80,86,90,"jenny");
interviewChek(70,65,55,"Elon");
interviewChek(60,79,88,"stew");
