$( document ).ready(function() {
 	$('#subscription_email').focus(function(){
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

 	$('.indication').click(function(){ // при клике по заголовку спойлера
				var show = $(this).attr('show'); // проверяем атрибут, в котором записано - отображен спойлер или скрыт
				if(show == 1){ // если отображен, то прячем
					$(this).attr('show', 0);
					$('.spoiler-body').slideUp(100);
					$(this).css("background","url(images/arrow-bottom.png)")
					
				}else{ // если спрятан, то показываем
					$(this).attr('show', 1);
					$('.spoiler-body').slideDown(300);
					$(this).css("background","url(images/arrow-up.png)")
				}
			});


});