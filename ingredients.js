var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log("Ingredients:");
var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a while loop that prints out the contents of ingredients:

console.log("Ingredients:");
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("Ingredients:");
var reversed = ingredients.reverse();
for (var i = 0; i < reversed.length; i++) {
  console.log(reversed[i]);
}