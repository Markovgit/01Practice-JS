var employee = {
    name: "",
    age: "",
    salary: "",
    getEmployeeInfo: function(){
        console.log(`Employee name is ${this.name}`)
    }


}

var emp1 = Object.create(employee);
emp1.name = "Dunja";
//console.log(emp1);

//emp1.getEmployeeInfo();
//console.log(emp1.name);
emp1.getEmployeeInfo();

var emp2 = Object.create(employee);
emp2.name = "Miko";
emp2.age = 25;
emp2.salary = 300;

emp2.getEmployeeInfo();