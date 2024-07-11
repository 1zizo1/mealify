// let aboutOffset=$('#about').offset().top
// $(window).scroll(function(){
//     console.log(scrollValue);
//     if(scrollValue > aboutOffset){
//         $('.nav').css('background','rgba(0,0,0,0.8)')
//     }else{
//         $('.nav').css('background','transperant')

//     }
// })
$('a').click(function(){
    let currLink=$(this).attr('herf')//#home https
    console.log(currLink);
    let secOffset=$(currLink).offset().top
    $('body , html').animate({scrollTop:secOffset},1000)
})
