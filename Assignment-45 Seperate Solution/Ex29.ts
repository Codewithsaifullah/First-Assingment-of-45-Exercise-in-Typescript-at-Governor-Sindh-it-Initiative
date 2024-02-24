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
