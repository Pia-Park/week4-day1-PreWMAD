const addLargestNumbers = function(data) {
  // Put your solution here
  // let arr = data
  // let max = Math.max.apply(null, data);
  let b1 = -Infinity;
    let b2 = -Infinity;

    for (let i=0; i < data.length; i++) {
        if (data[i] > b1) {
            b1 = data[i];
        }
    }
    for (let i=0; i < data.length; i++) {
        if (data[i] > b2 && data[i] < b1) {
            b2 = data[i];
        }
    } 
    return b1 + b2;
}

console.log(addLargestNumbers([1, 10]));
console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));