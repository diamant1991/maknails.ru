$( document ).ready(function() {
	$('.login').click(function(){   		if($('#olay_login_form').attr('visible')!='true'){
	   		$('#login_form_mask').css({'display':'block'})
	        $('#olay_login_form').css({'display':'block'})
	        $('#olay_login_form').attr({'visible':'true'})
	  	}
	  	else{   			$('#login_form_mask').css({'display':'none'})
        	$('#olay_login_form').css({'display':'none'})
	        $('#olay_login_form').attr({'visible':'false'})
	  	}	})

	$('#login_form_close').click(function(){   		$('#login_form_mask').css({'display':'none'})
        $('#olay_login_form').css({'display':'none'})
        $('#olay_login_form').attr({'visible':'false'})	})
});