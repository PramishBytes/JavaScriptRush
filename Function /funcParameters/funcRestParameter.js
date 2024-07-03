//Function Rest Parameter

// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array: 

//Example: 

function sum(...args){ // Make sute the '...' are exactly 3
    let sum =0; 

    for (let arg of args ) sum+= arg; 
    return sum;
}

let x = sum(4,9,16,25,29,100,66,77);
console.log(x); //OUTPUT: 326


/* IN HTML
<!DOCTYPE html>
<html>
<body>
<h1> JavaScript Functions</h1>
<h2> The Rest Parameter</h2>
<p> The rest parameter(...) allows a function to treat an indefinite number of arguments
as an array: </p>

<p id = "demo"></p>
<script> 
function sum(...args){
let sum= 0; 
for(let arg of args) sum+=arg;
return sum;
}

let x= sum(4,9,16,25,29,100,66,77);
document.getElementById("demo").innerHTML= x;
</script>
</body>
</html>
*/