/* Practice Lab Test #2, Task 2  (version 1)*/
/* EECS1012 - York University  */

/* write your code here */

window.onload = function() {
 $("0").observe("click", numpadting(0));
 $("1").observe("click", numpadting(1));
 $("2").observe("click", numpadting(2));
 $("3").observe("click", numpadting(3));
 $("4").observe("click", numpadting(4));
 $("5").observe("click", numpadting(5));
 $("6").observe("click", numpadting(6));
 $("7").observe("click", numpadting(7));
 $("8").observe("click", numpadting(8));
 $("9").observe("click", numpadting(9));


}

function numpadting(yeet) {

$("entry").innerHTML += yeet;

}
