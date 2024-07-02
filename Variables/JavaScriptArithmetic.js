// JAVASCRIPT ARTHIMETIC

/* As with algebra,you can do arithmetic with javascript variables,
using operators like = and +:

Example: 

*/

//---------------

// <!DOCTYPE html>
// <html>
//     <body>
//         <h1>JavaScript Variables</h1>
//         <p>The result of adding 5+2+3 is: </p>
//         <p id = "demo"></p>
//         <script>
//             let x = 5+2+3;
//             document.getElementById('demo').innerHTML = x;

//         </script>
//         </body>
// </html>

//--------
//You can also add strings, but strings will be concatenated: 

/*
<!DOCTYPE html>
<body>
<h1> JavaScript Variables</h1>
<p> The result of adding "John" + " "+"Doe" is : </p>
<p id = "demo"></p>
<script> 
let x = "John" + " "+"Doe";
document.getElementById('demo').innerHTML = x;
</script>
</body>
</html>
*/

//--------
//Also try this: 

let x = "5"+2+3;
console.log(x);


//OUTPUT: 523

//Note: If you put a number in quotes, the rest of the numbers will be treated as strings,and concatenated.


let a = 2+3+"5";
console.log(a);

//OUTPUT: 55
