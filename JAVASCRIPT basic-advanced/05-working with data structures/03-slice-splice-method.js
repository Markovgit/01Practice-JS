console.log("hi")

var myNumbers = [3,7,9,15,38,94,36,85,25,24];

//console.log(myNumbers.slice(1,5)); --izmedju 1-5 su 7,9,15,38 -- 

myNumbers.splice(1,3,"hi"); // brise elemente izmedju indeksa 1i 4 ukljucujuci
 //i te indekse i dodaje "hi" nanjihovo mjesto 
console.log(myNumbers)