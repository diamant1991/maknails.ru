$(document).ready(function(){
	$('.rg_form_input').focus(function(){     	$(this).parent().children('span').css({'display':'none'})	})

	$('.rg_form_input').blur(function(){		if($(this).val()==''){        	$(this).parent().children('span').css({'display':'block'})
		}	})

	$( window ).resize(function() {
  		if($( window ).width()<1210){         	$('#user_auch_form').css({'marginLeft':'40px'})
  		}
  		else{        	$('#user_auch_form').css({'marginLeft':'180px'})
  		}
	});

  	if($( window ).width()<1210){
       	$('#user_auch_form').css({'marginLeft':'40px'})
  	}
  	else{
      	$('#user_auch_form').css({'marginLeft':'180px'})
  	}
});