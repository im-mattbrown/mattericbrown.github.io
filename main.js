console.log("javascript");

$(document).ready( function(){
    var video = $('#video')[0];

    video.currentTime = 0;
    var step = 0.02;

    var scroll = $(window).scrollTop(0);

    $(window).bind('mousewheel', function(event) {

      if (video.currentTime > 0.0 ) {
        $('.down').css("display", "none");
      }
        if (event.originalEvent.wheelDelta < 0) {
          if (video.currentTime < 5.5) {
            video.currentTime += Math.sqrt(window.pageYOffset)/2200;
          } else if (video.currentTime > 5.5 && video.currentTime < 7.5) {
            video.currentTime += Math.sqrt(window.pageYOffset)/3600;
          } else if (video.currentTime > 7.5 && video.currentTime < 11.5) {
            video.currentTime += Math.sqrt(window.pageYOffset)/5000;
          } else {
            video.currentTime += Math.sqrt(window.pageYOffset)/5000;
          }
            console.log(window.pageYOffset);
            console.log(video.currentTime);
            console.log(window.scrollTop);
        } else{
            video.currentTime-=step;
            console.log(video.currentTime);
        }
    });
      $(window).bind('DOMMouseScroll MozMousePixelScroll', function(event) {
        if (video.currentTime > 0.0 ) {
          $('.down').css("display", "none");
        }
          if (event.originalEvent.detail > 0) {
            console.log(video.currentTime);
            if (video.currentTime < 5.5) {
              video.currentTime += Math.sqrt(window.pageYOffset)/2200;
            } else if (video.currentTime > 5.5 && video.currentTime < 7.5) {
              video.currentTime += Math.sqrt(window.pageYOffset)/3600;
            } else if (video.currentTime > 7.5 && video.currentTime < 11.5) {
              video.currentTime += Math.sqrt(window.pageYOffset)/5000;
            } else {
              video.currentTime += Math.sqrt(window.pageYOffset)/5000;
            }
          } else{
              video.currentTime-=step;
              console.log(video.currentTime);
          }
      });
});
