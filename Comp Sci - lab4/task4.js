/* Task4.js - Add your Java Script Code Here */
function myFunction()
{
  var p = document.getElementById("mydata");

  // set p.innerHTML equal to YES or NO
  var value1 = Math.round(Math.random()*5 + 1); // Math.floor( Math.random() * 7 ); another way of doing it i think
  var value2 = Math.round(Math.random()*5 + 1);

  if(value1 == value2)
  {
    alert("DOUBLES!");
  }

  p.innerHTML = "Dice Rolls are " + " \"" + value1 +  "\"" + " \"" + value2 + "\"";

}
