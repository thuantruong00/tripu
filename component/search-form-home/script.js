$(document).ready(function(){
    $('#wrap-form-opt-room .dom-click').each(function(index,element){
        $(element).click(function(){
                v=$(this).find('.i-user').attr('value');
                // console.log(v);  
                u=$(this).find('.i-room').attr('value');
                $('#result-select .num-user').text(v);
                $('#result-select .num-room').text(u);
            
        });
    });

    $('.dropdownMenuLink').each(function(index,element){
        $(element).click(function(event){
            q=$('.my-toggle');
            $(q[index]).toggleClass('d-none');
        });
    });

    $('.down').click(function(){
        printnum = $(this).next('.num-result').attr('value');
        direct= '#result-select';
        direct +=' '+ $(this).next('.num-result').attr('direct');
        printnum--;
        
        if(direct=="#result-select .num-child"){
            if(printnum<=0){
                printnum=0;
            }
        }else{
            printnum = (printnum<=1)?1:printnum;
        }
        $(direct).text(printnum);
        $(this).next('.num-result').attr('value',printnum);
        $(this).next('.num-result').text(printnum);
    });
    $('.up').click(function(){
        printnum = $(this).prev('span').prev('.num-result').attr('value');
        direct= '#result-select';
        direct +=' '+ $(this).prev('span').prev('.num-result').attr('direct');
        printnum++;
        if(direct=="#result-select .num-child"){
            $('.num-childs').text(' trẻ em');
        }
        $(direct).text(printnum);
        $(this).prev('span').prev('.num-result').attr('value',printnum);
        $(this).prev('span').prev('.num-result').text(printnum);
    });
})
