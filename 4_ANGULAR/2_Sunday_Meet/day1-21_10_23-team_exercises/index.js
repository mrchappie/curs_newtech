// EXERCISE 1
/**
 * Problem Description:
Write a program that prints the numbers from 1 to 100. 
But for multiples of 3, print "Fizz" instead of the number, 
and for the multiples of 5, print "Buzz". For numbers which are 
multiples of both three and five, print "FizzBuzz".

Example Output:

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
...
...
FizzBuzz
...
 */

// function printNumbers(number) {
// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }
// }

// console.log(printNumbers(100));

// EXERCISE 2
/**
 *Problem Description:
Write a function that takes a string as input and returns that string reversed.

Example:
Input: "hello"

Output: "olleh"

Input: "world"

Output: "dlrow"
 */

// function reversedString(string) {
//   return string.split('').reverse().join('');
// }

// console.log(reversedString('Alex'));

// EXERCISE 2
/**Problem Description:
Write a function that takes a string as an argument and returns the length of the longest substring without repeating characters.

Examples:
Input: "abcabcbb"
Output: 3
Explanation: The longest substring without repeating letters is "abc", which has a length of 3.

Input: "bbbbb"
Output: 1
Explanation: The longest substring without repeating letters is "b", which has a length of 1.

Input: "pwwkew"
Output: 3
Explanation: The longest substring without repeating letters is "wke", with a length of 3. */

// function longest(string) {
//   let lungime = '';

//   for (let i = 1; i <= string.length; i++) {
//     const sub = string.substring(0, i);
//     console.log(sub);
//     for (let j = 0; j <= sub.length; j++) {
//       if (sub.lastIndexOf(sub[j]) != sub.indexOf(sub[j]) + 1) {
//         break;
//       } else {
//         lungime += sub[j];
//       }
//     }
//   }

//   return lungime;
// }

// console.log(longest('aaaa'));
// console.log(longest('abbb'));
// console.log(longest('alex'));

// function longString(s) {
//   if (s.length === 0) {
//     return 0;
//   }

//   const charSet = new Set();
//   let left = 0;
//   let maxLen = 0;

//   for (let right = 0; right < s.length; right++) {
//     while (charSet.has(s[right])) {
//       charSet.delete(s[left]);
//       left++;
//     }
//     charSet.add(s[right]);
//     maxLen = Math.max(maxLen, right - left + 1);
//   }

//   return maxLen;
// }
// console.log(longString('ax'));

// EXERCISE 2
/**
 * Problem Description:
Write a function called twoSum that takes an array of integers nums 
and an integer target. The function should return an array of indices 
of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

Example:
twoSum([2, 7, 11, 15], 9); // Should return [0, 1] or [1, 0]
 */

function sumToTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (target > arr[i]) {
      const diff = target - arr[i];
      const secIndex = arr.indexOf(diff);
      if (secIndex >= 0) {
        return [i, secIndex];
      }
    }
  }

  return 'No numbers match';
}

console.log(sumToTarget([11, 11, 23, 15], 22));
