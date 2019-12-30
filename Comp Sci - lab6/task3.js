/* Lab 6 - Task 3.  This is related to DOM (not Events), but you can
   still use the prototype library */

window.onload = function() {
  var listDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",];
  var listMonths = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
  var listYears = ["1970",];
  var option= null;

/*
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
*/

  for (var x=1970; x < 2019; x++)
  {
    listYears.push(x);
  }

  for(var i=0; i < listYears.length; i++)
  {
    option = new Option(listYears[i]);
    $("years").appendChild(option);
  }



  for(var i=0; i < listDays.length; i++)
  {
    option = new Option(listDays[i]);
    $("days").appendChild(option);
  }

  for(var i=0; i < listMonths.length; i++)
  {
    option = new Option(listMonths[i]);
    $("months").appendChild(option);
  }


}
/*
  window.onload = function() {
    $("days").observe("onclick", okayClick1);

  }
*/
