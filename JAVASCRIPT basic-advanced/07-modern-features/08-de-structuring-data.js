var employee = ["Marko", "QA Tester/Front-end Dev",1500];
//var name = employee[0];
//var position = employee[1];
//var salary = employee[2];

/*
var [name,position,salary] = employee;

console.log(position) 

*/

var  anotherEmployee = {
    name: "Mico",
    position: "Dev",
    salary: 2000,
};

var {name, position, salary} = anotherEmployee;

console.log(name);