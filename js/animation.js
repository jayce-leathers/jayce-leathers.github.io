


$(function() {


    var titles = ["Programmer" , "Artist", "Writer"];
    var currentPos = 0;
    $('#animated_banner').text(titles[currentPos])

    function loop(){
      currentPos = (currentPos + 1 ) % titles.length
      $('#animated_banner').fadeOut(1, function() {
          $(this).text(titles[currentPos]).fadeIn(2000, loop);
      });
     }

     loop();

});
