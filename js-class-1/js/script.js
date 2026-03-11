console.log("hello king's college");
var a = 5;
var b = 6;
var sum = a+b;
console.log("sum of a and b is",sum)

var a = 148;
var b = 3;
var remainder = a%b;
console.log("remainder of a and b is",remainder)

//using var
var a1=4;
if(true){
    var a1=5;
}
console.log("blocked scope",a1);

//using let
let a2=4;
if(true){
    let a2=5;
}
console.log("function scope",a2);

//console.log(a3)
console.log("test let")
let a3=5;
if(true){
    
    let a3=5;
    console.log(a3);
}
console.log("blocked scope",a3);