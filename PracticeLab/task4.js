/* Practice Lab Test #2, Task 4 */
/* EECS1012 - York University  */

/* write your code here */
/* Array of image names is aleady provided for you */
var images=["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png"];
var i = 0;
var j = 0;
var x = null;
var y = null;

window.onload = function () {
  var spinB = document.getElementById("bar");
  spinB.observe("mouseover", spin2win);
  spinB.observe("mouseout", yeetyawout);


}

function spin2win () {
  var spinB = document.getElementById("bar");
  spinB.style.backgroundColor= "grey";

//var zzzzzzz
   x = setInterval(changeImg1,75);
   y = setInterval(changeImg2,50);


}

function changeImg1 () {
 i++;
if (i>7) i=0;

var img1 = document.getElementById("img1");
img1.src = images[i];

}

function changeImg2 () {
j++;
if (j>7) j=0;

var img2 = document.getElementById("img2");
img2.src = images[j];

}


function yeetyawout () {
  var spinB = document.getElementById("bar");
  spinB.style.backgroundColor= "white";

  clearInterval(x);
  clearInterval(y);

}
