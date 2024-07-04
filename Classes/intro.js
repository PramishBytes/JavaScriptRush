//Using a class

//When you have a class, you can use the class to create objects: 

//Example:

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

const myCar1=new Car("Mustang",1960);
const myCar2 = new Car("Audi",2019);

//The example above uses the Car class to create two Car Objects.

// The constructor method is called automatically when a new object is created.

// The Constructor Method
/*
The constructor method is a special method:

-> It has to have the exact name "constructor"
-> It is executed automatically when a new object is created. 
-> It is used to initialize object properties

If you do not define a constructor method, JavaScript will add an empty consturctor method. 

*/

//Class Methods 

/*
Class methods are created with the same syntax as object methods. 

Use the keyword class to create a class

Always add a constructor() method. 

Then add any number of methods.
*/

//Syntax: 
/*
class ClassName{
constructor(){...}
method_1(){...}
method_2(){...}
method_3(){...}
}
*/

//Create a class method named 'age', that returns the Car age: 


//EXAMPLE:

class car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear()-this.year;
    }
}
const myCar = new car('Ford',2014);
document.getElementById("demo").innerHTML = "MY car is "+myCar.age()+"years old";

//In HTML document
/*
<!DOCTYPE html>
<html> 
<body> 
<h1> JavaScript Class Methods</h1>

<p> How to define and use a class method.</p>
<p id ="demo"></p>
<script>
class Car{
constructor(name,year){
this.name =name; 
this.year = year;
}
age(){
const date = new Date();
return date.getFullYear()- this.year;
}
}
const myCar = new Car("Mustang",2019);
document.getElementById("demo").innerHTML="My car is "+ myCar.age()+" years old";
</script> 
</body> 
</html>



*/
//===========================================
//===========================================
//OUTPUT
/*
JavaScript Class Methods

How to define and use a class method.

My car is 5 years old 
*/

//===> 'use strict' <======

/*
The syntax in classes must be written in "strict mode."

You will get an error if you do not follow the "strict mode" rules.
*/

//In "strict mode" you will get an error if you use a variable without declaring it: 

/*
class Car{
constructor(name,year){
this.name = name; 
this.year = year;
}
age(){
//date = new Date() // This will not work 
const date = new Date(); //this will work 
return date.getFullYear() - this.year;
}
}

*/