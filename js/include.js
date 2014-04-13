// This file contains code that needs to be present on all pages
$(document).ready(function() {
  
/************** Content Loader  *********************/
  $("body").queryLoader2();

  $(".main").onepage_scroll({
        sectionContainer: "section",
        animationTime: 1500,
        responsiveFallback: 600,
        loop: true,
        pagination: true,
        easing: "ease-in-out"
      });
});


  // Viewport fixes
  $(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
      var ww = ( $(window).width() < window.screen.width ) ? $(window).width() : window.screen.width; //get proper width
      var mw = 320; // min width of site
      var ratio =  ww / mw; //calculate ratio
      if( ww < mw){ //smaller than minimum size
       $('#Viewport').attr('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=yes, width=' + ww);
      }else{ //regular size
       $('#Viewport').attr('content', 'initial-scale=1.0, maximum-scale=2, minimum-scale=1.0, user-scalable=yes, width=' + ww);
      }
    }
  });

  // Google Analytics

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48600212-1', 'iryanclarke.com');
  ga('send', 'pageview');
