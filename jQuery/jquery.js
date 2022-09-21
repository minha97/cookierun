$(function(){

    // ------ main characters ------

    $(".mainLeft>li").on("click",function(){
        let i = $(this).index();
        console.log(i);
        $(".mainLeft>li img").css({
            "opacity":"0.4"
        })
        $(this).find("img").css({
            "opacity":"1"
        })
        $(".mainMiddle>li").stop().fadeOut(500);
        $(".mainMiddle>li").eq(i).stop().fadeIn(500);
        $(".mainRight>li").stop().fadeOut(500);
        $(".mainRight>li").eq(i).stop().fadeIn(500);
    })


    // ---- ham ----

        //    var count = 0;

        $(".ham").on("click", function(){
            $(this).children().toggleClass("active")
        });
    
        var button = false;
        $(".ham").on("click", function () {
            if (button == false) { //button = X
                // console.log("클릭")
                $(".ham_bg").css("display", "block");
                $(".headBottom").css("display","block")
                $(".rightGnb>li>a").css("color","white")
                $("#nav").stop().animate({
                    top: 98
                }, 300)
                button = true;
            }
            else { //button = ham
                $(".ham_bg").css("display", "none");
                $(".headBottom").css("display","none")
                $("#nav").stop().animate({
                    top: -1000 + "%"
                }, 500)
                button = false;
            }
    
        });
        $(window).on('resize', function(){
            console.log(button);

            if(button == false) {
                if (window.innerWidth > 767) {
                    $(".headBottom").css("display","block");
                    $(".rightGnb>li>a").css("color","black");
                } else {
                    $(".headBottom").css("display","none");
                }
            }
        });
})