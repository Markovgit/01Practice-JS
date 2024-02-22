var isLoggedIn = false;
var userEmailVerified = true;
var validCardInfo = true;

/*if(isLoggedIn){
     console.log("you have successfully logged in");
    if(userEmailVerified){
        console.log("Your email is verified ");
        if(validCardInfo){
            console.log("valid for purchase");
        }
    }

}

*/
//and operator
if(isLoggedIn && userEmailVerified && validCardInfo){
    console.log("Have fun, you meet all requirements");
}
else{
    console.log("You need to make all conditions  satisfied to continue with purchase");
}