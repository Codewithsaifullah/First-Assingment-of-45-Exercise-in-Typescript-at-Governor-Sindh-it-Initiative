/*
Exercise:43 =  Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/

function show_magicians2(magicians: string[]): void {
    magicians.forEach(magicians => console.log(magicians));
}
function greet1(magicians: string[]): string[] {
    const greetmessage: string[] = [];
    for(let i=0; i<magicians.length; i++){
        greetmessage.push("The Greet " + magicians[i]); // Push the modified magician name into greetmessage array
    }
    return greetmessage;
}

let magiciansName2: string[] = ["Saifullah", "Haseeb", "Kayhan", "Waqar"];
let greetMagicians: string[] = greet1([...magiciansName2]);

console.log("Orginal magicians");
console.log(magiciansName2)

console.log("Magicians with Greet message"); 
show_magicians2(greetMagicians);