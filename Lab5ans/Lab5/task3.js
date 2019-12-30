/* Task3: write your code here */
window.onload = function() {
  var lines = document.getElementById('poem').getElementsByTagName('p'); // get every elements of <p>
  var meow = document.getElementById('meow'); // meow is the button now

/* The idea behind this is just to save a value of 1 or 0, just like a switch */
  meow.onclick = function(){
    if (parseInt(meow.value) == 0) // Check the value of the button
    {
      for (var i = 0; i < lines.length; i++)
      {
        lines[i].style.backgroundColor = "yellow";
      }
      meow.value = 1; // Save the value of 1 to the button
      meow.innerHTML = "Paw here to unhighlight :\'3c";
    }
    else if (parseInt(meow.value) == 1) // Check the value of the button
    {
      for (var i = 0; i < lines.length; i++)
      {
        lines[i].style.backgroundColor = "transparent";
      }
      meow.value = 0; // Save the value of 0 to the button
      meow.innerHTML = "Paw here to highlight :\'3c";
    }
  }
}
