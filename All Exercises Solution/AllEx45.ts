/*
 Exercise:1 = Install Node.js, TypeScript and VS Code on your computer.
*/
console.log("Hello World!");
console.log("---x---".repeat(10));

/*
 Exercise:2 = Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
*/
let personName: string = "Saifullah";
console.log("Hello " + personName + ", would you like to learn some Python today?");
console.log("---x---".repeat(10));

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
console.log("---x---".repeat(10));


/*
Exercise:4 = Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

Albert Einstein once said, “A person who never made a mistake never tried anything new.”
*/

let message: string = `Albert Einestein once said, "A person who never made a mistake never tried anything new".`
console.log(message);
console.log("---x---".repeat(10));

/*
Exercise:5 = Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
*/

let famousPerson: string = "Albert Einstein";
let message1: string = `${famousPerson} once said, "A person who never made a mistake never tried anything new".`
console.log(message1);
console.log("---x---".repeat(10));

/*
Exercise:6 = Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/

let personName2 : string = "    Saifullah   ";
console.log(personName2.trim()); /// Trim method it clear all white spaces
let spaces: string = "\tSaifullah"; // (\t it makes space at the beginning and end of the variable)
console.log(spaces)
let newLine: string = "\nSaifullah"; // (\n it makes new Line)
console.log(newLine)
console.log("---x---".repeat(10));

/*
Exercise:7= Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
*/

let addition: number = 5 + 3;
let subtraction: number = 13 -5 ;
let multiplication: number = 4 * 2;
let division: number = 16 / 2;

console.log(addition, subtraction, multiplication, division)
console.log("---x---".repeat(10));

/*
Exercise:8= You should create four lines that look like this:
console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.
*/

console.log("The value of 5 plus 3 is ", 5 + 3)
console.log("The value of 11 mius 3 is ", 11 - 3)
console.log("The value of 2 multiply by 4 is ", 2 * 4)
console.log("The value of 32 divide by  4 is ", 32 / 4);
console.log("---x---".repeat(10));

/*
Exercise:9 = Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
*/

let favNumber: number = 119942; 
let message2: string =  (`My favorite number is ${favNumber} and It also my Governor Sindh I.T Initiative Program Role number.`);
console.log(message2);
console.log("---x---".repeat(10));


/*
Exercise:10 = Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
*/

// In this variable name2 is decleared as Saifullah 
let name2: string = "Saifullah";
// In this variable message2 is decleared as Saifullah 
let message3: string = " is a good boy";
// And simply add both variables and print in the terminal
console.log(name2 + message3);
console.log("---x---".repeat(10));


/*
Exercise:11 =  Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
*/
let friendsName: string[]= ["Haseeb", "Saifullah", "Kayhan", "Waqar"];
for(let i = 0 ; i < friendsName.length; i++){
    console.log(friendsName[i]);
}
console.log("---x---".repeat(10));

/*
Exercise:12 = Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.
*/

let friendsName1: string[]= ["Haseeb", "Saifullah", "Kayhan", "Waqar"];
let messages: string = "How are you friend"
for(let i = 0 ; i < friendsName1.length; i++){
    console.log(`Hello ${friendsName1[i]} ${messages}`);
}
console.log("---x---".repeat(10));

/*
Exercise:13 = Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/

let favtransport : string[] = ["Civic", "Train", "Bike", "Airoplane"];
for (let i = 0; i < favtransport.length; i++) {
    console.log(`I would like to own a ${favtransport[i]}`);
}
console.log("---x---".repeat(10));

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
console.log("---x---".repeat(10));

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
console.log("---x---".repeat(10));

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
console.log("---x---".repeat(10));

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
console.log("---x---".repeat(10));

/*
Exercise:18= 18. Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its
order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/

// • Store the locations in a array. Make sure the array is not in alphabetical order.
let favplaces : string[] = ["Karachi", "Larkana", "Hyderabad", "Umarkot(U.K)"];

//• Print your array in its original order.
console.log(favplaces);

// • Print your array in alphabetical order without modifying the actual list.
let copyfavplaces = favplaces.slice();
let sortfavplaces = copyfavplaces.sort();
console.log(sortfavplaces);

// • Show that your array is still in its original order by printing it.
console.log(favplaces);

// • Print your array in reverse alphabetical order without changing the order of the original list.
let reversefavplaces = copyfavplaces.reverse();
console.log(reversefavplaces);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
let origanfavplaces = favplaces.sort();
console.log(origanfavplaces);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let originalrfavplaces = favplaces.reverse();
console.log(originalrfavplaces);
console.log("---x---".repeat(10));

/*
Exercise:19= 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.
*/

let guestList4 : string[] = ["Saifullah", "Waqar", "Kayhan", "Haseeb"]
console.log(`I have been invited ${guestList4.length} friends to my dinner party. The name are mentioned below.`)
guestList4.forEach((guest) =>{
    console.log(`${guest}`)
});
console.log("---x---".repeat(10));

