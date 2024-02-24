/*
Exercise:12 = Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.
*/

let friendsName1: string[]= ["Haseeb", "Saifullah", "Kayhan", "Waqar"];
let messages: string = "How are you friend"
for(let i = 0 ; i < friendsName1.length; i++){
    console.log(`Hello ${friendsName1[i]} ${messages}`);
}