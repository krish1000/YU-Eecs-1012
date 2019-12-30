/* Lab 6, Task 2.  Use the prototype library */



/*
$("input1").observe("keydown", keyPress(1));
$("input2").observe("keydown", keyPress(2));
$("input3").observe("keydown", keyPress(3));

why can't i do this ^ with this:

function keyPress(num) {

  if (num = 1){
    $("input1").value = "";
    $("input1").stopObserving("keydown");
  } else if (num = 2) {
    $("input2").value = "";
    $("input2").stopObserving("keydown");
  } else {
    $("input3").value = "";
    $("input3").stopObserving("keydown");
  }
}
*/

window.onload = function() {
    $("submitButton").onclick = submitCheck; //submitbutton is id for the submit button ofc, submit check is the function for da ting to check
  //  <input type="text" onfocus="this.value=''">; i have no idea what this is
    $("input1").observe("keydown", keyPress1);
    $("input2").observe("keydown", keyPress2);
    $("input3").observe("keydown", keyPress3);
  //  this.observe("keydown", keyPress); random stuff
}

function keyPress1() {
    $("input1").value = "";
    $("input1").stopObserving("keydown");
}
function keyPress2() {
    $("input2").value = "";
    $("input2").stopObserving("keydown");
}
function keyPress3() {
    $("input3").value = "";
    $("input3").stopObserving("keydown");
}

function submitCheck() {
    if ($("input1").value == "" || $("input2").value == "" || $("input3").value == "") { //all 3 inputs with or statments between em to check if had empty string
      $("ErrorMessage").innerHTML = "One of your fields has an error!"; // alerts user id="ErrorMessage"

      setTimeout(function(){                    //optional thing that makes the error message disappear after 2 seconds
        $("ErrorMessage").innerHTML = "";
      }, 2000);
    }
    else {
      $("myForm").submit(); //submits the form
    }
}
