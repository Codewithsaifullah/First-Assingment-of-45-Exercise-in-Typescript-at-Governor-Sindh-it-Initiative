/*
Exercise:16 =  More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/

let guestList2 : string[] = ["Haseeb", "Saifullah", "Kayhan"];
console.log(guestList2);
// add one guest at beginnig 
guestList2.unshift("Zeeshan");
console.log(guestList2[0]);

// add a guest at middle
guestList2.splice(2, 0, "Afaq");
console.log(guestList2[2]);

// add a gues at end using appen()
guestList2.push("Ali Akbar")
console.log(guestList2[5]);

console.log(guestList2);

console.log("Three more friends added to the list because I bigger table for dinner")
