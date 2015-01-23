$( document ).ready(function() {
	$('#top_menu').children('li:last').css({'margin-right':'0px'})

	$( window ).resize(function() {
    	wnd_resize()
    	bg_resize()
	});
	wnd_resize()
	bg_resize()
});



function bg_resize(){       //Масштабирует фоновые изображения

      bg1_posx=parseInt($( window ).width());
      bg1_posx=(bg1_posx-1750)/2;
      bg2_width=353;
      if($( window ).width()<1750){
      	bg2_posx=(bg1_posx-1750)/2;
      	if($( window ).width()<1210){
        	bg1_posx=bg1_posx+200
        	bg2_width=200;
        	$('body').css("background-image","url('images/main_bg_left_960.png'),url('images/main_bg_right_960.png')");
        	if($( window ).width()<1030){
        		bg1_posx=bg1_posx+120
        	}
      	}
      	else
      		$('body').css("background-image","url('images/main_bg_left.png'),url('images/main_bg_right.png')");
      }
      else{
      	bg2_posx=0
        bg1_posx=0
      }

      $('body').css("background-position",bg1_posx+"px 0px, "+(parseInt($( window ).width())-bg2_width-bg1_posx)+"px 0px");
}


function wnd_resize(){	  if($( window ).width()<1210){
		   	$('.c_pos').css({'width':'995px'});
		   	$('.c_pos_960').css({'width':'722px'});

		   	$('#news').children('li').css({'width':'360px'});
		   	$('#news').children('li').children('a').css({'width':'240px'});
		   	$('#banner').removeClass('baner').addClass('baner_960')
			$('#banner_left_bg').removeClass('baner_left_bg').addClass('baner_left_bg_960')
		   	$('#banner_right_bg').removeClass('baner_right_bg').addClass('baner_right_bg_960')
		   	$('#baner_selector').removeClass('baner_selector').addClass('baner_selector_960')
			$('#baner_arrow_right').removeClass('baner_arrow_right').addClass('baner_arrow_right_960')
            $('#footer').removeClass('footer').addClass('footer_960')

		   	if($(window).width()<1030){	         	$('#header').addClass('header_720')
	         	$('.c_pos').css({'width':'722px'});
	         	$('#logo').removeClass('logo_960').addClass('logo_720')
	         	$('#search').removeClass('search').addClass('search_720')
	         	$('#footer').removeClass('footer_960').addClass('footer_720')
	         	$('#contact_data').removeClass('contact_data').addClass('contact_data_720');
	         	$('#720_menu').css({'display':'block'})
	         	$('#header').after($('#phone'))
	         	$('#phone').removeClass('phone').addClass('phone_720');
	         	$('#menu').removeClass('menu').addClass('menu_720');
	         	$('#menu').css({'display':'none'})
	         	$('.menu_l1').removeClass('menu_l1').addClass('menu_l1_720');
	         	$( "#items" ).after($('#subscription'));
	         	$('#subscription').removeClass('subscription').addClass('subscription_720');
	         	$('#top_menu').removeClass('top_menu').addClass('top_menu_720');
                $('#header_content').prepend($('#top_menu'));
                $('#top_menu').css({'display':'none'})
		   	}
		   	else{	         	$('#header').children('nav').append($('#top_menu'))
	         	$('#top_menu').removeClass('top_menu_720').addClass('top_menu');
	         	$( "#menu_add" ).after($('#subscription'));
                $('#subscription').removeClass('subscription_720').addClass('subscription');
	         	$('#menu').removeClass('menu_720').addClass('menu');
	         	$('.menu_l1_720').removeClass('menu_l1_720').addClass('menu_l1');
	         	$('#logo').removeClass('logo_720').addClass('logo_960')
	         	$('#search').removeClass('search_720').addClass('search')
                $('#phone').removeClass('phone_720').addClass('phone');
                $('#footer').removeClass('footer_720').addClass('footer_960')
                $('#contact_data').removeClass('contact_data_720').addClass('contact_data');
                $('#720_menu').css({'display':'none'})
                $('#header').removeClass('header_720')
	   		    $('#menu').css({'display':'block'})
	         	$('#top_menu').css({'display':'block'});
	   		    $('.c_pos').css({'width':'995px'});
		   	}

	   	}
	  else{
        $('#720_menu').css({'display':'none'})
        $('#footer').removeClass('footer_960').addClass('footer')
        $('#banner').removeClass('baner_960').addClass('baner')
	   	$('#banner_left_bg').removeClass('baner_left_bg_960').addClass('baner_left_bg')
	   	$('#banner_right_bg').removeClass('baner_right_bg_960').addClass('baner_right_bg')
	   	$('#baner_selector').removeClass('baner_selector_960').addClass('baner_selector')
		$('#baner_arrow_right').removeClass('baner_arrow_right_960').addClass('baner_arrow_right')
	  	$('.c_pos').css({'width':'1210px'});
	  	$('.c_pos_960').css({'width':'960px'});
	   	$('#news').children('li').css({'width':'480px'});
	   	$('#news').children('li').children('a').css({'width':'380px'});
	  	}
}