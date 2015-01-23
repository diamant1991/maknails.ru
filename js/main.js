$( document ).ready(function() { 	$('#subscription_email').focus(function(){
 		if($(this).val()=='Ваш Email')
 	       $(this).val('')
 	})

 	$('#subscription_email').blur(function(){
 		if($(this).val()=='')
 	       $(this).val('Ваш Email')
 	})

 	$('#search').focus(function(){
 		if($(this).val()=='Найти в каталоге')
 	       $(this).val('')
 	})

 	$('#search').blur(function(){
 		if($(this).val()=='')
 	       $(this).val('Найти в каталоге')
 	})
});