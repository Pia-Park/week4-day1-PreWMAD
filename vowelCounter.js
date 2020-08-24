// write a function that counts the number of vowels in a given string and returns that value

const vowelCounter = function(data) {
  // Put your solution here
  return data.split("").length;
}


console.log(vowelCounter("orange"));
console.log(vowelCounter("Cornerstone"));
console.log(vowelCounter("aeiou"));