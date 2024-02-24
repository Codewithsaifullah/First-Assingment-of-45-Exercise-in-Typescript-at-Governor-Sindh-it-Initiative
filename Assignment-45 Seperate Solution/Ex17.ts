/*
Exercise:17 = Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.
*/

let guestList3 : string[] = ["Haseeb", "Saifullah", "Kayhan" , "Waqar", "Afaq", "Ali Akbar"];
console.log("Sorry but I can invite only two guest on dinner because my new dinner table won't arrived.\n")

let friendRemove1 = guestList3.pop();
console.log(`Sorry MR.${friendRemove1} I can't invite you at my dinner.`)
let friendRemove2 = guestList3.pop();
console.log(`Sorry MR.${friendRemove2} I can't invite you at my dinner.`)
let friendRemove3 = guestList3.pop();
console.log(`Sorry MR.${friendRemove3} I can't invite you at my dinner.`)
let friendRemove4 = guestList3.pop();
console.log(`Sorry MR.${friendRemove4} I can't invite you at my dinner.`)

for(let i = 0; i < guestList3.length, i++;){
    console.log(`${guestList3[i]} your are still invited to my dinner party.`);
}

guestList3.pop();
guestList3.pop();

console.log(guestList3);