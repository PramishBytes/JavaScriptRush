//Constant Objects and Arrays: 

/*
The keyword const is a littel misleading. 

It does not define a const value. It defines a constant reference to a value. 

Because of this you can NOT: 

-> Reassign a constant value
-> Reassign a constant array
-> Reassign a constant object


BUT YOU CAN: 
-> Change the elements of constant arrays 
-> Change the properties of constant object

*/
//You can change the elements of a constant arrays:
// <!DOCTYPE html>
// <html>
//     <body> 
//         <h2>JavaScript const</h2>
//         <p> Declaring a constant array does NOT make the elements unchangeable: </p>
//         <p id = "demo"></p>
//         <script>
//             //Create an Array: 
//             const cars = ["saab","mustang","volvo"];
//             //Change an element:
//             cars[0]="Toyota";

//             //Add an element 
//             cars.push("Audi");

//             //Display the Array:
//             document.getElementById("demo").innerHTML= cars;
//                     </script>
// </body>
// </html>

// error occurs if 
// const cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Volvo", "Audi"];    // ERROR