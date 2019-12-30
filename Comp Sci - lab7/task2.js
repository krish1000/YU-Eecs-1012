/* Lab 6 - Task 2  */
 window.onload = function() {

  /* Please have a look at the HTML file for the ids of the input elements */
  /* add in your event handlers here */
  /* you are highly encourage to look at the lecture notes and code on JS and Forms */

  $("userid").observe("keyup", myFunction1);
  $("code").observe("keyup", myFunction2);
  $("number").observe("keyup", myFunction3);
  $("submitButton").observe("click", submit1);
  $("clear").observe("click", clear1);

}

function myFunction1() {
  /* Put in the correct regular expression below */
  var re = /^[a-z]*[a-z0-9]+$/i;
 var testString = $("userid").value;

  var x = document.getElementsByClassName("message");

  if (re.test(testString) == true)
  {
//$("userid").nextElementSibling.innerHTML = "CORRECT";
  x.value = "CORrectttoo";
  }
  else {

  x.value = "nooooo";
  }
}

function myFunction2() {
  /* Put in the correct regular expression below */
  var re = ["EECS", "ESSE", "MATH", "HIST", "CHEM", "BIO"]
  var testString = $("code").value;

  if (re.includes(testString) == true)
  {
    $("code").nextElementSibling.innerHTML = "CORRECT";
  }
  else {
    $("code").nextElementSibling.innerHTML = "INCORRECT";
  }
}

function myFunction3() {
  /* Put in the correct regular expression below */
  var re = /^[0-9][0-9][0-9][0-9]$/;
  var testString = $("number").value;

  if (re.test (testString) == true)
  {
    $("number").nextElementSibling.innerHTML = "CORRECT";
  }
  else {
    $("number").nextElementSibling.innerHTML = "INCORRECT";
  }
}

function submit1() {
  if ( ($("userid").nextElementSibling.innerHTML =="CORRECT") && ($("code").nextElementSibling.innerHTML =="CORRECT") && ($("number").nextElementSibling.innerHTML =="CORRECT") ) { //all 3 inputs with or statments between em to check if had empty string
  $("myForm").submit();
  }
  else {
    alert("Form is incorrect!!!"); // alerts user id="ErrorMessage"
  }
}

/*
function submit1() {
  if (document.getElementsByClassName('message') = "CORRECT" ) { //all 3 inputs with or statments between em to check if had empty string
  $("myForm").submit();
  }
  else if  ( ($("userid").nextElementSibling.innerHTML ="INCORRECT") || ($("code").nextElementSibling.innerHTML ="INCORRECT") || ($("number").nextElementSibling.innerHTML ="INCORRECT") ) {
    alert("someting is wrong idk"); // alerts user id="ErrorMessage"
  }
}
*/
function clear1() {

  $("number").nextElementSibling.innerHTML = "";
    $("code").nextElementSibling.innerHTML = "";
      $("userid").nextElementSibling.innerHTML = "";

}
