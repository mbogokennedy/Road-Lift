$(document).ready(function() {
    $('.dropdown-toggle').mouseover(function() {
        $('.dropdown-menu').show();
    })

    $('.dropdown-toggle').mouseout(function() {
        t = setTimeout(function() {
            $('.dropdown-menu').hide();
        }, 100);
        $('.dropdown-menu').on('mouseenter', function() {
            $('dropdown-menu').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('dropdown-menu').hide();
        })
    })
});

//$("#carouselExampleIndicators").carousel();

// Enable Carousel Indicators
//$(".carousel-item").click(function(){
// $("#carouselExampleIndicators").carousel(1);
//});

// Enable Carousel Controls
//$(".carousel-control-prev").click(function(){
// $("#carouselExampleIndicators").carousel("prev");
//});
//$(".carousel-control-next").click(function(){
//$("#carouselExampleIndicators").carousel("next");
//});