/* Task 4 code here */
window.onload = function() {
  var input = document.getElementById('input');
  var text_input = input.value;
  var result = document.getElementById('output');

  /* button to add paragraphs */
  document.getElementById('add').onclick = function() {
    if (input.value.length == 0) // Check if the input is empty
    {
      alert("Please don't leave it empty meow 'OwO'");
    }
    else
    {
      var new_paragraph = document.createElement("p");
      new_paragraph.innerHTML = input.value;
      result.appendChild(new_paragraph);
      input.value = ""; /* Uh, this line's purpose is just to clear the text after you add the paragraph
                            isn't required */
    }
  }

  /* button to delete top paragraphs */
  document.getElementById('delete_top').onclick = function() {
    var paragraph = result.getElementsByTagName('p');
    var p_number = paragraph.length;
    if (p_number == 0)
    {
      alert('There is nothing left for you to ERASE!! >:3');
    }
    else
    {
      result.removeChild(paragraph[0]);
    }
  }

  /* button to delete bottom paragraphs */
  document.getElementById('delete_bottom').onclick = function() {
    var paragraph = result.getElementsByTagName('p');
    var p_number = paragraph.length;
    if (p_number == 0)
    {
      alert('There is nothing left for you to ERASE!! >:3');
    }
    else
    {
      result.removeChild(paragraph[p_number - 1]);
    }
  }
}
