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