/* Task 1 - write your code here */


function switchroo(imagenum){

var lightstuff = document.getElementById("light");

var images = ["light_1.jpg", "light_2.jpg", "light_3.jpg", "light_4.jpg", "light_5.jpg",]

lightstuff.src = images[imagenum];

}

/*
function pageLoad() {

  var x1 = document.getElementById("button0");
  var x2 = document.getElementById("button1");
  var x3 = document.getElementById("button2");
  var x4 = document.getElementById("button3");
  var x5 = document.getElementById("button4");
  x1.onclick = okayClick1;
  x2.onclick = okayClick2;
  x3.onclick = okayClick3;
  x4.onclick = okayClick4;
  x5.onclick = okayClick5;

}

function okayClick1(); {

  var lightstuff = document.getElementById("Light");
  lightstuff.src = "light_1.jpg";
}
*/

// window.onload = pageLoad;
