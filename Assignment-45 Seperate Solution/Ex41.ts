/*
Exercise:41 = Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/

function show_magicians(magicians: string[]): void {
    magicians.forEach(magicians => console.log(magicians));
}

let magiciansName: string[] = ["Saifullah", "Haseeb", "Kayhan", "Waqar"];
show_magicians(magiciansName);