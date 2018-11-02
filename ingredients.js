var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var k = 0;
while(k < ingredients.length){
  console.log(ingredients[k]);
  k++;
}

// Write a for loop that prints out the contents of ingredients:
for(var i=0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for(var j=0; j < ingredients.length; j++){
  console.log(ingredients[ingredients.length - (j + 1)]);
}