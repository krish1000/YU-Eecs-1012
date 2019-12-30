/* Task 1 - write your code here */
window.onload = function()
{
  document.getElementsByTagName('h1')[0].innerHTML = "Cat Donut";
}

var modes = ["light_1.jpg", "light_2.jpg", "light_3.jpg", "light_4.jpg", "light_5.jpg"]
function myFunction(n)
{
  document.getElementById('light').src = modes[n-1]; //change the image's source

  // This is the BONUS TASK
  var box_children = document.getElementById('box').getElementsByTagName('button');
  for (var i = 0; i < box_children.length; i++)
  {
    box_children[i].innerHTML = "OFF";
  }
  box_children[n-1].innerHTML = "ON";
}
