/* Task6.js - Add your Java Script Code Here */
var i = 0;
function myFunction()
{
  var p = document.getElementById("mydata");
 i++; // the value of i will be remembered next function call

    if(i >= 20)
    {
      p.innerHTML = "BOOM!";

    }
    else {
      p.innerHTML = i;
    }

}
