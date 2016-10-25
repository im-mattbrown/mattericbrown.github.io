$(window).on('load', function(){
    var vid = $('#video')[0];

    video.currentTime = 0;
    var step = 0.02;

    var scroll = $(window).scrollTop(0);

    $(window).bind('mousewheel', function(event) {
      console.log(scroll);
      if (video.currentTime > 0.0 ) {
        $('.down').css("display", "none");
      }
        if (event.originalEvent.wheelDelta < 0) {
          if (video.currentTime < 4.0) {
            video.currentTime += Math.sqrt(window.pageYOffset)/2200;
          } else if (video.currentTime > 4.0 && video.currentTime < 7.5) {
            video.currentTime += Math.sqrt(window.pageYOffset)/3600;
          } else if (video.currentTime > 7.5 && video.currentTime < 11.5) {
            video.currentTime += Math.sqrt(window.pageYOffset)/5000;
          } else {
            video.currentTime += Math.sqrt(window.pageYOffset)/5000;
          }
            console.log(window.pageYOffset);
            console.log(video.currentTime);
            console.log(event.originalEvent.wheelDelta);
        } else{
            video.currentTime-=step;
            console.log(video.currentTime);
        }
    });
});
