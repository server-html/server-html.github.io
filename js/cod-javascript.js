$(document).ready(function(){
    function toggleStyle() {
        // Get the DOM reference
        var Classstyle = document.getElementsByClassName("div_my_menu");
        // Toggle 
        Classstyle.style.display == "flex" ?  Classstyle.style.display = "block" : 
        Classstyle.style.display = "flex"; 
      }
    $("button.navbar-toggler").click(function(event){
        
        var div_my_menu = $(".div_my_menu").css('display');
        var telefon1 = $(".telefon1").css('margin-left');
         // Toggle 
        //  console.log(Classstyle);
       var bit;
       if(div_my_menu == "flex"){
        $('.div_my_menu').css('display', 'block') 
        bit=1;
       }
       //Функция задерживающая на 1 сек (1000мсек) возвращение стиля - display: flex;
       else if(bit==0){
        setTimeout( function(){ $('.div_my_menu').css('display', 'flex');},1000);
       }
       bit=0;
        telefon1 == "45px" ?  $('.telefon1').css('margin-left', '0') : $('.margin-left').css('display', '45px'); 
        //  console.log(Classstyle);
        
    })
});

// $( "#clickme" ).click(function() {
//     $( "#book" ).toggle( "slow", function() {
//       // Animation complete.
//     });
//   });

// function toggle_visibility(id) {
//     var e = document.getElementById(id);
//     if(e.style.display == 'block')
//        e.style.display = 'none';
//     else
//        e.style.display = 'block';
//  }