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

}

module.exports = Employee;



var marko = new Employee("Marko", "mpk@demo.com");
 console.log(marko.getEmployeeInfo());
 marko.setJobDescription("Send Email's at the morning");
 console.log(marko.getJobDescription());
 //zato  sto je jobDescription privatan (private) mozemo da ga pristupimo samo 
 // kroz geter i seter i ovaj console log ispod daje undefined 
 console.log(marko.jobDescription);