/* Task3.js - Add your Java Script Code Here */
function myFunction(VALUE)
{
  var p = document.getElementById("mydata");
  var total = 0;

  for(var i=1; i<= VALUE; i++)
    {
      total += i;

    }
    p.innerHTML = "Result = " + total;
}
