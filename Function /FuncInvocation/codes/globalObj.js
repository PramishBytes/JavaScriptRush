// The Global Object
/*
When a function is called without an owner object, the value of this becomes the global object.

In a web browser the global object is the browser window. 

This example returns the window object as the value of this: 

*/

let x = myFunction();  // x will be the window object
function myFunction(){
    return this;
}

/*
<!DOCTYPE html>
<html>
<body>
<h2> JavaScript functions</h2>
<p> In Html the value of <b> this</b>, in a global function, is the window object.</p>

<p id = "demo"></p>

<script>
let x = myFunction();
function myFunction(){
return this;
}
document.getElementById("demo").innerHTML = x;
</script>
</body>
</html>


*/