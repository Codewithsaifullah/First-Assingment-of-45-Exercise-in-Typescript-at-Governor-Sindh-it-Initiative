/*
Exercise:6 = Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/

let personName2 : string = "    Saifullah   ";
console.log(personName2.trim()); /// Trim method it clear all white spaces
let spaces: string = "\tSaifullah"; // (\t it makes space at the beginning and end of the variable)
console.log(spaces)
let newLine: string = "\nSaifullah"; // (\n it makes new Line)
console.log(newLine)
