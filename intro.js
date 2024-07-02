// This page contains some example of what JavaScript can do

/*
JavaScript Can Change Html Content

One of many JavaScript HTML methos is 'getElementById()'

The example below finds an HTML element (with id = "demo"), and change the element content (innerHTML) to 
"Hello JavaScript".

*/
// Example:
// Run this example on online compiler platform for answer .
// <!DOCTYPE html>
// <html>
// <body>
//     <h2> What Can JavaScript Do?</h2>
//     <p  id ="demo"> JavaScript can change HTML content.</p>
// <button type = "button"
// onclick ='document.getElementById("demo").innerHTML = "Hello Pramish"'>Click Me!</button>
// </body>
// </html>

/* JavaScript accepts both double and single quotes:

Example:

<!DOCTYPE html>
<html>
<body>
<h2> What Can JavaScript DO?</h2>
<p id = "demo"> JavaScript can change HTML content.</p>
<button type = "button"
onclick = "document.getElementById('demo').innerHTML = 'Hello Pramish!'">Click here!</button>
</body>
</html>
*/

// JavaScript can Change HTML Attributes Values

/*
<!DOCTYPE html>
<html>
<body>
<h2> What can JavaScript Do? </h2>
<p> JavaScript can change HTML attributes values.</p>
<p> In this case JavaScript changes the value of the src(source) attribute of an image.</p>
<button
onclick = "document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>
<img id = "myImage" src = "pic_bulboff.gif"
style ="widht:100px">
<button
onclick = "document.getElementById('myImage').src = 'pic_bulboff.gif'"> Turn off the light </button>
</body>
</html>
 */

//JavaScript can Change HTML Style(CSS)
/*
Changing the style of an HTML element, is a variant of changing an HTML attribute:

Example:

<!DOCTYPE html>
<html>
<body>
<h2> What Can JavaScript Do?</h2>
<p id = "demo"> Pramish is learning JavaScript.</p>
<button type ="button"
onclick = "document,getElementById('demo').style.fontSize ='35px'">Click Me!</button> 
</body>
</html>
*/


//JavaScript Can Hide HTML ELEMENTS

/*
Hiding HTML elements can be done by changing the display style:

<!DOCTYPE html>
<html>
<body>
<h2> What can JavaScript DO?</h2>
<p id = "demo"> Pramish hides after clicking the button</p>
<button type = "button"
onclick = "document.getElementById('demo').style.display = 'none'">Click Here</button>
</body>
</html>
*/

// JavaScript Can Show HTML Elements

/*

Showing hidden HTML elements can also be done by changing the display style: 

Example: 

<!DOCTYPE html> 
<html>
<body>
<h2> What Can JavaSript Do?</h2>
<p> Don't click the button Pramish will see you.</p>

<p id = "demo" style = "display: none"> I can see you </p>
<button type = "button"
onclick = "document.getElementById('demo').style.display='block'"> Don't click!</button>
</body>
</html>
 */