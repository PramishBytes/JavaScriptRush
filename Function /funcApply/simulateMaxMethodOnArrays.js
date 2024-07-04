//Simulate a Max Method on Arrays

//You can find the largest number(in a list of numbers) using the Math.max() method:

//Example: 

Math.max(2,3,4,5,); //will return 5

//Since JavaScropt arrays do not have a max()method, you can apply the Math.max() method instead.

//Example:
Math.max.apply(null,[1,2,3]);//Will also return 3

//The first argument (null) does not matter. It is not used in this example: 

//These examples will give the same result: 

Math.max.apply(" ",[1,2,3]); //will return 3 

//Example: 

Math.max.apply(0,[1,2,3]); //will also return 3


//JavaScript Stict Mode

