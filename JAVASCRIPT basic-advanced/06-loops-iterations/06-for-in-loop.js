var users = {
    firstName: "Marko",
    lastName: "Petkovic",
    skill: "QA/FE dev - junior ",
    isActive: true,
    age:27,
    
    
}



for(var user in users ){
    console.log(`${user}  :  ${users[user]}`); 
}