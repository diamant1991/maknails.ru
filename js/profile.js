$(document).ready(function(){    $('#top_navigation').children('li').last().removeClass('top_navigation').addClass('top_navigation_last');
    $('#top_navigation').children('li').last().children('a').css({'color':'#a49fa0'})

	$('.pf_form_input').focus(function(){
     	$(this).parent().children('span').css({'display':'none'})
	})

	$('.pf_form_input').blur(function(){
		if($(this).val()==''){
        	$(this).parent().children('span').css({'display':'block'})
		}
	})
});