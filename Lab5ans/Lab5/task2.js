/* write your code here */
window.onload = function(){
    document.getElementsByTagName('h1')[0].innerHTML = "Cat Donut";

    var p = document.getElementById('paragraph');

    /* could have manually added event trigger for every button, but I'd rather
    make this for the sake of customization so that new button can easily be added */

    // So here I sort the buttons into classes
    var buttons = document.getElementById('buttons'); /* This access the "Div" that contains every buttons
                                                        in order to access further to the buttons themselves */
    var colors = buttons.getElementsByClassName('color');
    var font_fam = buttons.getElementsByClassName('font');
    var font_size = buttons.getElementsByClassName('fontsize');

    /* The syntax "this" helps me to access the clicked button and use its value */

    /* creating color buttons effect */

    for (var a = 0; a < colors.length; a++) // Loop through every button with class name "color"
    {
      colors[a].onclick = function(){
        p.style.color = this.value;
      }
    }

    /* creating font family buttons effect */
    for (var a = 0; a < font_fam.length; a++)
    {
      font_fam[a].onclick = function(){
        p.style.fontFamily = this.value;
      }
    }

    /* creating font size buttons effect */
    for (var a = 0; a < font_size.length; a++)
    {
      font_size[a].onclick = function(){
        var font = window.getComputedStyle(p, null).getPropertyValue('font-size');
        p.style.fontSize = (parseInt(font) + parseInt(this.value)) + "px";
      }
    }

    /* This is BONUS TASK */
    document.getElementById('refresh').onclick = function() {
      location.reload();
    }
}
