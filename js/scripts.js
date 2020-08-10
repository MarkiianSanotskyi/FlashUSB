
/*placeholder*/
 $(document).ready(function(){
                $('.paralax-list').viewportChecker({
                    callbackFunction: function(elem, action){   
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
                    }
                });
            });

	$(document).ready(function()
{
    $("#carousel").tinycarousel({
        axis   : "y"
    });
});


$(function(){
$('.parallax-window').parallax({imageSrc: 'images/parallax-bg.jpg'});
		});

	$(document).ready(function(){
        var $menu = $(".top-header");
   $(window).scroll(function(){
            if ( $(this).scrollTop() > 80 && $menu.hasClass("default") ){
        $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 80 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });


(function($) {
		$(function() {
			$('input, select').styler({
				selectSearch: true
			});
		});
		})(jQuery);






$(document).ready(function(){
        $.Placeholder.init({ color : "#999ba2" });
 });



var html = document.documentElement;
var rAF, target = 0, scroll = 0;

onmousewheel = function(e) {
  e.preventDefault();
  var scrollEnd = html.scrollHeight - html.clientHeight;
  target += (e.wheelDelta > 0) ? -120 : 120;
  if (target < 0) target = 0;
  if (target > scrollEnd) target = scrollEnd;
  if (!rAF) rAF = requestAnimationFrame(animate);
};

onscroll = function() {
  if (rAF) return;
  target = pageYOffset || html.scrollTop;
  scroll = target;
};

function animate() {
  scroll += (target - scroll) * 0.06;
  if (Math.abs(scroll.toFixed(5) - target) <= 0.47131) {
    cancelAnimationFrame(rAF);
    rAF = false;
  }
  scrollTo(0, scroll);
  if (rAF) rAF = requestAnimationFrame(animate);
}


		
	
		/*Fancybox*/
$(document).ready(function(){

            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

    $("#fancybox-overlay").fancybox({
        padding: [0, 0, 0, 0],
        margin: [120, 0, 0, 0],
        scrolling: 'visible',
        minWidth: 320,
        minHeight: 309,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: false,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
	
   });
/*Fancybox end*/  

	
		
		//   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");
          
           $("a[href$='.jpg'], a[href$='.png']").each(function() {
      $(this).addClass("fancybox");
       $(this).attr('rel', 'gallery');
     
});

 $(".fancybox").fancybox({
        padding: [0, 0, 0, 0],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
         background:'white',
        maxWidth: 800,
		arrows: false,
        fixed: false,
        autoCenter: false,
     
    });
	
	









