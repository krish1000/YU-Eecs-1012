/* write your code here */

function pageLoad() {

  var x1 = document.getElementById("b1");
  var x2 = document.getElementById("b2");
  var x3 = document.getElementById("b3");
  var x4 = document.getElementById("b4");
  var x5 = document.getElementById("b5");
  var x6 = document.getElementById("b6");
  var x7 = document.getElementById("b7");

  x1.onclick = okayClick1;
  x2.onclick = okayClick2;
  x3.onclick = okayClick3;
  x4.onclick = okayClick4;
  x5.onclick = okayClick5;
  x6.onclick = okayClick6;
  x7.onclick = okayClick7;

}

function okayClick1() {

  var idk = document.getElementById("paragraph");

  idk.style.color="green";
}

function okayClick2() {

  var idk = document.getElementById("paragraph");

  idk.style.color="blue";
}

function okayClick3() {

  var idk = document.getElementById("paragraph");

  idk.style.fontFamily="monoSpace";
}

function okayClick4() {

  var idk = document.getElementById("paragraph");

  idk.style.fontFamily="sans-serif"; }

function okayClick5() {

  var idk = document.getElementById("paragraph");

  idk.style.fontFamily="serif";
}


 var x = 12;
function okayClick6() {

  var idk = document.getElementById("paragraph");
/*
  parseInt(x);
  var x = x + 1;
  String(x);
  */
  x ++;
  idk.style.fontSize= (x) + "pt";
}
function okayClick7() {

  var idk = document.getElementById("paragraph");

  x --;
  idk.style.fontSize= (x) + "pt";
}


window.onload = pageLoad;
