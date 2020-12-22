// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// method 1
function vowels(str) {
    let count = 0;
    // const checker = "aeiou";
    const checker = ["a", "e", "i", "o", "u"];
    for (let i of str.toLowerCase()) {
        // if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
        if (checker.includes(i)) {
            count++;
        }
    }
    return count;
}

module.exports = vowels;