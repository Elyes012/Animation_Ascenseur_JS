var pos = 0;




function myMove() {
   var elem = document.getElementById("imagee");
   if (pos <=100) {
       var id = setInterval(frame, 10);

       function frame() {
           if (pos == 100) {
               clearInterval(id);
           } else {
               pos++;
               elem.style.top = pos + 'px';
               //elem.style.left = pos + 'px';
           }
       }
   } else {
       var id = setInterval(frame, 10);

       function frame() {
           if (pos ==+100) {
               clearInterval(id);
           } else {
               pos--;
               elem.style.top = pos + 'px';
               //elem.style.left = pos + 'px';
           }
       }
   }
}

       function myMoveB2() {
           var elem = document.getElementById("imagee");  
          if(pos<=200){
           var id = setInterval(frame, 10);
           function frame() {
             if (pos == 200) {
               clearInterval(id);
             } else {
               pos++;
               elem.style.top = pos + 'px';
               //elem.style.left = pos + 'px';
             }
           }}
           else {
               var id = setInterval(frame, 10);
              function frame() {
                if (pos == 200) {
                  clearInterval(id);
                } else {
                  pos--;
                  elem.style.top = pos + 'px';
                  //elem.style.left = pos + 'px';
                }
              }}
           }
           function myMoveB3() {
               var elem = document.getElementById("imagee");  
              if(pos<=300){
               var id = setInterval(frame, 10);
               function frame() {
                 if (pos == 300) {
                   clearInterval(id);
                 } else {
                   pos++;
                   elem.style.top = pos + 'px';
                   //elem.style.left = pos + 'px';
                 }
               }}
               else {
                   var id = setInterval(frame, 10);
                  function frame() {
                    if (pos == 300) {
                      clearInterval(id);
                    } else {
                      pos--;
                      elem.style.bottom = pos + 'px';
                      //elem.style.left = pos + 'px';
                    }
                  }}}