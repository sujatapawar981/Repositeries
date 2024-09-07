
console.log("to find lengh or total Number of Charactor");

const str1="Hellow, World!";
const Length1=str1.length;
console.log(`Length of "${str1}" is:${Length1}`);


const str2="JavaScript is the language of Internet";
const lengh2=str2.length;
console.log(`Length of "${str2}" is:${lengh2}`);

console.log("====== print or log the last charactor of the given strings========");

// function getLastcharactor(str){
// return str.charAt(str.length-1);
// }

// // const str3="hey,my friend,programming language";
// const str4="i am learing logical programs";
// const str5="Angular";
// console.log(`Last Charactor of the string"${str3}" is:${getLastcharactor(str3)}`);
// console.log(`Last Charactor of the string"${str4}" is:${getLastcharactor(str4)}`);
// console.log(`Last Charactor of the string"${str5}" is:${getLastcharactor(str5)}`);
console.log("====== OR========");
const str3="hey,my friend,programming language";
const res=str3.charAt(str3.length-1);
console.log(`Last Character of the string"${str3}"is: ${res}`);
const str4="i am learning logical programs";
const resl=str4.charAt(str4.length-1);
console.log(`Last character of the string"${str4}"is : ${resl}`);
const str5="Angular";
const result=str5.charAt(str5.length-1);
console.log(`Last Character of the "${str5}" is : ${result} `);

console.log("======3. To print or log First charcter of the given strings  ========");
const str6="React";
const str7="Elon Musk";
const str8="Apple Founder is Stew job";
const res2=str6.charAt(0);
console.log(`The First Character of String "${str6}" is:${res2}`);
const res3=str7.charAt(0);
console.log(`The last character of String "${str7}" is: ${res3}`);

const res4=str8.charAt(0);
console.log(`The last chacter of string "${str8}"is: ${res4}`);


console.log("====== 4.Given Strings Contain Word 'UI' or Not  ========");
function containsUI(str) {
    return str.includes('UI');

}
const st1=" React- UI Developer";
const st2="UI Developer";
const st3=" Front end backend technologies";
console.log(`Does the String "${st1}"contains 'UI'?: ${containsUI(st1)}`);
console.log(`does the string "${st2}"contains 'UI Developer':${containsUI(st2)}`);
console.log(`does the string "${st3}"contains 'Front end backend technologies':${containsUI(st3)}`);

console.log("====== 5.To split string in to array of substring  ========");
 
function splitString(str,delimiter) {
    
return str.split(delimiter);

} 
const st4 = "Apple ,Banana,Orange";
const st5="stew,bill,Jenny,Elon";
const Myresult=splitString(st4,',');
console.log(`The array of substring ${st4} is:`,Myresult);
const Myresult1=splitString(st5,',');
console.log(`The array of substring ${st5}is:`,Myresult1);



console.log( "=====6. Reverse String: Recommended to use define the functions =======");
//  Reverse the string using any existing methods that you know
function revrStringUsMethod(str) {
    return str.split('').reverse().join('');
}
 const sts = "Software";
 const sts1= "UI Developer";
 console.log(`The reverse String of '${sts}' is:${revrStringUsMethod(sts)}`);
 console.log(`The reverse String of '${sts1}'is:${revrStringUsMethod(sts1)}`);
//  Reverse the string without using predefined methods.
const sts3 = "Web Developer";
 const sts4 = "Billion Dollar";
 const sts6 = "Java";

 console.log( "=====7.to count charactor 'a'& 'A' =======");

 function countCharA(str) {
    let count=0;
   
    for (let i=0;i<str.length;i++){
if(str[i].toLowerCase()==='a')
    {count++;
    }
        
    }
    return count;
 }
  const str12="JavaScript";
 console.log(`The count of'a' in ${str12} is=${countCharA(str12)}`);
 
 const str13=" Do Or Die";
 console.log(`The count of'a' in ${str13} is=${countCharA(str13)}`);

 const str14="Learn with us, Job with us";
 console.log(`The count of'a' in ${str14} is=${countCharA(str14)}`);

 const str15="Empowering Dreams, Guaranteeing Futures";
 console.log(`The count of'a' in ${str15} is=${countCharA(str15)}`);

 const str16="Anny, My favorite fruit is Apple";
 console.log(`The count of'a' in ${str16} is=${countCharA(str16)}`);



console.log("============ 8.program to count vowels in both upper And lower case========");
function vowelCount(str) {
    let count=0;
    str=str.toLowerCase();
    constvowels='aeiou';
    for (let i = 0; i<str.length;i++){
        if(constvowels.includes(str[i])){
            
            count++;}
    }return count;
    }
    const str10="JavaScript";
 console.log(`The vowels in ${str10} is=${vowelCount(str10)}`);
 
 const str11=" HTML and CSS";
 console.log(`The vowels in ${str11} is=${vowelCount(str11)}`);

 const str21="Language Of Internet ";
 console.log(`The vowels in ${str21} is=${vowelCount(str21)}`);

 const str23="I am UI DEveloper ";
 console.log(`The vowels in ${str23} is=${vowelCount(str23)}`);

 const str24="Do or Die";
 console.log(`The vowels in ${str24} is=${vowelCount(str24)}`);

 
console.log("========== 9.TO count Word========== ");
function wordCount(str) {
  const word=str.split(' ')
  return word.length;
  
}
const str25="JavaScript The language of Internet";
console.log(`The number of Word in String :${str25} is : ${wordCount(str25)}`);

const str26="Enhance Your Learning Journey with Exclusive Add-ons";
console.log(`The number of Word in String :${str26} is : ${wordCount(str26)}`);

const str27="Beyond frameworks, Beyond Imagination";
console.log(`The number of Word in String :${str27} is : ${wordCount(str27)}`);

const str28="I am passionate software developer";
console.log(`The number of Word in String :${str28} is : ${wordCount(str28)}`);


console.log("========== 10. To Find Out Dublicate Characters.========== ");

function dublicateCharCount(str){
    const charCount={};

    for(let i=0;i<=str.length;i++){
    const char=str[i];

        if(char>=' '){
            charCount[char]=(charCount[char]||0)+1
        }
    }
        for(const char in charCount){
            if(charCount[char]>1){
        
    console.log(`${char}-${charCount[char]}`);
    
} 
}

}
    console.log(`Dublicate charactor in "Banana"with count are=>`);
    dublicateCharCount("Banana");
    console.log(" ");
    
    console.log(`Dublicate charactor in "Apple"with count are=>`);
    dublicateCharCount("Apple");
    console.log(" ");

    console.log(`Dublicate charactor in "Software Developer"with count are=>`);
    dublicateCharCount("Spoftware Developer");
    console.log(" ");
    
    
    
