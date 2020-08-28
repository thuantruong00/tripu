$(document).ready(()=>{
    $('#category').click(()=>{
        $('.toggle-icon').toggleClass('angle-up');
        $('.style-category').toggle();
        $('.style-category-mb').toggle();
    });
    $('.sub-menu-mb').each((index,element)=>{
        $(element).click(()=>{
            resultx='#ss'+index;
            $(resultx).toggle();
        });
    });
    $('.sub-menu-mbx').each((index,element)=>{
        $(element).click(()=>{
            resultx='#ss'+index;
            $(resultx).toggle();
        });
    });

    $('#btn-cart').click(()=>{
        $('#block-cart').toggle();
    });

});