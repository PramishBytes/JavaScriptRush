// Redeclaring


//Redeclaring a JavaSript var variable is allowed anywhere in a program: 

// var x =2; //Allowed

// var x = 3; //Allowed
// x=4; //Allowed


//Redeclaring an existing var or let variable to const, in the same scope, is not allowed : 

//var x = 2; //Allowed
// const x = 2; //Not Allowed
// {
//     let x = 2;  //Allowed
//     // const x = 2; //Not Allowed
// }
// {
// const x = 2; // Allowed
// // const x = 2; //Not Allowed
// }

// //Example: 

// var x = 2;   //Allowed 
// //const x =2;  //Not Allowed
// {
// let x =2 ; //Allowed
// //const x =2; //Not Allowed

// }
// {
// const x = 2; //Allowed
// //const x = 2; //Not Allowed
// }

// // Reassigning an existing const variable,in the same scope, is not allowed:

// const a=2; 
// //After a variable is kept const in same code you cannot do these things, it results into error
// // x = 2; 
// // var a =2;
// // let a =2; 
// // const a =2; 
// // {
// //     const a = 2; 
// //     a =2; 
// //     var a=2; 
// //     let a =2; 
// //     const a =2; 
// // }

// //===========================

//Redeclaring a variable with const, in another scope, or in another block is allowed:
//====================

// Allowed in these forms as they are  in different block scope
const c =2; 
{
    const c =3; 
    console.log(c);

}
{
    const c = 4;
    console.log(c);
}
console.log(c);
// // OUTPUT:
// 3
// 4
// 2
