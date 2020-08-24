// write a function that returns the sum of all the numbers that are either 'even', or 'odd'

const conditionalAdding = function(values, condition) {
  // Your code here
  let sum = 0;
  for(let i=0; i<values.length; i++){
      if(values[i] % 2 === 0 && condition === "even"){
        sum = sum + values[i]
        console.log(values[i]);
      }else if(condition === "odd" && values[i] % 2 != 0){
        sum = sum + values[i];
        console.log(values[i]);
      
    }
  }
};

// let sum = values;
// for(let i=0; i<values.length; i++){
//   if(condition === "even" && values[i] % 2 === 0){
//     sum = sum + values[i];
//     console.log(values[i]);
//   }else if(condition === "odd" && values[i] % 2 != 0){
//     sum = sum + values[i];
//     console.log(values[i]);
//   }
// }
// };

console.log(conditionalAdding([1, 2, 3, 4, 5], "even"));
console.log(conditionalAdding([1, 2, 3, 4, 5], "odd"));
console.log(conditionalAdding([13, 88, 12, 44, 99], "even"));
console.log(conditionalAdding([], "odd"));