/*
Exercise:20= Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
else you’d like. Write a program that creates a list containing these items.
*/

let programminlang: string[] = ["Javascript", "TypeScript", "Java", "Python"];

console.log(`Hare are ${programminlang.length} programming languages are my faviourate which are given below.`)
programminlang.forEach((lang)=>{
    console.log(`${lang}`);
})
console.log("---x---".repeat(10));

/*
Exercise:21 = They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/

let student : {name: string, age: number, gender: string} = {
    name: "Saifullah",
    age: 18,
    gender:"Male"
}

console.log(student)
console.log("---x---".repeat(10));

/*
Exercise:22= Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.
*/

let days : string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//console.log(days{7}) // This will pass through a error message 
/* Ex22.ts:7:17 - error TS1005: ',' expected.
7 console.log(days{7}) // This will pass through a error message
Ex22.ts:7:19 - error TS1005: ':' expected.
7 console.log(days{7}) // This will pass through a error message
Found 2 errors in the same file, starting at: Ex22.ts:7
*/

console.log(days[4]);
console.log("---x---".repeat(10));

/*
Exercise: 23 = 
23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

//1 = True
let car: string = "Mehran";
console.log("1.'car == Mehran' I think it will predict true")
console.log(car == "Mehran");

//2 = false
let bus: string = "Youton";
console.log("2.'bus == Toyota' I think it will predict false")
console.log(bus == "Toyota");

//3 = true
let numt : number = 119942;
console.log("3.'numt == 119942' I think it will predict true")
console.log(numt == 119942);

//4 = false
let numf : number = 234432;
console.log("4.'numf == 119942' I think it will predict flase")
console.log(numf == 119942);

//5 = true
let valuet: boolean = true;
console.log("5.'valuet == true' I think it will predict true")
console.log(valuet == true);

//6 = true
let valuef: boolean = false;
console.log("6.'valuef == null' I think it will predict false")
console.log(valuef == null);

//7 = true
let understandt: undefined = undefined;
console.log("7.'undefinedt == undefined' I think it will predict true")
console.log(understandt == undefined);

//8 = true
let understandf: undefined = undefined;
console.log("8.'undefinedt == false' I think it will predict false")
console.log(understandf == false);

//  9= true
let nullt : null = null;
console.log("9.'nullt == null' I think it will predict true")
console.log(nullt == null);

// 10= false
let arr1f: number[] = [1, 2, 3, 4, 5];
let arr2f: number[] = [1, 2, 3, 4, 5];
console.log("10.'arr1f == arr2f' I think it will predict false")
console.log(arr1f == arr2f);
console.log("---x---".repeat(10));

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
var equality = "Saifullah";
var inequality = "Kayhan";
console.log(equality === inequality); //false
console.log(equality !== inequality); //true
console.log("---------------------------------");
//• Tests using the lower case function
var upperStr = "HELLO WORLD";
var lowerStr = "hello world";
console.log(upperStr.toLowerCase() === lowerStr); //true
console.log(upperStr === lowerStr); //false
console.log("-----------------------------------");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var rnum = 23;
var rnum2 = 18;
console.log(rnum === rnum2); //false
console.log(rnum !== rnum2); //true
console.log(rnum > rnum2); //true
console.log(rnum < rnum2); //false
console.log(rnum >= rnum2); //true
console.log(rnum <= rnum2); //false
console.log("---------------------------------------");
// • Tests using "and" and "or" 
// And operators
console.log(rnum !== rnum2 && rnum > rnum2); // true because both are true
console.log(rnum === rnum2 && rnum > rnum2); // false in and if one false the full condition will be false
// or Operator 
console.log(rnum !== rnum2 || rnum > rnum2); // true because both are true
console.log(rnum !== rnum2 || rnum < rnum2); // true in or if one condition is true then the the whole condition will show true
console.log(rnum === rnum2 || rnum < rnum2); // false because both are false
console.log("---------------------------------------");

// • Test whether an item is in a array
var testfruit = ["apple", "orange", "orange"];
console.log(testfruit.includes("apple")); // true
console.log(testfruit.includes("banana")); // false
console.log("---------------------------------------");

// • Test whether an item is not in a array
console.log(!testfruit.includes("apple")); // false
console.log(!testfruit.includes("banana")); // true
console.log("---x---".repeat(10));


/*
Exercise:25:  Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.)
*/

let alienColor : string = "red";

if(alienColor == "green"){
    console.log("Your have got 5 points")
}

else if(alienColor == "red"){
    console.log();
}
console.log("---x---".repeat(10));

