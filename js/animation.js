


$(function() {


    var titles = ["Creative","Leader","Developer" , "Artist", "Writer", "Photographer","Human","Witch", ];
    var currentPos = 0;
    $('#animated_banner').text(titles[currentPos])

    function loop(){
      currentPos = (currentPos + 1 ) % titles.length
      setTimeout(function(){
        $('#animated_banner').fadeOut(1, function() {
            $(this).text(titles[currentPos]).fadeIn(1, loop);
        });
      }, 500s);

     }

     loop();

});
