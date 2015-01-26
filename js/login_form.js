$( document ).ready(function() {
	$('.login').click(function(){
   		if($('#olay_login_form').attr('visible')!='true'){
	   		$('#login_form_mask').css({'display':'block'})
	        $('#olay_login_form').css({'display':'block'})
	        $('#olay_login_form').attr({'visible':'true'})
	  	}
	  	else{
   			$('#login_form_mask').css({'display':'none'})
        	$('#olay_login_form').css({'display':'none'})
	        $('#olay_login_form').attr({'visible':'false'})
	  	}
	})
	$('#login_form_close').click(function(){
   		$('#login_form_mask').css({'display':'none'})
        $('#olay_login_form').css({'display':'none'})
        $('#olay_login_form').attr({'visible':'false'})
	})

	$('.click-comment').click(function(){
   		if($('.comment-form').attr('visible')!='true'){
	   		$('.comment_form_mask').css({'display':'block'})
	        $('.comment-form').css({'display':'block'})
	        $('.good_subscription_menu a').css({'border-bottom':'0'})
	        $('.good_subscription_menu a').css({'font':'30px/30px PFDin-regular,Open Sans Condensed'})
	        $('.good_subscription_menu span').css({'border-bottom':'dotted 1px #000'})
	        $('.good_subscription_menu span').css({'font':'normal 30px/30px PFDin-thin,Open Sans Condensed'})
	        $('.comment-form').attr({'visible':'true'})
	  	}
	  	else{
   			$('.comment_form_mask').css({'display':'none'})
        	$('.comment-form').css({'display':'none'})
        	$('.good_subscription_menu a').css({'border-bottom':'dotted 1px #000'})
        	$('.good_subscription_menu a').css({'font':'normal 30px/30px PFDin-thin,Open Sans Condensed'})
        	$('.good_subscription_menu span').css({'border-bottom':'0'})
        	$('.good_subscription_menu span').css({'font':'30px/30px PFDin-regular,Open Sans Condensed'})
	        $('.comment-form').attr({'visible':'false'})
	  	}
	})
	$('.comment-close').click(function(){
   		$('.comment_form_mask').css({'display':'none'})
        $('.comment-form').css({'display':'none'})
        $('.good_subscription_menu a').css({'border-bottom':'dotted 1px #000'})
        $('.good_subscription_menu a').css({'font':'normal 30px/30px PFDin-thin,Open Sans Condensed'})
        $('.good_subscription_menu span').css({'border-bottom':'0'})
        $('.good_subscription_menu span').css({'font':'30px/30px PFDin-regular,Open Sans Condensed'})
        $('.comment-form').attr({'visible':'false'})
	})

});