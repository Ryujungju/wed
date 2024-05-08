$().ready(function(){
    var ht=$(window).height()
        $("section").height(ht)

    $(window).on("resize",function(){
        var ht=$(window).height()
        $("section").height(ht)
    })//.on resize end
    $("section").on("mousemove",function(e){
        var posX=e.pageX;
        var posY=e.pageY;
        $(".p11").css({left:40-(posX/30), bottom:40-(posY/30)})
        $(".p21").css({left:20-(posX/40), bottom:0-(posY/40)})
        $(".p31").css({left:0-(posX/30), bottom:40-(posY/30)})
        $(".p41").css({left:0-(posX/30), bottom:20-(posY/30)})
    })//section .on mousemove end
    
    $(".list li").on("click",function(e){
        e.preventDefault()
        var ht=$(window).height()
        var i=$(this).index()
        var nowTop=i*ht;
        $("html,body").stop().animate({"scrollTop":nowTop},1400)
    })// list li .on click end
    $(window).on("scroll",function(){
        var ht=$(window).height()
        var scroll=$(window).scrollTop()
    })//window .on scroll end
    for(var i=0; i<5; i++){
        if(scroll>=ht*i && scroll<ht*(i+1)){
            $(".list li").removeClass("on")
            $(".list li").eq(i).addClass("on")
        }//if end
    }//for end
    $("section").on("mousewheel",function(event,delta){
        if(delta>0){
            var prev=$(this).prev().offset().top
            $("html, body").stop().animate({"scrollTop":prev},1400,"easeOutBounce")
        }//if delta>0 end
        else if(delta<0){
            var next=$(this).next().offset().top
            $("html, body").stop().animate({"scrollTop":next},1400,"easeOutBounce")
        }//else if delta<0 end
    })// section .on mousewheel event delta end
})//end