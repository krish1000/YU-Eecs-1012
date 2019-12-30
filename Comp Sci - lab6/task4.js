/* Lab 6 - Task 4 - Use prototype library. Also, look at the DOM lecture
   to remember how to remove elements  */
/* Provided is simple code to create a box. Modify to create 100 boxes
   at random locations (between 0 and 400) in the container div.

   When a box is clicked, you should delete it from the div.
   When the div has no more children, pop up an alert that says
   "Last one!".

   Also, if the user clicks on the button in the HTML file,  generate
   100 more random oxes. */
window.onload = function()
{
  createBoxes();
document.getElementById("myButton").observe("click", createBoxes);

  //$("container").observe("mouseover", deleteBoxes);

}





/* You are given a simple function that creates a single box at a fixed
   location and with one two color options (red, green). Modify this code
   to create 100 boxes with random locations from randing from top (0 to 400)
   and left (0 to 400). Also, have at least 5 different colors.

  When a mouse is moved over a box, have it delete itself from the container
  div.
*/
function createBoxes(event)
{
  for (var i = 0; i <= 99; i++) {
  var colors = ["red", "green", "silver", "blue", "orange"];

  var newP = document.createElement("p");
  var top = Math.floor(Math.random()*401) + "px";
  var left = Math.floor(Math.random()*401) + "px";
  newP.style.top  = top;
  newP.style.left  = left;
  newP.style.backgroundColor = colors[ Math.floor( Math.random() *5 )];
  /* hint - you can add how to handle the mouse over event before appending
     this element */
  $("container").appendChild(newP);

  newP.onmouseover = function() {
    this.parentNode.removeChild(this);
    if ($("container").children.length == 0) {alert("Last one!");}
  }
}
}
