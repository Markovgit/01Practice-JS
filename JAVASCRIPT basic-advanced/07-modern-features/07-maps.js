var fruits = new Map();
fruits.set("Green", 'Apple');
fruits.set("Yellow", 'Banana');
fruits.set("Orange", 'Orange');
fruits.set("Purple", 'Grapes');
fruits.set("Red", 'Cherry');

//console.log(fruits);
/*
for(key of fruits.keys()){
    console.log(`key is ${key}`);
}


for(value of fruits.values()){
    console.log(`value is ${value}`);
}
*/
// da ne bi pisali previse koda za istu radnju kao u primjeru iznad, odnosno dupli kod sve mozemo napisati samo ovako : 
//takozvana for off petlja
for(var[key,value]of fruits){
    console.log(`Key is ${key} and Value is ${value}`);
}
// foreach petlja i daje samo rezultat value .. ne daje vriejdnost key
fruits.forEach((value) => console.log(value) );