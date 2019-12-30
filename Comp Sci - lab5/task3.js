/* Task3: write your code here */
var a = true; //global var

function pageLoad() {

  var x1 = document.getElementById("highlight1");


  x1.onclick = okayClick1;


}

function okayClick1() {
  var idk = document.getElementsByTagName("p");

    if(a == true){

      for (var i = 0; i < idk.length; i++)
        {
          idk[i].style.backgroundColor = "yellow";
        }

        highlight1.innerHTML = "UNHIGHLIGHTTTT";
        a = false;
    }
  else{
      for (var i = 0; i < idk.length; i++)
      {
        idk[i].style.backgroundColor = "transparent";
      }
      highlight1.innerHTML = "highlight";
      a = true;
    }

}


window.onload = pageLoad;
