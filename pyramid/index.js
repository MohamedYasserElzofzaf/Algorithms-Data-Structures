// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, rows = 0, level = "") {
    if (n === rows) {
        return;
    }
    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, rows + 1);
    }
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - rows <= level.length && midpoint + rows >= level.length) {
        add = "#";
    } else {
        add = " ";
    }
    pyramid(n, rows, level + add);
}
module.exports = pyramid;

// function pyramid(n) {
//   let x = 2 * n - 1;
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   // rows
//   for (let i = 0; i < n; i++) {
//     let level = "";
//     // columns
//     for (let j = 0; j < x; j++) {
//       if (midpoint - i <= j && midpoint + i >= j) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }