$(document).ready(function(){

    let speed = 500; // Fade speed
    let autoswitch = true; // Auto slider options
    let autoswitch_speed = 4000; // Auto slider fade speed

    // Add initial active class
    $('.slide').first().addClass('active');

    // Hide all slides
    $('.slide').hide();

    // show first slider
    $('.active').show();

    // Next handler
    $('#next').on('click', nextSlide);

    // Prev handler
    $('#prev').on('click', prevSlide);

    // Auto slider handler
    if(autoswitch == true){
        setInterval(nextSlide, autoswitch_speed);
    }

    // Switch to next slide

    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child'))
        {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    function prevSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child'))
        {
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});