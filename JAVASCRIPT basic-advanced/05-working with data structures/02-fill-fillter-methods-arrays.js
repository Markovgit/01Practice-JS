
console.log("hi");

var myNumbers = [3,7,9,15,38,94,36,85,25,24];
//console.log(myNumbers.fill("hello you",2,7));


function checkAge(age){
    return age >= 18;
}
console.log(myNumbers.filter(checkAge));