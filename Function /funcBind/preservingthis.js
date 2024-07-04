//Preserving this 

/*
Sometimes the bind() method has to be used to prevent losing this. 

In the following example,the person object has a display method. In the display method, this refers to the person 
object:
*/
//Example: 

const person = {
    firstName:"Pramish",
    lastName:" Adhikari",
    display: function(){
        let x = document.getElementById("demo");
        x.innerHTML= this.firstName+" "+this.lastName;
    }
}
person.display();

//In HTML form:
/*
<!DOCTYPE html> 
<html>
<body>
<h1> JavaScript Function bind() </h1>
<p> This example creates 2 objects (person and memeber).</p>
<p>The member object borrows the fullname method from person:</p> 
<p id ="demo"></p>
<script>
const person = {
  firstName: "Pramish",
  lastName:" Adhikari",
  fullName:function(){
  return this.firstName+" "+this.lastName;
  }
}
  const member= {
    firstName: "Pasu",
    lastName:" Adhikari",
  }
    let fullName = person.fullName.bind(member);
    document.getElementById("demo").innerHTML = fullName();
    </script>
    </body>
    </html>

*/
//OUTPUT: 

/*
JavaScript Function bind()

This example creates 2 objects (person and memeber).

The member object borrows the fullname method from person:

Pasu Adhikari
*/

//When a function is used as a callback, this is lost. 

//This example will try to display the person name after 3 secons, but it will display undefined instead: 


//Example; 

const person1={
    firstName: "Pramish",
    lastName: " Adhikari",
    display: function(){
        let xx = document.getElementById("demo");
        xx.innerHTML = this.firstName+" "+ this.lastName;
    }
}
setTimeout(person.display,30000);

/*
The bind() method solves this problem 

In the following example bind() method is used to bind person.display to person . 

This example will display the person name after 3 seconds: 

*/

const per={
    firstName: "Liux",
    lastName:" Adhikari",
    display: function(){
        let x = document.getElementById("demo");
        x.innerHTML = this.firstName+" "+this.lastName;
    }
}
let dis = per.display.bind(per);
setTimeout(display,30000);

// IN HTML 

/*
<!DOCTYPE html> 
<html> 
<body> 
<h1> JavaScript Function bind()</h1>
<p> This example will display a person name after 3 seconds:</p>
<p id = "demo"></p>
<script> 
const per={
firstName: 'Pramish',
lastName: 'Adhikari',
display: function(){
let x = document.getElementById("demo");
x.innerHTML = this.firstName+" "+this.lastName;
}
}
let display = per.display.bind(per);
setTimeout(display,3000);
</script> 
</body>
</html>


*/

//===============================
//OUTPUT: 
//===============================
/*
JavaScript Function bind()

This example will display a person name after 3 seconds:

Pramish Adhikari

*/