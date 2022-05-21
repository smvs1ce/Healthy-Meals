
$(document).ready(function(){
 $('.header').height($(window).height());
 
})

/*header style*/
.header{
    background-image: url('../images/headerback.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
   }

   .overlay{
    position: absolute;
    min-height: 100%;
    min-width: 100%;
    left: 0;
    top: 0;
    background: rgba(244, 244, 244, 0.79);
   }
