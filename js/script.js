// nav-part start
$(window).scroll(function(){
    if($(window).scrollTop() > 200){
        $(".menu").addClass("fixedmenu")
    }else{
        $(".menu").removeClass("fixedmenu")
    }
})

// nav-part end


// banner-part start
$(".banner-slider").slick({
    arrows:false,
    fade:true,
})
// banner-part end


// nav-part start
$(".dropdown").click(function(){
    $(".drop").toggleClass('drop2')
})
// nav-part end

// breed-part start
$('.breed-slider').slick({
    slidesToShow:2,
    nextArrow:false,
    prevArrow:false,
})
// breed-part end

// history-part start
new VenoBox({
    selector: '.my-video-links',
});

$('.bottom-slider').slick({
    arrows:false,
    slidesToShow:6,
    autoplay:true,
})
// history-part end
// testimonial-part end

$('.testimonial-slider').slick({
    slidesToShow:2,
    slidesToScroll: 2,
    dots:true,
    speed: 2000,
    arrows:false,
})

// testimonial-part end