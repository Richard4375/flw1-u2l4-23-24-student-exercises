let array = [1, 2, 3, 4, 5];
// 1. Use a forEach loop to print each element to the console.
array.forEach(function(number){
  console.log(number)
})


const numbers = [1, 2, 3, 4, 5];
let sum = 0;
// 2. Use a forEach loop to calculate and print the sum of all the elements in the array.
numbers.forEach(function(number){
  console.log(sum += number)
})

let names = ["Simba", "Scar", "Nala", "Mufasa", "Zazu"];
// 3. Use a forEach loop to print each name along with its index number.
//  - You may have to search in this one - hint: the index can be put as a second parameter.
//  - Example: the first message should read "Simba (Index: 0)"

names.forEach(function(name, index){
  console.log(name + " (Index: " + index + ")")
})