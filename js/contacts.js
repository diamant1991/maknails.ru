$(document).ready(function(){
	$('.cnt_form_input').focus(function(){     	$(this).parent().children('span').css({'display':'none'})	})

	$('.cnt_form_input').blur(function(){		if($(this).val()==''){        	$(this).parent().children('span').css({'display':'block'})
		}	})
});