/*
Exercise:20= Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
else you’d like. Write a program that creates a list containing these items.
*/

let programminlang: string[] = ["Javascript", "TypeScript", "Java", "Python"];

console.log(`Hare are ${programminlang.length} programming languages are my faviourate which are given below.`)
programminlang.forEach((lang)=>{
    console.log(`${lang}`);
})