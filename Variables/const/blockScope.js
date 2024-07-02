// Block Scope 

/*
Declaring a variable with const is similar to let when it comes to Block Scope

The x declared in the block, in this example, is not the same as the x declared outside the block:
*/

const x =10; 
//here x is 10

{
    const x = 2;
    //here x is 2
    console.log(x); // Output: 2
}
//here x is 10
console.log(x); //OUTPUT: 10

/*
<!DOCTYPE html>
<html>
<body>
<h2> JavaScript const variables has block
scope </h2>

<p id = "demo"></p>
<script>
const x =10;
//Here x is 10
{
const x = 2;
//here x is 2
}
//Here x is 10
document.getElementById("demo").innerHTML = "x is  "+x;
</script>
</body>
</html>
*/