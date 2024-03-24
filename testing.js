
document.addEventListener('DOMContentLoaded', function () {
     alert("Hello! I am from TimberChiropractic");
     var target = document.getElementById("jstarget");
     target.onclick = function() {
        var randomColor = getRandomColor();
        target.style.backgroundColor = randomColor;
    };
   });

   function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }