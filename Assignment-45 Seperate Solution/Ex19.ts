/*
Exercise:19= 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.
*/

let guestList4 : string[] = ["Saifullah", "Waqar", "Kayhan", "Haseeb"]
console.log(`I have been invited ${guestList4.length} friends to my dinner party. The name are mentioned below.`)
guestList4.forEach((guest) =>{
    console.log(`${guest}`)
});
