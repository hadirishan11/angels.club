$(document).ready(function(){

  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

//I'm adding this section so I don't have to keep updating this pen every year :-)
//remove this if you don't need it
let today = new Date(),
dd = String(today.getDate()).padStart(2, "0"),
mm = String(today.getMonth() + 1).padStart(2, "0"),
yyyy = today.getFullYear(),
nextYear = yyyy + 1,
dayMonth = "09/30/",
birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
birthday = dayMonth + nextYear;
}
//end

const countDown = new Date(birthday).getTime(),
x = setInterval(function() {    

  const now = new Date().getTime(),
        distance = countDown - now;

  document.getElementById("days").innerText = Math.floor(distance / (day)),
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

  //do something later when date is reached
  if (distance < 0) {
    document.getElementById("headline").innerText = "It's my birthday!";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";
    clearInterval(x);
  }
  //seconds
}, 0)

    // Add black background to navbar 
    $(".navbar-toggler").click(function () {
      $("nav").toggleClass("nav-bg");
    });
    
     // Auto Hide navbar when click on menu item 
     $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
    });
     
      // Toggle navbar toggler button 
      $(".navbar-toggler").click(function() {
        $(".navbar-toggler-icon").toggleClass("active");
      });
      
      //Add a minus icon to the collapse element that is open by default
      $('.collapse.show').each(function(){
        $(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
      });
      
      //Toggle plus/minus icon on show/hide of collapse element
      $('.collapse').on('shown.bs.collapse', function(){
        // 	$(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
        // }).on('hidden.bs.collapse', function(){
        // 	$(this).parent().find(".fa").removeClass("fa-minus").addClass("fa-plus");
        // });       
    });
    
    
    
    
    // add bg color on scroll event 
    $(function () {
      $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });
    
    
    
    // handle links with @href started with '#' only
    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');
    
        // target element
        var $id = $(id);
        if ($id.length === 0) {
          return;
        }
    
        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();
    
        // top position relative to the document
        pos = $id.offset().top-110;
    
        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
      });
    
      //Add a minus icon to the collapse element that is open by default
        // $('.collapse.show').each(function(){
        // $(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
        // });
          
      //Toggle plus/minus icon on show/hide of collapse element
      $('.collapse').on('shown.bs.collapse', function(){
        console.log($(this).parent());
        $(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
      }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".fa").removeClass("fa-minus").addClass("fa-plus");
      });    

    });

    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
          dd = String(today.getDate()).padStart(2, "0"),
          mm = String(today.getMonth() + 1).padStart(2, "0"),
          yyyy = today.getFullYear(),
          nextYear = yyyy + 1,
          dayMonth = "09/30/",
          birthday = dayMonth + yyyy;
      
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end
      
      const countDown = new Date(birthday).getTime(),
          x = setInterval(function() {    
    
            const now = new Date().getTime(),
                  distance = countDown - now;
    
            document.getElementById("days").innerText = Math.floor(distance / (day)),
              document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
            //do something later when date is reached
            if (distance < 0) {
              document.getElementById("headline").innerText = "It's my birthday!";
              document.getElementById("countdown").style.display = "none";
              document.getElementById("content").style.display = "block";
              clearInterval(x);
            }
            //seconds
          }, 0)
      }());