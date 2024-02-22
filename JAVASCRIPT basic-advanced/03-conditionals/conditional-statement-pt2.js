var loggedInWithEmail = false;
var loggedInWithFB = false;
var loggedInWithGoogle = false;
var loggedInWithApple = true;



//or  
if(loggedInWithApple || loggedInWithFB ||loggedInWithEmail || loggedInWithGoogle){
    console.log("You have logged in and you have access dashboard");
}
else{
    console.log("You are not allowed to access dashboard");
}