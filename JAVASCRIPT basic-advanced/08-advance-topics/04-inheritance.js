class Employee {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
// stavljanjm # tarabe ispred varijable ona postaje privatna i
// moze joj se pristupiti (moze se vidjrti samo preko get/set)
    salary = "";
    #jobDescription = []; 


    getEmployeeInfo(){
        return{name: this.name,email: this.email}
    }
//u setter-u imamo parametar zadat u zagradi logi 
    setJobDescription(description){
        this.#jobDescription.push(description);

    }
// u getter-u nemammo parametar zadat u zagradi logi 
    getJobDescription(){
        return this.#jobDescription;
    }

    doFollow(){
        return "You are following!";
    }

}

class anotherEmployee extends Employee{
    constructor(name,email){
        super(name,email);
    }
        getAnotherEmployeeInfo(){
            return "I am another Employee guide me to success";
        }

}


module.exports = Employee;


/*
var marko = new Employee("Marko", "mpk@demo.com");
 console.log(marko.getEmployeeInfo());
 marko.setJobDescription("Send Email's at the morning");
 console.log(marko.getJobDescription());
 //zato  sto je jobDescription privatan (private) mozemo da ga pristupimo samo 
 // kroz geter i seter i ovaj console log ispod daje undefined 
 console.log(marko.jobDescription);
*/

 var dunja = new anotherEmployee("Dunja", "dunja@demo.com");
 console.log(dunja.getEmployeeInfo());
 console.log(dunja.getAnotherEmployeeInfo());
 console.log(dunja.doFollow());