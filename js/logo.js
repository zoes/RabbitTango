      // START: setup
      var drawLogo = function(lcolr, canvas){
        var context = canvas.getContext('2d');
        // END: setup
        
        //START:fill
          context.fillStyle = lcolr;
          context.strokeStyle = lcolr;
        //END:fill
          
              
         // START: logo
         context.setTransform(1,  0, 0, 1, 0, 0);
         context.clearRect(0, 0, canvas.width, canvas.height);
         context.translate(20,60);
         context.fillRect(0,0,20,20); 
         context.translate(40, -10);
         context.fillRect(0, 0, 30, 30);
         context.translate(50, -10);
         context.fillRect(0, 0, 40, 40);
         // END: logo
        
      // START: setup
     };
     //END:setup
     //START:detect_canvas
     /*
     $(function(){
       var canvas = document.getElementById('logo');
       if (canvas.getContext){
         drawLogo("#000");
       }
     });
     */
     //END:detect_canvas

