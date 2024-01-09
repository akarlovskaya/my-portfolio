$(document).ready(function(){
// first a letter
        var myPath = document.getElementById("a_path01"),
            segment1 = new Segment(myPath);

            segment1.draw("100%", "-10", 1, {delay: 0.5});

        var myPath2 = document.getElementById("a_path02"),
            segment2 = new Segment(myPath2);

            segment2.draw("100%", "-10", 1, {delay: 0.5});

        var myPath3 = document.getElementById("a_path03"),
            segment3 = new Segment(myPath3);

            segment3.draw("100%", "-10", 1, {delay: 0.5});

// first n letter

        var myPath3 = document.getElementById("n_path01"),
            segment1 = new Segment(myPath3);

            segment1.draw("100%", "-10", 1, {delay: 0.5});

        var myPath4 = document.getElementById("n_path02"),
            segment2 = new Segment(myPath4);

            segment2.draw("100%", "-10", 1, {delay: 0.5});

// second n letter

        var myPath3 = document.getElementById("n2_path01"),
            segment1 = new Segment(myPath3);

            segment1.draw("98%", "-10", 1, {delay: 0.5});

        var myPath4 = document.getElementById("n2_path02"),
            segment2 = new Segment(myPath4);

            segment2.draw("98%", "-10", 1, {delay: 0.5});

// last a letter

        var myPath3 = document.getElementById("a2_path01"),
            segment1 = new Segment(myPath3);

            segment1.draw("100%", "-10", 1, {delay: 0.5});

        var myPath4 = document.getElementById("a2_path02"),
            segment2 = new Segment(myPath4);

            segment2.draw("100%", "-10", 1, {delay: 0.5});

        var myPath5 = document.getElementById("a2_path03"),
            segment3 = new Segment(myPath5);

            segment3.draw("100%", "-10", 1, {delay: 0.5});


// ampresand and s letter animation
    window.setTimeout(function(){

        $('.s_letter').removeClass('hidden').addClass('bounceInRight');
        $('.amp').removeClass('hidden').addClass('bounceInDown');
        }, 1500);
});