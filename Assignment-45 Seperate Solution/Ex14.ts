/*
Exercise:14 = Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/

let guestList : string[] = ["Haseeb", "Saifullah", "Kayhan"];
// For loop
// for (let i = 0; i < guestList.length; i++){
//     console.log(`${guestList[i]} Your invited to my dinner party on Monday\n (This message is printed  using foor loop)`);
// }

// Map method
guestList.map((name)=>{
    console.log(`${name} Your invited to my dinner party on Monday\n (This message is printed  using map method)`);
})
