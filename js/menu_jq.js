$(document).ready(function(){
    $('#catalog_720').click(function(){    	if($('#menu').css('display')!='block'){
    		$('#menu').css({'display':'block'})
    		$('#top_menu').css({'display':'none'})
    		$('#top_menu_arrow').remove();
    		$('#menu').prepend('<div id="top_menu_arrow" class="top_menu_arrow top_menu_arrow_catalog"></div>');
    		}
    	else
    		$('#menu').css({'display':'none'})
    })


    $('#menu_720').click(function(){
    	if($('#top_menu').css('display')!='block'){
    		$('#menu').css({'display':'none'})
    		$('#top_menu').css({'display':'block'})
    		$('#top_menu_arrow').remove();
            $('#top_menu').prepend('<div id="top_menu_arrow" class="top_menu_arrow top_menu_arrow_menu"></div>');
    		}
    	else{
    		$('#top_menu').css({'display':'none'})
    		}
    })

	$('#menu').children('nav').children('ul').children('li').hover(function(){		if($(this).attr('id')!='menu_header'){
			$(this).children('ul').css({'display':'block'})

			if($( window ).width()<1030){
			   $(this).children('a').addClass('menu_l1_active_720')
			   $(this).children('ul').removeClass('menu_l2_active').addClass('menu_l2_active_720')
			   }
			else{				$(this).children('ul').removeClass('menu_l2_active_720').addClass('menu_l2_active')
				$(this).children('a').addClass('menu_l1_active')
				}


			m_h=$(this).children('ul').css('height')
			m_h=m_h.split('px')[0]
			m_h=Math.round(m_h/2)+5;
			$(this).children('ul').css({'margin-top':'-'+m_h+'px'})
		}	},function(){		$(this).children('ul').css({'display':'none'})
		$(this).children('a').removeClass('menu_l1_active')
		$(this).children('a').removeClass('menu_l1_active_720')	})

});