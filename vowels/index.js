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
    //let x = str.split("");
    for (let i of str.toLowerCase()) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            count++;
        }
    }
    return count;
}

module.exports = vowels;