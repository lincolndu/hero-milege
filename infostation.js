let imageUrl = [
    'asset/Milage_details.png',
    'asset/Braking_details.png',
    'asset/Milage_details.png',
    'asset/Performance_details.png',
];

$('.slide_3').hide();

$('.btn1').click(()=>{
    $('.slide_1').css({'left': 300});
    $('.slide_2').css({'left': 0});
    $('.details').css('background-image', 'url(' + imageUrl[0] + ')');
    setTimeout(()=>{
        leadPage();
    },5e3);
});

$('.btn4').click(()=>{
    $('.slide_1').css({'left': 300});
    $('.slide_2').css({'left': 0});
    $('.details').css('background-image', 'url(' + imageUrl[3] + ')');
    setTimeout(()=>{
        leadPage();
    },5e3);
});

$('.btn3').click(()=>{
    $('.slide_1').css({'left': 300});
    $('.slide_2').css({'left': 0});
    $('.details').css('background-image', 'url(' + imageUrl[2] + ')');
    setTimeout(()=>{
        leadPage();
    },5e3);
});

$('.btn2').click(()=>{
    $('.slide_1').css({'left': 300});
    $('.slide_2').css({'left': 0});
    $('.details').css('background-image', 'url(' + imageUrl[1] + ')');
    setTimeout(()=>{
        leadPage();
        console.log(1);
    },5e3);
});





function leadPage() {
    $('.slide_2').hide();
    $('.slide_3').show();
}