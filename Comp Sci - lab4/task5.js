/* Task5.js - Add your Java Script Code Here */
function myFunction()
{
    var p = document.getElementById("mydata");

  // set p.innerHTML equal to YES or NO
  var days = ["Sun","Mon","Tue","Thur","Fri","Sat"];  //all dem days
  var months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec"];

  var myDate = new Date(); //declares myDate

// my date stuff
  var date = myDate.getDate(); // returns day of the week
  var day = myDate.getDay(); // returns day number and stuffffffffffffffffff
  var year = myDate.getFullYear(); // returns the year
  var month = myDate.getMonth(); // returns the month



  p.innerHTML = "Today is the " + "" + date + " (" + days[day] + ") " + months[month] + " " + year  ;

}
