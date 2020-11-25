// --- Directions
// Given a string, return true if the string is a palindrome or false if it is not. 

// Palindromes are strings that form the same word if it is reversed.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// method 1 : i used the reverse method to revese the string and then compare between them
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('') ;
//     return str === reversed;
// }

// module.exports = palindrome;

// method 2 : i used the every() to compair between the first character and the last and so on
function palindrome(str){
    return str.split('').every((char,i) => {
        return char === str[str.length -i -1];
    })
}
module.exports = palindrome;

