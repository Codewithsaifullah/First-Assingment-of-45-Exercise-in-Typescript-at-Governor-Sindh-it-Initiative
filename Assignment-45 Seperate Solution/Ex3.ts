/*
Exercise:3  = Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let personName1 : string = "Saifullah";

// Lower Case 
console.log("This is tittle case" , personName1.toLowerCase());

// Upper Case
console.log("This is Upper case" , personName1.toUpperCase());

// Title Case
console.log("This is tittle case" , personName1.charAt(0).toUpperCase() + personName1.slice(1).toLocaleLowerCase());