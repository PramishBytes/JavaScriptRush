//JavaScript Arithmetic 

/*
JavaScript Arithmetic Operators
Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation (ES2016)
/	        Division
%	        Modulus (Remainder)
++	        Increment
--	        Decrement

*/

//Arithmetic Operations

let x = 100+1000;
console.log(x);
// let y = a+b;

var a = 100;
let cal = (100+100)*a;
console.log(cal);

// Operators and Operands
/*
The numbers (in an arithmetic operation) are called operands.

The operation (to be performed between the two operands) is defined by an operator.

Operand	    Operator	Operand
100	            +	    50
*/

// Remainder '%'

let aa = 10;
let y = 3;
let z = aa%y;
console.log(z);

//=============
   // ===============
//Incrementing 
//The increment operator (++) increments numbers.

let ab = 5; 
ab++;
let zx = ab;
console.log(zx);

// ======================
    //=======================

//Decrementing 

//The decrement operator (--) decrements numbers. 

ab --;
zx = ab;
console.log(zx);

// Exponentiation 
//The exponenetiation operator (**) raises the first operand to the power of the second operand.

let c =ab ** zx;
console.log(c);

//Next way
let abc = Math.pow(ab,zx);
console.log(abc);