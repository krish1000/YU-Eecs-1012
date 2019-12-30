/* Lab 6 - Task 1 */
/* add your code here. Recommend you use the prototype library */
/* There is a local copy in your folder */
var randomNum = Math.floor(Math.random()*4);
var holdNum = randomNum;

window.onload = function(){
  $("myImg").observe("mouseover", imgSwitch); //myImg is the id for the image thing in the html part, imgSwitch is a random function i made to switch images.

  var imageBox = document.getElementById("myImg");
  var images = ["face1.png", "face2.png", "face3.png", "face4.png",]
  imageBox.src = images[randomNum];

}

function imgSwitch() {
  holdNum = randomNum;
do {
  var imageBox = document.getElementById("myImg");
  var images = ["face1.png", "face2.png", "face3.png", "face4.png",]
  randomNum = Math.floor(Math.random()*4);

  imageBox.src = images[randomNum];
} while (randomNum == holdNum)


}
