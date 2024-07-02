// Hoisting

/*
Variable defined with var are hoisted to the top and can be initialized at any time.

Meaning : You can use the variable before it is declared: 

*/

carName="Mustang";
var carName; 

/*
variables defined with const are also hoisted to the top, but not initialized.

Meaning: Using a const variable before it is declared will result in a ReferenceError:


*/
// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Hoisting</h2>
// <p>With <b>const</b>, you cannot use a variable before it is declared:</p>
// <p id="demo"></p>

// <script>

// try {
//   alert(carName);
//   const carName = "Volvo";
// }
// catch (err) {
//   document.getElementById("demo").innerHTML = err;
// }

// </script>
// </body>
// </html>

// //OUTPUT: 
/*
JavaScript Hoisting
With const, you cannot use a variable before it is declared:

ReferenceError: Cannot access 'carName' before initialization
*/