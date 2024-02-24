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