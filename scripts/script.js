// Back to Top arrow
$(document).ready(function(){
    const currentYear = (new Date()).getFullYear();
    const footerEl = $('#currentYear').text(currentYear);

    // baguettebox gallery
    baguetteBox.run('.gallery');

    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    // Sorting nav
    $(".sorting_nav a").click(function(){
      // 1. store data-type attribute
      var chosenItem = $(this).attr("data-type");

      // 2. hide all matched elements
       $(".project_intro").hide();

      // 3. if 'color' is not defined hide/show all elements ("show all" button), if color IS defined show elemtnts that match color variable
      (!chosenItem) ? $(".project_intro").hide().fadeIn(625) : $('div[data-type="' + chosenItem + '"]').fadeIn(625);

      // classes for nav buttons
      $('.selected').removeClass('selected');
      $(this).addClass('selected');
    });


    // remove hover sign
    $(".email").mouseover(function(){
      var hoveredEl = $(this).find(".hover_sign");
      hoveredEl.animate({right: "-350px"}, 800);
    });

    $(".email").mouseout(function(){
      var hoveredEl = $(this).find(".hover_sign");
      hoveredEl.animate({right: "0px"}, 600);
    });
});
