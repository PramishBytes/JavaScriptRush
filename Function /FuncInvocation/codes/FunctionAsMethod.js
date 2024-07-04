// Invoking a function as a Method

/*
In JavaScript you can define functin as object methods.

The following example creates an object(myObject), with two properties(firstName and lastName), and a method(fullName): 

*/

//Example: 

const myObject ={

    firstName: "Pramish",
    lastName: "Adhikari",
    fullName: function(){
        return this.firstName+" "+this.lastName; 
    }
}
console.log(myObject.fullName()); // Will return "Pramish Adhikari"

/*
The fullName method is a function. The function belongs to the object. myObject is the owner of the function . 

The thing called this, is the object that "owns" the JavaScript code. In this  case the value of this  is myObject. 

*/

//Test it! Change the fullName method to return the value of this: 

//Example: 
const Myobject={
    Firstname:"John",
    Lastname: "Doe",
    Fullname: function(){
        return this;
    }
    
}
console.log(Myobject.Fullname()); 
//OUTPUT: { Firstname: 'John', Lastname: 'Doe', Fullname: [Function: Fullname] }

