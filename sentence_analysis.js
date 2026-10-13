/* Algorithm: Count characters, words and vowels */

let sentence = "I love Kenya.";

// Initialize the three counters
let length = 0;
let words = 0;
let vowels = 0;

// Iterator
let i = 0;

// Read each character until the full stop
while (i < sentence.length && sentence[i] !== ".") {

    let ch = sentence[i];

    // Count characters
    length = length + 1;

    // Count vowels
    if ("aeiouAEIOU".includes(ch)) {
        vowels = vowels + 1;
    }

    // Count spaces
    if (ch === " ") {
        words = words + 1;
    }

    // Move to the next character
    i = i + 1;
}

// Add one for the first word
if (length > 0) {
    words = words + 1;
}

// Display the results
console.log("Sentence length:", length);
console.log("Number of words:", words);
console.log("Number of vowels:", vowels);