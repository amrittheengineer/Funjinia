var activeSlide, currentSlideItem, headerChanger;
const slides = ['DRONE BUILDING',
'CIVIL-TEKLA BULDING STRUCTURE',
'HARDWARE AND ASSEMBLING',
'NETWORKING',
'AUTOMOBILE DESIGNING',
'VEHICLE BUILDING',
'INDUSTRIAL ROBOTICS',
'3D PRINTING & DIGITAL MANUFACTURING'
];
$(window).scroll(function(){
    if(window.pageYOffset >= 452){
        $('.header').addClass('head-fixed');
        $('.header').removeClass('head-scroll');
        
        $('.lwf').hide();
        if((window.pageYOffset+190) >= document.querySelector('.b-report-container').offsetTop && window.pageYOffset <= (document.querySelector('.b-report-container').offsetHeight + document.querySelector('.b-report-container').offsetTop - 190)) {
            $('.title').css('font-size', '2.3rem');
            $('.title').css('font-family', 'Arista');
            $('.title').text('REVIEWS');
            clearInterval(headerChanger);
        }else if ((window.pageYOffset+180) >= document.querySelector('.slide-show-container').offsetTop && window.pageYOffset <= (document.querySelector('.slide-show-container').offsetHeight + document.querySelector('.slide-show-container').offsetTop -230)) {
            clearInterval(headerChanger);
            headerChanger = setInterval(()=>{
                activeSlide = $('.active').index();
                currentSlideItem = slides[activeSlide];
                if (currentSlideItem == slides[7] || currentSlideItem == slides[1] || currentSlideItem == slides[2]) {

                    if ($(window).width() <= 768) {
                        $('.title').css('font-size', '1.15rem');
                    }else{
                        $('.title').css('font-size', '1.8rem');
                    }
                }else{
                    $('.title').css('font-size', '1.8rem');
                }
                $('.title').text(currentSlideItem);
            },100);
        }else if((window.pageYOffset+190) >= document.querySelector('.feedback-container').offsetTop && window.pageYOffset <= (document.querySelector('.feedback-container').offsetHeight + document.querySelector('.feedback-container').offsetTop - 190)) {
            clearInterval(headerChanger);
            $('.title').css('font-size', '1.8rem');
            $('.title').text('Shoot an Email');
        }
        else if((window.pageYOffset+190) >= document.querySelector('.vision-container').offsetTop && window.pageYOffset <= (document.querySelector('.vision-container').offsetHeight + document.querySelector('.vision-container').offsetTop - 190)) {
            clearInterval(headerChanger);
            $('.title').css('font-size', '1.8rem');
            $('.title').text('Our Vision');
        }else{
            clearInterval(headerChanger);
            $('.title').css('font-size', '3.3rem');
            $('.title').text('Funjinia');
        }
    }
    else{
        $('.header').removeClass('head-fixed');
        $('.header').addClass('head-scroll');
        $('.title').css('font-size','5rem');
        $('.title').text('Funjinia');
        $('.lwf').show();
    }
});
var i = 0, j = 0;
const visionMsg = ['"Transforming Lives through Innovative Learning Program"',
'"Industry needs Employable Engineers"',
'"Learn With Fun"',
'"Thrust on Imparting Employablity Skills"'
]
const names = ['Venkata Raghavendra S', 'Hannah Sheba Felix', 'Jacquilin S', 'Roashen Shainey A'],
depts = ['CIVIL ENGINEERING', 'MECHANICAL ENGINEERING', 'ELECTRONICS ENGINEERING', 'ELECTRICAL ENGINEERING'],
reviews = ['I was highly elated when I got the exposure about Civil Engineering at CIT.',
'CIT gave me an oppurtunity to learn more about IOT and Embedded Technology during Funjinia Workshop.',
'Funjinia Transformed me to choose the right career option.',
'Various workshops are organized in Funjinia for the benefit and improvement of the students which renders a vast platform for exposure and more knowledge.'];
window.setInterval(() => {
    $('.b-report').animate({
    opacity: 0
    }, 500, () => {
        ++i;
        if (i >= reviews.length) {
            i = 0;
        }
        $('#b-report-img').css('background-image',`url(0${i}.jpg)`);
        $('.review').text(reviews[i]);
        $('#b-report-name').text(names[i]);
        $('#b-report-dept').text(depts[i]);
        $('.b-report').css('opacity',1);
    });
}, 6000);
window.setInterval(() => {
    $('.vision-msg').animate({opacity: 0}, 1000, () => {
        ++j;
        if (j >= visionMsg.length) {
            j = 0;
        }
        $('.vision-msg').text(visionMsg[j]);
        $('.vision-msg').css('opacity',1);
    });
}, 5000);
