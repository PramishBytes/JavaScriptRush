// The call() Method with Arguments

//The call() method can accept argumets:

const person={

    fullName:function(city,country){
        return this.firstName+" "+this.lastName+","+city+","+country;
    }
}
const person1 = {
    firstName:"Pasu",
    lastName:" Adhikari"

}
console.log(person.fullName.call(person1," Mummy"," Adhikari"));

//OUTPUT: Pasu  Adhikari, Mummy, Adhikari

/*
<!DOCTYPE html>
<html>
<body>
<h2> JavaScript Functions</h2>
<p> This example calls the fullName method of person, using it on person1:
</p>
<p id = "demo"></p>
<script>
const person = {
fullName:function(city, country){
return this.firstName+" "+this.lastName+ ","+city+","+country;
}

}
const person1 = {
firstName:"Pramish",
lastName:" Adhikari",
}
const person2 ={
firsName:"Pasu",
lastName:" Adhikari"
}
document.getElementById("demo").innerHTML = person.fullName.call(person1, "Pokhara","Nepal");
</script>
</body>
</html>
*/
//===================
//OUTPUT: 
//======================
/*
JavaScript Functions

This example calls the fullName method of person, using it on person1:

Pramish Adhikari,Pokhara,Nepal
*/