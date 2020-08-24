// write a function that returns the longest name {first and last} in the given array of objects
//   // Put your solution here

const LongestName = function(instructors) {

  let longest = "";

  for(let i=0; i< instructors.length; i++){
    let currentWord = instructors[i];
    let longestWord = instructors[0];
    if(longestWord.length < currentWord.length){
      longestWord = currentWord;
    }
    return longestWord;
  }
};

// const longest = Math.max(...instructors.map(instructors => instructors.first.length));

// const longest = (key, instructors) => Math.max(...instructors.map(it => it[key].length));
// if(longest("first", instructors) === instructors[i] ){
//   console.log(instructors);
// }

// return longest("first", instructors)
// console.log(longest("first", instructors));
// let longestValue = longest("first", instructors) + longest("last", instructors);
// return longestValue;








console.log(LongestName([
  {first: "Samuel", last: "Sanderson"},
  {first: "Jeremiah", last: "Web"},
  {first: "Ophilia", last: "Rich"},
  {first: "Donald", last: "kant"}
]));
console.log(LongestName([
  {first: "Matthew", last: "Ebert"},
  {first: "David", last: "John"},
  {first: "Domascus", last: "Anderson"}
]));