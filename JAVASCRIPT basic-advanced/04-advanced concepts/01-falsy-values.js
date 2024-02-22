//1nedefinisan//undefined
//2nulla//null
//3//''
//4nije broj//NaN

//undefined in   nema vrijednost 
var firstName;
console.log(firstName);

// null predstavlja  prazan objekt, a undefined nepredstavlja ništa
var secoundName = 'null';
if(secoundName){
    console.log("the condition is true");
}

// '' nema nista 
var thirdName = '';
if(thirdName){
    console.log("the condition is true");
}

// 
var age = 3;

    console.log(Number.isNaN(age));
