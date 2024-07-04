// The apply() method with arguments

// The apply() method accepts arguments in an array:

const person = {
     
    fullName: function(city,country){

       return this.firstName+" "+this.lastName+","+city+","+country;
    }  
}
const person1 = {
   firstName: " Pramish",
   lastName: " Adhikari"
}

console.log(person.fullName.apply(person1, ["Pokhara","Nepal"]));

//OUTPUT: Pramish  Adhikari,Pokhara,Nepal
