var user = {
    firstName: "Marko",
    lastName: "Petkovic",
    skill: "QA/FE dev - junior ",
    isActive: true,
    age:27,
    getUserInfo: function(role){
        return `${this.firstName} have a full access,and your role is ${role}!`;
    }
}

//console.table(user);

//console.log(user["lastName"]);
//console.log(user.age);

console.log(user.getUserInfo("SuperAdmin"));

