$(document).ready(function(){
    $('#num0').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<span>&#x3008;</span>','<span>&#x3009;</span>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    })
    $('#num1').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        center:true,
        navText:['<span>&#x3008;</span>','<span>&#x3009;</span>'],
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
    $('#num2').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        center:true,
        navText:['<span>&#x3008;</span>','<span>&#x3009;</span>'],
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('#num3').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        center:true,
        navText:['<span>&#x3008;</span>','<span>&#x3009;</span>'],
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });



    
    windowSize = $(window).width();
    setHeight();
    $(window).resize(function() {
        windowSize = $(window).width();
        setHeight();
    });
    
    function setHeight(){
        if(windowSize<=991){
            temp = $('#num1 .center').height();
            temp*=2;
            temp+='px';
            $('#num1').css('height',temp);
            $('#changeContainer').removeClass('container');
            $('#changeContainer').addClass('container-fluid');
        }else{
            temp = $('#num1 .center').height();
            temp+='px';
            $('#num1').css('height',temp);
            $('#changeContainer').removeClass('container-fluid');
            $('#changeContainer').addClass('container');
        }
    }

    $('.slider-2').each(function(index, element){
        temp2 = $(element).find('.center');
        
        //temp2 = $('#num2 .center');
        temp3 = temp2.height();
        
        temp3 *= 2;
        temp3 += 'px';
        $(element).find('.owl-carousel').css('height',temp3);
    });
    

    // temp2 = $('#num2 .center');
    // temp3=temp2.height();
    // temp3*=2;
    // temp3+='px';
    // $('#num2').css('height',temp3);
    


    a = $('.center').prev();
    b = $(a).find('img');
    $('#num2 img').removeClass('c-scale');
    $(b[1]).addClass('c-scale'); 
    $(b[2]).addClass('c-scale'); 


    flag  = 0 ;
    $('#num2').mousedown((event)=>{
        flag=1;
    });
    $('#num3').mousedown((event)=>{
        flag=2;
    });
    $(window).mouseup((event)=>{
        if(flag==1){
            //$('.center').prev().find('img').addClass('c-scale');
            a = $('.center').prev();
            b = $(a).find('img');
            $('#num2 img').removeClass('c-scale');
            $(b[1]).addClass('c-scale');        
        }
        if(flag==2){
            //$('.center').prev().find('img').addClass('c-scale');
            a = $('.center').prev();
            b = $(a).find('img');
            $('#num3 img').removeClass('c-scale');
            $(b[2]).addClass('c-scale');    
            console.log(b);    
        }
        flag=0;
        
    });



});
