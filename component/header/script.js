$('document').ready(()=>{
    a=$('.anchoroffset').offset().top;
    $(window).scroll((event)=>{
        scrolly= $(window).scrollTop();
        if(scrolly>a){
            $('.fixed-list').css('display','block');
        }
        else{
            $('.fixed-list').css('display','none');
        }
    });
    
})