  /* Practice Lab Test #2, Task 3  */
/* EECS1012 - York University  */

/* write your code here */

window.onload=function() {
 var a = document.getElementById("add");
  var dL = document.getElementById("deleteL");
   var dI = document.getElementById("deleteI");

a.onclick = addfunction;
dL.onclick = yeetyawdeletelast;
dI.onclick = deleteitemhitormiss;


}

function addfunction () {
    var text1 = document.getElementById("input");
    var list1 = document.getElementById("list");

    var listproper = document.createElement("li");

    listproper.innerHTML += text1.value;

    list1.appendChild(listproper);
}

function yeetyawdeletelast () {
  var list1 = document.getElementById("list");
  var listchildren = list1.children;

  //var x = listchildren.length;

  if (listchildren.length > 0)
      {
        list1.removeChild(listchildren[listchildren.length -1]);
      }
}

function deleteitemhitormiss () {
  var list1 = document.getElementById("list");
  var listchildren = list1.children;
  var deleteinp = document.getElementById("delinput");
  var re = /[0-9]/;

  var x= parseInt(deleteinp.value);

    if (re.test(deleteinp.value) == true)
  {

    if (deleteinp.value < (listchildren.length + 1 ))
    list1.removeChild(listchildren[x-1]);

  }

}
