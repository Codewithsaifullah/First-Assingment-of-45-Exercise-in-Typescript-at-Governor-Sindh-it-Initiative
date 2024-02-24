/*
Exercise:24= 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

// • Tests for equality and inequality with strings
let equality: string = "Saifullah";
let inequality: string = "Kayhan";
console.log(equality === inequality); //false
console.log(equality !== inequality); //true
console.log("---------------------------------")

//• Tests using the lower case function
let upperStr : string = "HELLO WORLD";
let lowerStr : string = "hello world";
console.log(upperStr.toLowerCase() === lowerStr); //true
console.log(upperStr === lowerStr); //false
console.log("-----------------------------------")

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let rnum = 23;
let rnum2 = 18;
console.log(rnum === rnum2) //false
console.log(rnum !== rnum2) //true
console.log(rnum > rnum2) //true
console.log(rnum < rnum2) //false
console.log(rnum >= rnum2) //true
console.log(rnum <= rnum2) //false
console.log("---------------------------------------")

// • Tests using "and" and "or" 
// And operators
console.log(rnum !== rnum2 && rnum > rnum2); // true because both are true
console.log(rnum === rnum2 && rnum > rnum2); // false in and if one false the full condition will be false
// or Operator 
console.log(rnum !== rnum2 || rnum > rnum2); // true because both are true
console.log(rnum !== rnum2 || rnum < rnum2); // true in or if one condition is true then the the whole condition will show true
console.log(rnum === rnum2 || rnum < rnum2); // false because both are false
console.log("---------------------------------------")

// • Test whether an item is in a array
let testfruit : string[] = ["apple", "orange", "orange"];
console.log(testfruit.includes("apple"));  // true
console.log(testfruit.includes("banana"));  // false
console.log("---------------------------------------")

// • Test whether an item is not in a array
console.log(!testfruit.includes("apple"));  // false
console.log(!testfruit.includes("banana"));  // true