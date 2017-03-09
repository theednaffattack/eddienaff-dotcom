// this is the overflow-x console debugger
$.each( $('*'), function() { 
    if( $(this).width() > $('body').width()) {
        console.log("Wide Element: ", $(this), "Width: ", $(this).width()); 
    } 
});

// the canvas re-sizer is below
// TODO: To remove the horizontal scrollbar:
//       instead of declaring the body overflow-x: hidden;
//       use the mediaMatch method to query the viewport and 
//       remove 15px from the window.innerWidth calculation below
//       for desktop and larger sized viewports
//       That will make the overflow-x console debugger above irrelevant 

(function() {
    var canvas = document.getElementById('headerBackground'),
            context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            // console.log(window.innerWidth);
            canvas.height = document.getElementsByClassName('.jumbotron').innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();

    // make Trianglify re-draw at a set interval
    setInterval(function() {resizeCanvas();}, 15000);

    function drawStuff() {
            // do your drawing stuff here

      // do my Trianglify stuff here
      // copy the current height of the canvas parent
      var canvasHeight = $('.ctrlBckgrnd').height();
      // console.log(canvasHeight);
      
      var pattern = Trianglify({
          width: window.innerWidth, 
          // height: window.innerHeight
          height: canvasHeight,
          // x_colors: 'random'
          x_colors: 'random'
      });
      pattern.canvas(document.getElementById('headerBackground'));

      pattern.canvas(document.getElementById('navbarImage'));
      // $('canvas').attr('width', width);
      // document.body.appendChild(pattern.canvas());

      // end my Trianglify stuff here
    }
})();