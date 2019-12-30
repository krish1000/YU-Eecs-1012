/* EECS1012 - Practice Lab Test #2 */
/*
cardId
countryCode
amount

*/

//a.style.backgroundColor="yellow";
//$("id").observe("event", functionName);
 window.onload = function() {
   $("cardId").observe("keyup", card1);
  $("countryCode").observe("keyup", country1);
  $("amount").observe("keyup", amount1);
  $("submitButton").observe("click", submit1);

    //*************************************************//
      $("cardId").style.backgroundColor="mistyrose";
        $("countryCode").style.backgroundColor="mistyrose";
          $("amount").style.backgroundColor="mistyrose";

}

function card1() {
var re = /^[AC][0-9][0-9][0-9][0-9][A-Z]$/;

  if (re.test($("cardId").value) == true){

  $("cardId").style.backgroundColor="lightblue";
  } else {
  $("cardId").style.backgroundColor="mistyrose";
  }
}

function country1() {
var re= ["CAN","MEX","USA", "EUR", "OTHER",];

if (re.includes($("countryCode").value) == true){
  $("countryCode").style.backgroundColor="lightblue";
  } else {
  $("countryCode").style.backgroundColor="mistyrose";
  }
}

function amount1() {
var re= /^[$][0-9.]+$/;
var re1= /^[$][0-9]+[.][0-9]+$/;

if (re.test($("amount").value) == true || re1.test($("amount").value) == true){
  $("amount").style.backgroundColor="lightblue";
  } else {
  $("amount").style.backgroundColor="mistyrose";
  }
}

function submit1() {
 if(($("cardId").style.backgroundColor =="lightblue") && ($("countryCode").style.backgroundColor =="lightblue") && ($("amount"  ).style.backgroundColor =="lightblue")) {
  //$("myForm").submit();
  $("submitButton").style.backgroundColor="lightblue";
} else {
  $("submitButton").style.backgroundColor="mistyrose";
}

}
