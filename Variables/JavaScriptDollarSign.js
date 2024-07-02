//JavaScript Dollar Sign $

// Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names: 

let $ = "Hello Pramish";
let $$$ = 2;
let $myMoney = 5; 
console.log($,'\n'+$$$,'\n'+$myMoney);

//-------
//OUTPTUT: 
/*
Hello Pramish 
2 
5
*/

//with html

/*
<!DOCTYPE html> 
<html>
<body>
<h1> JavaScript Variables</h1>
<p> The dollar sign is treated as a letter in JavaScipt names. </p>
<p id = "demo"></p>

<script>
let $$$ = 2;
let $myMoney=5; 
document.getElementById('demo').innerHTML = $$$+$myMoney;
</script>
</body>
</html>
*/