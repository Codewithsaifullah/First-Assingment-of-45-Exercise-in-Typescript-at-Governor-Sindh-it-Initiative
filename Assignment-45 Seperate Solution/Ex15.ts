/*
Exercise:15 = Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.
*/

let guestList1 : string[] = ["Haseeb", "Saifullah", "Kayhan"];
console.log(guestList1);

console.log(`Due to Some personal reason MR.${guestList1[2]} will not come on our dinner party.\n`);

guestList1[2] = "Waqar";
for (let i = 0; i < guestList1.length; i++){
    console.log(`${i + 1}. ${guestList1[i]}`);
}

console.log(guestList1);