//The JavaScript call() method 

/*
The call() method is a predefined JavaScript method. 

It can be used to invoke (call) a method with an error with an owner object as an argument(parameter).

With call() , an object can use a method belonging to another object. 

This example calls the fullName method of person,using it on person1
*/

const person={
fullName: function(){
    return this.firstName+""+this.lastName;
}
}
const person1={
    firstName:"Pramish",
    lastName:" Adhikari"
}

const person2 ={
    firstName:"Pasu",
    lastName:" Adhikari"
}
//this will return "Pramish Adhikari":

console.log(person.fullName.call(person1));

//This example calls the fullName method of person, using it on person2
console.log(person.fullName.call(person2));

//OUTPUT: Pasu Adhikari
