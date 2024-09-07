
function isPrime(){
  
const array=[3,9,7,6,19,29,53];

for (const element of array) {

    var result = isPrime(element);
  
    if (result==true) {
        count++;

    }
}

}
console.log(count);