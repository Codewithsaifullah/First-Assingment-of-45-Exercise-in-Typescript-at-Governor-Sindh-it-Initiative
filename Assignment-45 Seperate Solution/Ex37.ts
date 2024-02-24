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
