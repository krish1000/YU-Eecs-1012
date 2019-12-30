/* Task1.js - Add your Java Script Code Here */
function myFunction()
{
  var p = document.getElementById("mydata");

  // set p.innerHTML equal to YES or NO
  var num1 = Math.random(); // generates random numbers

  if(num1 > 0.5) // if condition less than 0.5 is yes
    {
    p.innerHTML = "YES";
    } else {
    p.innerHTML = "NO";
    }
}
