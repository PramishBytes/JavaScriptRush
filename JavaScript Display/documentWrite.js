// USING document.write()

// For testing purpose, it is conveient to use document.write():

/*
<!DOCTYPE html>
<html>
<body>
<h1> My first Web Page</h1>
<p> Pramish is learning</p>

<script>
document.write(5+9);
</script>
</body>
</html>
*/

//OUTPUT:
/*
My First Web Page

Pramish is learning
Never call document.write after the document has finished loading.
It will overwrite the whole document.

14
*/

// Use document.write() after an HTML document is loaded, will delete all existing HTML:

/*
<!DOCTYPE html>
<html>
<body>
<h1> My first web page </h1>
<p> My firt paragraph</p>

<button type ="button" onclick = "document.write(5+6)">Try it</button>
</body>
</html>
*/