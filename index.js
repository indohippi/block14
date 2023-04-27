// inout the values for the arrays
const inputArrays = [
  [2, 4, 6, 8, 11, 20, 15, 22],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [70, 42, 55, 81, 21, 91, 34],
  [2, 4, 6, 8, 10, 11, 12],
];

// Loop through the inputArrays
for (let k = 0; k < inputArrays.length; k++) {
  const arr = inputArrays[k];
  const oddNumbers = [];

  // Loop through the input array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current number is odd
    if ((arr[i] / 2) !== Math.floor(arr[i] / 2)) {
      // Add the odd number to the oddNumbers array
      oddNumbers.push(arr[i]);
    }
  }

  console.log(oddNumbers);
}



// vowels vs consonants
let inputString = 'hello';
let consonantsCount = 0;
let vowelsCount = 0;
const vowels = "aeiou";
console.log(`${inputString} has ${consonantsCount} consonants and ${vowelsCount} vowels`);