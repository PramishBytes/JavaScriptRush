//JavaScript apply()

/*
Method Reuse
=> With the apply() method, you can write a method that can be used on different objects.
*/


// The JavaScript apply() method
/*
The apply() method is similar to the call() method 

In this example the fullName method of person is applied on person1:
*/

//Example: 

const person= {
    fullName: function(){
        return this.firstName+ ""+this.lastName;
    }
    }
const person1 ={
  firstName: "Pramish",
  lastName:" Adhikari"
}
//This will return "Pramish Adhikari":
console.log(person.fullName.apply(person1));  //Pramish Adhikari

/*
<!DOCTYPE html>
<html>
<body>
<h2> JavaScript Function</h2>
<p> In this example the fullName method of person is <b> applied </b> on person1:</p>
<p id = "demo"><p>

<script> 
const person ={
fullName: function(){
  return this.firstName+ " "+ this.lastName;
}
}
const person1 = {
firstName: " Pramish",
lastName: " Adhikari"
}
document.getElementById("demo").innerHTML = person.fullName.apply(person1);
</script>
</body>
</html>

*/
/*
JavaScript Function

In this example the fullName method of person is applied on person1:

Pramish Adhikari
*/