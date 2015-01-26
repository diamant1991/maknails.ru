var mydivs=new Array('.colors','.item-other-color');

function opcl(arr, e){
    if ($(e).css('display') == 'none'){
        for(var i in arr){   
           $(arr[i]).hide();
        }
        $(e).show();       
    }
}


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
 	$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});
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
 	$('.view').click(function() {
    $('.view').removeClass('active');
    $(this).addClass('active');
  });


});