/*
Exercise:26 =  Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/

let aliencolor2: string = "red";

if(aliencolor2 == "green"){
    console.log("Your have got 5 points")
}

else{
    console.log("YOu have got 10 points");
}
console.log("---x---".repeat(10));

/*
Exercise: 27 = Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

let aliencolor3 : string = "pink";

if(aliencolor3 == "green"){
    console.log("You have got 5 points")
}

else if(aliencolor3 == "yellow"){
    console.log("You have got 10 points")
}

else if(aliencolor3 == "red"){
    console.log("You have got 15 points")
}

else{
    console.log("You have got 0 points")
}
console.log("---x---".repeat(10));

/*
Exercise:28= Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/

let age = 30;
// • If the person is less than 2 years old, print a message that the person is a baby.
if(age === 2){
    console.log("Your are baby child")
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if(age >= 2 && age < 4){
    console.log("You are todller child")
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if(age >= 4 && age < 13){
    console.log("You are kid")
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20){
    console.log("You are teenager")
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65){
    console.log("You are adult")
}
// • If the person is age 65 or older, print a message that the person is an elder.
else{
    console.log("You are elder")
}
console.log("---x---".repeat(10));
console.log("---x---".repeat(10));

/*
Exercise:29 = Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!
*/

// • Make a array of your three favorite fruits and call it favorite_fruits.
let favfruits: string[] = ["apple", "orange", "banana"];

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
if(favfruits.includes("apple")){
    console.log("You really like apples!")
}else{
    console.log("Apples are not one of your favorite fruit")
}

if(favfruits.includes("orange")){
    console.log("You really like oranges!")
}else{
    console.log("Oranges are not one of your favorite fruit")
}

if(favfruits.includes("banana")){
    console.log("You really like bananas!")
}else{
    console.log("Bananas are not one of your favorite fruit")
}

if(favfruits.includes("grap")){
    console.log("You really like grapes!")
}else{
    console.log("Grapes are not one of your favorite fruit")
}

if(favfruits.includes("Mango")){
    console.log("You really like mangos!")
}else{
    console.log("Mangos are not one of your favorite fruit")
}

console.log("---x---".repeat(10));

/*
Exercise:30= Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/

let usernames : string[] = ["admin", "Saifullah", "Kayhan", "Haseeb", "Waqar"];
for(const username of usernames) {
    if(username === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${username}, thank you for logging in again.`)
    }
}
console.log("---x---".repeat(10));


/*
Exercise:31 = No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

let usernames1 : string[] = ["admin", "Saifullah", "Kayhan", "Haseeb", "Waqar"];
// Add an if test to Exercise 28 to make sure the list of users is not empty.
if(usernames1.length === 0){
    //• If the list is empty, print the message We need to find some users!
    console.log("We need to find some users!")
}
else{
    for(const username of usernames1) {
        if(username === "admin"){
            console.log("Hello admin, would you like to see a status report?")
        }else{
            console.log(`Hello ${username}, thank you for logging in again.`)
        }
    }
}

// • Remove all of the usernames from your array, and make sure the correct message is printed.
usernames1 = [];
if(usernames1.length === 0){
    //• If the list is empty, print the message We need to find some users!
    console.log("We need to find some users!")
}
else{
    for(const username1 of usernames1) {
        if(username1 === "admin"){
            console.log("Hello admin, would you like to see a status report?")
        }else{
            console.log(`Hello ${username1}, thank you for logging in again.`)
        }
    }
}
console.log("---x---".repeat(10));

/*
Exercise:32= Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

let currentusers : string[] = ["user1", "user2", "user3", "user4", "user5"];
let newusers: string[] = ["user4", "user5", "user6", "user7", "user8"];

for(const newuser of newusers) {
let loweernewusers:string = newuser.toLowerCase();

if(currentusers.some(existinguser => existinguser.toLowerCase() === loweernewusers)){
    console.log(`Username ${newuser} is already be takken`);
}else{
    console.log(`Congratulations on getting ${newuser} username.`);
}
}
console.log("---x---".repeat(10));

/*
Exercise:33 = Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
7th 8th 9th", and each result should be on a separate line.
*/

// • Store the numbers 1 through 9 in a array.
let ordinalNumbers : number[] = [1,2,3,4,5,6,7,8,9];

// • Loop through the array.
for(const ordinalNumber of ordinalNumbers){
    let ordinal: string;
    if(ordinalNumber === 1){
        ordinal = "st";
    }
    if(ordinalNumber === 2){
        ordinal = "nd";
    }
    if(ordinalNumber === 3){
        ordinal = "rd";
    }
    else{
        ordinal = "th";
    }
    console.log(`${ordinalNumber}${ordinal}`)
}

console.log("---x---".repeat(10));


/*
Exercise:34= Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni
pizza.

• Add a line at the end of your program, outside the for loop, that states
how much you like pizza. The output should consist of three or more lines
about the kinds of pizza you like and then an additional sentence, such as
I really love pizza!
*/

