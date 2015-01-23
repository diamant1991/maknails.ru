$(document).ready(function(){    $('#top_navigation').children('li').last().removeClass('top_navigation').addClass('top_navigation_last');
    $('#top_navigation').children('li').last().children('a').css({'color':'#a49fa0'})
    $('#colors').children('li').click(function(){   	if($(this).attr('active')=='1'){   		$(this).attr({'active':'0'});
   		$(this).removeClass('colors_active').addClass('colors_unactive');
   		catalog_recalc()
   	}
   	else{   		$(this).attr({'active':'1'});
   		$(this).removeClass('colors_unactive').addClass('colors_active');
   		catalog_recalc()
	}
   })

   $('#effects').children('li').hover(function(){        $(this).prepend($('#colors_marker'))
        $('#colors_marker').css({'display':'block','width':'auto'})
        $('#colors_marker').html($(this).attr('alt'))
        width=$('#colors_marker').css('width')
        width=width.split('px')[0]
        offset=Math.round(width/2)
        $('#colors_marker').css({'margin-left':'-'+offset+'px'})   },function(){    	$('#colors_marker').css({'display':'none'})   })


   $('#colors').children('li').hover(function(){
        $(this).prepend($('#colors_marker'))
        $('#colors_marker').css({'display':'block','width':'auto'})
        $('#colors_marker').html($(this).attr('alt'))
        width=$('#colors_marker').css('width')
        width=width.split('px')[0]
        offset=Math.round(width/2)
        $('#colors_marker').css({'margin-left':'-'+offset+'px'})
   },function(){
    	$('#colors_marker').css({'display':'none'})
   })









   $('#effects').children('li').click(function(){
   	if($(this).attr('active')=='1'){
   		$(this).attr({'active':'0'});
   		$(this).removeClass('colors_active').addClass('colors_unactive');
   		catalog_recalc()
   	}
   	else{
   		$(this).attr({'active':'1'});
   		$(this).removeClass('colors_unactive').addClass('colors_active');
   		catalog_recalc()
	}
   })

   $('#type').children('li').children('a').click(function(){
   	if($(this).parent().attr('active')!='1'){
   		$(this).parent().attr({'active':'1'});
   		$(this).removeClass('type_unactive').addClass('type_active');
   		catalog_recalc()
   	}
   	else{
   		$(this).parent().attr({'active':'0'});
   		$(this).removeClass('type_active').addClass('type_unactive');
   		catalog_recalc()
	}
   })


   $('#filter_clear').click(function(){
   	 $('#type').children('li').children('a').removeClass('type_unactive').addClass('type_active');
   	 $('#type').children('li').attr({'active':'1'});

	 $('#effects').children('li').attr({'active':'0'});
	 $('#effects').children('li').removeClass('colors_active').addClass('colors_unactive');

	 $('#colors').children('li').attr({'active':'0'});
	 $('#colors').children('li').removeClass('colors_active').addClass('colors_unactive');

	 catalog_recalc()
   });


   $('#filter_control').click(function(){       if($('#filter').attr('hidde')!='1'){
	       $('#filter').attr({'hidde':'1'})
	       $('#filter').children('ul').css({'display':'none'})
	       $('#filter').children('div').css({'display':'none'})
	       $('#filter_control').html('Показать фильтр')
	   }
	   else{
	       $('#filter').attr({'hidde':'0'})
	       $('#filter').children('ul').css({'display':'block'})
	       $('#filter').children('div').css({'display':'block'})
	       $('#filter_control').html('Скрыть фильтр')
	   }
   })

	$('#filter_text').attr({'text':$('#filter_text').children('span').html()})
});


function catalog_recalc(){    //lets rock !

    n_cnt=0;

    var colors=' ';
			for (var i = 0; i < $('#colors').children('li').filter('[active = 1]').length; i++) {
			   color=$('#colors').children('li').filter('[active = 1]').eq(i).attr('alt')
			   if(n_cnt>0)
			   	 colors=colors+', '
			   n_cnt++;
			   colors=colors+''+color;
			}

    var color_types=' ';
			for (var i = 0; i < $('#effects').children('li').filter('[active = 1]').length; i++) {
			   color_type=$('#effects').children('li').filter('[active = 1]').eq(i).attr('alt')
			   if(n_cnt>0)
			   	 color_types=color_types+', '
			   n_cnt++;
			   color_types=color_types+''+color_type;
			}

    var types = ' '

		for (var i = 0; i < $('#type').children('li').filter('[active = 1]').length; i++) {
		   type=$('#type').children('li').filter('[active = 1]').eq(i).attr('alt')
		   if(n_cnt>0)
		  	 types=types+', '
		   n_cnt++;
		   types=types+''+type;
	    }

	out=$('#filter_text').attr('text')+colors+color_types+types;
	if(out.length > 40){        arr=out.split(' ')
        new_out='';
        i=0
        while (new_out.length < 40) {        	new_out=new_out+arr[i]+' '
        	i++;
        }
		out=new_out+' ...'
		}
	$('#filter_text').children('span').html(out)
}