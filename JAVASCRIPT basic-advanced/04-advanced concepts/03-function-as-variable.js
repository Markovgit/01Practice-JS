//user role function 

var userRole = function (name,role){
    switch(role){
        case "Super Admin":
    console.log(`${name} is ${role} and it has full access.`);
    break;

    case "Admin":
    console.log(`${name} is ${role} and it has full access except for deleting data.`);
    break;

    case "User":
    console.log(`${name} is ${role} and it has access to read  the data.`);
    break;

   default:
    console.log("Invalid Role");


    }
}

userRole("Marko","Admin");