let favPizzas: string[] = ["Chesse", "Meal", "BBQ Chicken"];

console.log("There are my pizzas!")
for(const favPizza of favPizzas){
    console.log(favPizza)
}

console.log("I like these pizza flavors")
for (const favPizza1 of favPizzas){
    console.log(`Flavour ${favPizza1} is my favorite flavour in pizza...`)
}
console.log("---x---".repeat(10));


/*
Exercise:35=  Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!
*/

let petAnimals: string[] = ["Dog", "Cat", "Rabbit"];

console.log("Thses animals have common characteristics");
for(const petAnimal of petAnimals){
    console.log(petAnimal);
}

console.log("Thses animals would makes a great pets");
for(const petAnimal1 of petAnimals){
    console.log(`A ${petAnimal1} would make a great pet`);
}
console.log("These animals would make a great pet")

console.log("---x---".repeat(10));

/*
Exercise:36= T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.
*/

function makeshirt(size: string, message: string): void{
    console.log(`The size of the shirt is ${size} and the message is ${message}`)
}

// Call the funciton
makeshirt("large", "Hello world!");
console.log("---x---".repeat(10));

/*
Exercise:37 = Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.
*/

function makeshirt1(size: string= "Large", message: string= "I love Typescript"): void{
    console.log(`The size of the shirt is ${size} and the message is ${message}`)
}

// Call the funciton
makeshirt1();// By default
makeshirt1("Meduim");// By default message has been takes
makeshirt1("Small", "Hello world!");// both arguments are given custom
console.log("---x---".repeat(10));


/*
Exercise:38=  Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.
*/

function describecity(city:string, country:string= "Pakistna"):void {
    console.log(`${city} is in ${country}`);
}

describecity("Hyderabad")
describecity("Karachi")
describecity("Lahore")
describecity("New-York", "USA")
console.log("---x---".repeat(10));


/*
Exercise: 39=  City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned.
*/

function citycountry(city: string, country: string){
    return `"${city} , ${country}"`
}
console.log(citycountry("Hala", "Pakistan"));
console.log(citycountry("Karachi", "Pakistan"));
console.log(citycountry("Hyderabad", "Pakistan"));
console.log(citycountry("New-York", "USA"));
console.log("---x---".repeat(10));


/*
Exercise:40 = Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.
*/

interface Album {
    artist: string,
    title: string,
    tracks?: number
}

function musicAlbum(artist: string, title: string, tracks?:number): Album {
    const album: Album={
        artist: artist,
        title: title
    }
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album
}

// Created Three albums two with 2 value on with three values 
let album1 = musicAlbum("Artist1", "Title1")
let album2 = musicAlbum("Artist2", "Title2", 123)
let album3 = musicAlbum("Artist3", "Title3")

// Print the values 
console.log(album1)
console.log(album2)
console.log(album3)
console.log("---x---".repeat(10));

/*
Exercise:41 = Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/

function show_magicians(magicians: string[]): void {
    magicians.forEach(magicians => console.log(magicians));
}

let magiciansName: string[] = ["Saifullah", "Haseeb", "Kayhan", "Waqar"];
show_magicians(magiciansName);
console.log("---x---".repeat(10));

/*
Exercise:42=  Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/

function show_magicians1(magicians: string[]): void {
    magicians.forEach(magicians => console.log(magicians));
}
function greet(magicians: string[]): void {
    for(let i=0; i<magicians.length; i++){
         magicians[i]= "The greet " + magicians[i];
    }
}
let magiciansName1: string[] = ["Saifullah", "Haseeb", "Kayhan", "Waqar"];
greet(magiciansName1)
show_magicians1(magiciansName1);
console.log("---x---".repeat(10));

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
console.log("---x---".repeat(10));

/*
Exercise: 44 = Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.
*/

function sandwich(...items: string[]): void{
    if(items.length === 0){
        console.log("You have not selected any item for sandwich making");
    }
    else{
        console.log("Following items you have selected for sandwich");
        items.forEach(items => console.log("-" + items));
        console.log("Thank you for ordering sandwich");
    }
}

sandwich("mushrooms", "onions", "spinach", "tomatoes");
sandwich("mushrooms", "tomatoes", "spinach");
sandwich("tomatoes");
sandwich();
console.log("---x---".repeat(10));

/*
Exercise: 45 =  Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly.
*/

function carInterface(manufacturer: string, model: string, ...options: {[key: string]: any}[]): object {
    const car: {[key: string]: any} = {
        manufacturer: manufacturer,
        model: model,
        ...options
    };
    return car;
}

const carInfo = carInterface("Toyota", "Corolla", {color: "blue", year: 2024});
console.log(carInfo);

console.log("---x---".repeat(10));





























