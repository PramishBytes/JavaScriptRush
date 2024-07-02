// JavaScript Identifiers /Names 

/*
Identifiers are JavaScript names.
The rules for legal names are the sam in most programming languages. 
A JavaScript name must begin with : 

-> A letter(A-Z or a-z)
-> A dollar sign ($)
-> Or an underscore(_)

Subsequent characters may be letters,digits,underscores, or dollar signs. 
*/

//NOTE: 
// Numbers are not allowed as then first character in names. 
// This way JavaScript can easily distinguish identifiers from numbers.

//JavaScripts is Case Sensitive 

/*
All JavaScript identifiers are case sensitive. 

The vairables lastName and lastname, are two different variables: 

*/
let lastName, lastname; 
lastname ='Pramish';
lastName = "Adhikari";
console.log(lastname);
console.log(lastName);


/* JavaScript and Camel Case
Historically, programmers have used different ways to joining multiplt words into one variable name: 

Hyphens: 
fist-name,last-name,master-card, inter-city.

Hypens are not allowed in JavaScript. They are reserved for subtractions.

UnderScores: 
first_name,last_name,maste_card,inter_city.

Upper Camel Case: 
FirstName, LastName,MasterCard,InterCity.

Lower Camel Case: 
JavaScript programmers tend to use camel case that starts with a lower letter: 

firstName, lastName,masterCard,interCitry.

*/

//JavaScript Character Set
/*
JavaScript uses the Unicode character set.

Unicode covers(almost) all the characters, puncutations and symbols in the world.

*/