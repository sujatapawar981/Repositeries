
function add(n1,n2,...n){
    console.log(n1,n2,n);
    
}
add(10,20,30,40,50,100);
function show(...n){
    console.log(n);
    
}
show(10,20,30,40,50,100);
// IMP Rule:- rest parameter only write in last parameter
function add1(...n){
    console.log(n);
    
}
show(10,20,30,40,50,100);