var day=function (dayName) {
    switch (dayName) {
        case 1:
            console.log("Monday");
            break;
        
        case 2:
            console.log("Thusday");
            break;
        
        case 3:
                console.log("Wensdayday");
                break;

        case 4:
            console.log("Thursday");
            break;

        case 5:
                console.log("Friday");
                break;   

       case 6:
                    console.log("Saturday");
                    break;        

       case 7:
                        console.log("Sunday");
                        break;             
        default:
            console.log(`Invalid input ${dayName}`);
            break;
    }
    
}
day(6);