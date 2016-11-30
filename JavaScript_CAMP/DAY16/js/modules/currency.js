/*! currency.js © yamoo9.net, 2016 */
'use strict';

// ES3
// var currency = function(n) {
//   n = n || 1000;
//   return n;
// };

// ES6
// let double = (x)=> x * x;
let currency = (n=1000)=> n;

let result = currency(10230400);

console.log(result); // '10,230,400원'
