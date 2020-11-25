// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'


// Method 1 : i used the reverse method
// function reverse(str) {
//      return str.split('').reverse().join('');
// }
// module.exports = reverse;

// Method 2 : i used for loop to reverse the characters in new string
// function reverse(str){
//      let reversed ='';
//      for(let character of str){
//           reversed = character + reversed ;
//      }
//      return reversed;
// }
// module.exports = reverse;

// Method 3 : i used the splite function and use the reduce helper
function reverse(str){
     return str.split('').reduce((reversed , character) => {
          return character + reversed;
     }, '' );
}
module.exports = reverse;