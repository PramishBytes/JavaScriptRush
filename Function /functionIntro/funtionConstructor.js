 // =======>  The Function() constructor  <======
/*
As you can have seen in the previous example, JavaScript functions are defined with the function keyword.

Function can also be defined with a built-in JavaScript function constructor called Function().

//================================================================

const myFunction = new Function("a","b","return a*b");

let x = myFunction(4,3);


-->
<!DOCTYPE html>
<body> 
    <h2> JavaScript Functions</h2>
    <p>JavaScript has an built-in function constructor.</p>
    <p id = "demo"></p>
    <script> 
        const myFunction = new Function("a","b","return a*b");
        document.getElementById("demo").innerHTML = myFunction(4,3);
    </script>
</body>
</html>

*/
const myFunction = new Function("a","b","return a*b");
let x = myFunction(4,3);
console.log(x);