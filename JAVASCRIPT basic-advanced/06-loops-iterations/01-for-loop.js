/*
for(initialization,condition; increment/decrement;){
    this is loop body
}
*/
//izlistava od 1-10
/*
for(var i = 1; i <=10; i++){
    if(i )
  console.log(i)  ;
}
*/


//izlistava parne brojeve od 1-10
/*
for(var i = 1; i <=10; i++){
    if(i % 2 == 0)
  console.log(i)  ;
}
*/
//izlistava neparne brojeve od 1-10
/*
for(var i = 1; i <=10; i++){
    if(i % 2 == 1)
  console.log(i)  ;
}
*/
// preskocena petica 
/*
for(var i = 1; i <=10; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
*/
//zaustavlja se kod 4 i ne ispisuje 5 i dalje ne nastavlja 
/*
for(var i = 1; i <=10; i++){
    if(i==5){
        break;
    }
    console.log(i);
}
*/

// ako ispisemo ovako , sa console.log prije if i break onda ce ispisati od 1-5 
/*
for(var i = 1; i <=10; i++){
    console.log(i);
    if(i==5){
        break;
    }
   
}
*/



var students = ["Marko","Spu","5th",90,true];

for(var i = 0; i < students.length; i++){
    console.log(students[i]);
    
   
}

