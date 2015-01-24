$( document ).ready(function() {
	},function(){
		$('#baner_selector').css({'display':'none'});

 	$('.cost').hover(function(){
		  $(this).animate({
		    marginTop: '275px',
		    height: '102px'
  		    }, 100, function() {
		   		$(this).attr({'animate':'false'})
		  });

    	  $(this).children('.buy').css({'background-color':'#248bcf','marginTop':'5px'})
	      $(this).children('.cnt').css({'display':'block'})

		  if($(this).attr('value_set')=='ok'){
			  val=parseInt($(this).attr('value'))
			  if(val < 1)
			  	val=1;
	      }
	      else
	      	val=1;

		  $(this).children('.cnt').append('<input id="c_inp" type="text" value="'+val+'">')
	      $(this).children('.cnt').prepend('<div id="c_inc">')
	      $(this).children('.cnt').prepend('<div id="c_dec">')

          $(this).prepend('<div id="stars"></div>')
          $(this).prepend('<div id="compare">Сравнить</div>')

          $('#stars').fadeIn(200);
          $('#compare').fadeIn(200);

	      if($(this).attr('cost_set')!='ok'){
		      cost=parseInt($(this).children('span').html())
		      $(this).attr({'cost':cost,'cost_set':'ok'});
		  }else{
		  }

	      $('#c_dec').click(function(){
	      		$('#c_inp').val(parseInt($('#c_inp').val())-1);
		      	cost=cost*parseInt($('#c_inp').val());
		      	$('#c_dec').parent().parent().children('span').html(cost);
		      	if($('#c_inp').val()>=10)
		      		$('#c_inp').css({'width':'18px'})
		      	else
		      		$('#c_inp').css({'width':'10px'})
	      })

	      $('#c_inc').click(function(){
	      	$('#c_inp').val(parseInt($('#c_inp').val())+1);
		    cost=parseInt($('#c_dec').parent().parent().attr('cost'))
		    cost=cost*parseInt($('#c_inp').val());
		    $('#c_dec').parent().parent().children('span').html(cost);
	      	if($('#c_inp').val()>=10)
	      	else
	      		$('#c_inp').css({'width':'10px'})
	      })

		  $(this).children('.cnt').animate({
		    height: '24px'
  		    }, 100, function() {
		    	$(this).attr({'animate':'false'})
		  });


 	},function(){
		  $(this).animate({
		    marginTop: '310px',
		    height: '60px'
  		    }, 100, function() {
		    $(this).attr({'animate':'false'})
		  });
		  $(this).children('.buy').css({'background-color':'#a1a1a1','marginTop':'10px'})
		  $(this).children('.cnt').css({'display':'none','height':'0px'})

          $(this).attr({'value':$('#c_inp').val(),'value_set':'ok'})

	      if($(this).attr('cost_set')=='ok')
		      $(this).children('span').html($(this).attr('cost'))

		  $('#stars').remove();
		  $('#compare').remove();
		  $('#c_inc').remove();
		  $('#c_dec').remove();
		  $('#c_inp').remove()
 	})

});