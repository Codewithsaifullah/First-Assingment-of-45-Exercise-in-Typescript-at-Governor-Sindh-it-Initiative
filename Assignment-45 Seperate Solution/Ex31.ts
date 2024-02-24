/*
Exercise:31 = No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

let usernames1 : string[] = ["admin", "Saifullah", "Kayhan", "Haseeb", "Waqar"];
// Add an if test to Exercise 28 to make sure the list of users is not empty.
if(usernames1.length === 0){
    //• If the list is empty, print the message We need to find some users!
    console.log("We need to find some users!")
}
else{
    for(const username of usernames1) {
        if(username === "admin"){
            console.log("Hello admin, would you like to see a status report?")
        }else{
            console.log(`Hello ${username}, thank you for logging in again.`)
        }
    }
}

// • Remove all of the usernames from your array, and make sure the correct message is printed.
usernames1 = [];
if(usernames1.length === 0){
    //• If the list is empty, print the message We need to find some users!
    console.log("We need to find some users!")
}
else{
    for(const username1 of usernames1) {
        if(username1 === "admin"){
            console.log("Hello admin, would you like to see a status report?")
        }else{
            console.log(`Hello ${username1}, thank you for logging in again.`)
        }
    }
}