var employee = function(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.getEmployeeInfo = function(){
        console.log(`Employee name is ${this.name}`);
        console.log(`Employee age is ${this.age}`);
        console.log(`Employee salary is ${this.salary}`);

    }
}
employee.prototype.getName = function (){
        console.log(`Your name is ${this.name}`);
}

employee.prototype.getAge  = function (){
    console.log(`Your age is ${this.age}`)
}

var emp1 = new employee("Marko",27,1500);
var emp2 = new employee("Mico",25,1000);

//console.log(emp1)
//emp2.getEmployeeInfo();
emp2.getName();
emp2.getAge();
