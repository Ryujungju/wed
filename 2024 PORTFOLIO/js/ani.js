 $(function(){
    $(".bx1 .name").animate({bottom:"43%", opacity:1}, 3000, 'easeInOutBack');
    $(".bx1 .name").animate({bottom:"45%", opacity:1}, 3000, 'easeInOutBack');
    $(".bx1 .v1").animate({opacity:1, bottom:0},5000, 'easeOutBounce');
    $(".bx1 .v2").animate({opacity:1, bottom:0},6000, 'easeOutBounce');
    $("#fp-nav ul li a span, .fp-slidesNav ul li a span").animate({opacity:1}, 3000);
    $(".bx1 .name").animate({bottom:"-91%", opacity:1}, 1000, 'easeInOutBack');
    $(".bx1 .v1").delay(995).animate({bottom:"-91%", opacity:1}, 1000, 'easeInOutBack');
    $(".bx1 .v2").delay(10).animate({bottom:"-91%", opacity:1}, 1000, 'easeInOutBack');
    $(".bx1 .c1").delay(7000).animate({bottom:"-750px", opacity:1}, 1500, 'easeOutBounce');
    $(".bx1 .c2").delay(7500).animate({bottom:"-700px", opacity:1}, 1500, 'easeOutBounce');
    $(".bx1 .c3").delay(8000).animate({top:"-100%", opacity:1}, 1500, 'easeOutBounce');
    $(".bx1 .c4").delay(8500).animate({top:"-700px", opacity:1}, 1500, 'easeOutBounce');
    $(".bx1 .c5").delay(9000).animate({bottom:"-700px", opacity:1}, 1500, 'easeOutBounce'); 
    $(".bottom").delay(2000).animate({bottom:"-184%"}, 1000);
    $(".top").delay(2000).animate({top:"-184%"}, 2000);
    $(".me").delay(13000).animate({opacity:1, top:"15%"},2000);
    $(".ts").delay(13000).animate({opacity:1, top:"5%", right:"3%"},2000);
    $(".st").delay(13000).animate({opacity:1, top:"32%"},2000);
    $(".box").delay(13000).animate({opacity:1},2000);
});//end

