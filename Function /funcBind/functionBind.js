//JavaScript Function bind() 

/*
Function Borrowing

With the bind() method, an object can borrow a method from another object. 

The example below creates 2 objects(person and memeber).

The member object borrows the fullName method from the person object: 
*/


const person={
    firstName: "Pramish",
    lastName: " Adhikari",
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
}

const member ={
    firstName: "Pasu",
    lastName: " Adhikari",
}
let fullName = person.fullName.bind(member);
console.log(fullName());

//In HTML 
/*
<!DOCTYPE html>
<html>
<body>
<h1> JavaScript Function bind()</h1>
<p>This example creates 2 objects (person and member).</p>
<p>The member object borrows the fullname method from person:</p>
<p id = "demo"></p>
<script> 
const person={
firstName: "Pramish",
lastName: "Adhikari",
fullName: function(){
return this.firstName+" "+this.lastName; 
}
}
const member = {
firstName: "Pasu",
lastName: "Adhikari",
}
let fullName = person.fullName.bind(member);

document.getElementById("demo").innerHTML=fullName();
</script>
</body>
</html>

*/
//==================>OUTPUT: 
/*
JavaScript Function bind()

This example creates 2 objects (person and member).

The member object borrows the fullname method from person:

Pasu Adhikari
*/