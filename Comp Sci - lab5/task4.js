/* Task 4 code here */

function pageLoad() {

  var x1 = document.getElementById("add");
  var x2 = document.getElementById("delete");

  x1.onclick = okayClick1;
  x2.onclick = okayClick2;

}

function okayClick1()
{
  var textadd = document.getElementById("input");
  var textlist = document.getElementById("output");


  if (textadd.value != "") /* if text input value isn't empty */
    {
    var addp = document.createElement("p");
    addp.innerHTML = textadd.value; /* set the innerHTML to the text input value */
    textlist.appendChild(addp); /* add this to the DOM tree */
    /* by appending to the list object */
    }
}

function okayClick2()
{
  var textlist = document.getElementById("output"); /* get list element */
  var minusp = textlist.getElementsByTagName("p");
  if (minusp.length > 0)
    {
    textlist.removeChild(minusp[0]); /* remove the first */
  } else {
    alert("asdf you got no more paragraphszz");
  }
}

window.onload = pageLoad;
