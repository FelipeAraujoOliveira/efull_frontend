document.addEventListener('DOMContentLoaded', function() {
    var divs = document.querySelectorAll('div');
  
    divs.forEach(function(div) {
      div.style.opacity = 0;
      fadeIn(div);
    });
  
    function fadeIn(element) {
      var opacity = 0;
      var interval = setInterval(function() {
        if (opacity < 1) {
          opacity += 0.1;
          element.style.opacity = opacity;
        } else {
          clearInterval(interval);
        }
      }, 10);
    }
  });
  