$(document).ready(function(){    	if($(window).width()<1210){
        	$('.cat_cost').css({'width':'160px'})
    	}
    	else{
        	$('.cat_cost').css({'width':'220px'})
    	}

 	$('.cat_cnt_inc').click(function(){		if($(this).parent().attr('set_cost')!='ok')
			$(this).parent().attr({'cost': $(this).parent().parent().children('span').html() ,'set_cost':'ok'})


		$(this).parent().children('input').val(parseInt($(this).parent().children('input').val())+1)
		$(this).parent().parent().children('span').html(parseInt($(this).parent().attr('cost'))*parseInt($(this).parent().children('input').val()))

		if(parseInt($(this).parent().children('input').val()) >= 10)
          $(this).parent().children('input').css({'width':'18px'})
		else
		  $(this).parent().children('input').css({'width':'10px'})

 	})

 	$('.cat_cnt_dec').click(function(){
		if($(this).parent().attr('set_cost')!='ok')
			$(this).parent().attr({'cost': $(this).parent().parent().children('span').html() ,'set_cost':'ok'})

        if(parseInt($(this).parent().children('input').val()) >= 2)
			$(this).parent().children('input').val(parseInt($(this).parent().children('input').val())-1)

		$(this).parent().parent().children('span').html(parseInt($(this).parent().attr('cost'))*parseInt($(this).parent().children('input').val()))

		if(parseInt($(this).parent().children('input').val()) >= 10)
          $(this).parent().children('input').css({'width':'18px'})
		else
		  $(this).parent().children('input').css({'width':'10px'})
 	})

    $( window ).resize(function() {
    	if($(window).width()<1210){        	$('.cat_cost').css({'width':'160px'})
    	}
    	else{        	$('.cat_cost').css({'width':'220px'})
    	}
    });

});

