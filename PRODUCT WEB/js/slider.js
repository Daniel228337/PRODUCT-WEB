$(document).ready(function(){
    $(".slider").slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        slidesToScroll:3,
        speed:1000,
        easing:"ease",
        infinite:true,
        initialSlide:0,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOneFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true,
        swipe:true,
        touchThreshold:10,
        touchMove:true,
        waitForAnimate:true,
        centerMode:false,
        variableWidth:false,
        rows:1,
        slidesPerRow:1,
        vertical:false,
        verticalSwiping:false,
        fade:false,
        mobileFirst:false,
        // asNavFor:".связать слайды",
        // appendArrows:$(".поместить сюда стрелки"),
        // appendDots:$(".Поместить точик"),
        responsive:[
            {
                breakpoint: 1300,
                settings: {
                     slidesToShow:2,
                     slidesToScroll:2,
                }
            },{
                breakpoint: 768,
                settings: {
                     slidesToShow:1,
                     slidesToScroll:1,
                }
            }
        ],

    });

});