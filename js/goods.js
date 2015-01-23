$( document ).ready(function() {
    $('#top_navigation').children('li').last().removeClass('top_navigation').addClass('top_navigation_last');
    $('#top_navigation').children('li').last().children('a').css({'color':'#a49fa0'})

    if($( window ).width()<1210){
      	$('#good_photo_lage').css({'width':'240px'})
      	$('#good_data').css({'background-position-x':'-300px'})
    }else{
       $('#good_photo_lage').css({'width':'480px'})
       $('#good_data').css({'background-position-x':'30px'})
    }
 	$( window ).resize(function() {
    	if($( window ).width()<1210){
         	$('#good_photo_lage').css({'width':'240px'})
         	$('#good_data').css({'background-position-x':'-300px'})
    	}else{
            $('#good_photo_lage').css({'width':'480px'})
            $('#good_data').css({'background-position-x':'30px'})
    	}
 	});

 	$('#good_count_inc').click(function(){		$(this).parent().children('input').val(parseInt($(this).parent().children('input').val())+1)
		if($(this).parent().children('input').val()>9)
			$(this).parent().children('input').css({'width':'18px'})
		else
			$(this).parent().children('input').css({'width':'10px'})
 	})

 	$('#good_count_dec').click(function(){
    if($(this).parent().children('input').val() >= 2)
  		$(this).parent().children('input').val(parseInt($(this).parent().children('input').val())-1)
	if($(this).parent().children('input').val()>9)
		$(this).parent().children('input').css({'width':'18px'})
	else
		$(this).parent().children('input').css({'width':'10px'})
 	})

 	$('.cost').hover(function(){
		  $(this).parent().attr({'animate':'true'})
		  $(this).animate({
		    marginTop: '275px',
		    height: '104px'
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
		  	$(this).children('span').html(parseInt($(this).attr('cost'))*val)
		  }

	      $('#c_dec').click(function(){
			if($('#c_inp').val()>=2)
	      		$('#c_inp').val(parseInt($('#c_inp').val())-1);
		      	cost=parseInt($('#c_dec').parent().parent().attr('cost'))
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
	      		$('#c_inp').css({'width':'18px'})
	      	else
	      		$('#c_inp').css({'width':'10px'})
	      })

		  $(this).children('.cnt').animate({
		    height: '24px'
  		    }, 100, function() {
		    	$(this).attr({'animate':'false'})
		  });


 	},function(){
		  $(this).parent().attr({'animate':'true'})
		  $(this).animate({
		    marginTop: '310px',
		    height: '66px'
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


 	$('.doods_item_cost').hover(function(){
		  $(this).parent().attr({'animate':'true'})
		  $(this).animate({
		    marginTop: '295px',
		    height: '80px'
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
		  	$(this).children('span').html(parseInt($(this).attr('cost'))*val)
		  }

	      $('#c_dec').click(function(){
			if($('#c_inp').val()>=2)
	      		$('#c_inp').val(parseInt($('#c_inp').val())-1);
		      	cost=parseInt($('#c_dec').parent().parent().attr('cost'))
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
	      		$('#c_inp').css({'width':'18px'})
	      	else
	      		$('#c_inp').css({'width':'10px'})
	      })

		  $(this).children('.cnt').animate({
		    height: '24px'
  		    }, 100, function() {
		    	$(this).attr({'animate':'false'})
		  });


 	},function(){
		  $(this).parent().attr({'animate':'true'})
		  $(this).animate({
		    marginTop: '330px',
		    height: '50px'
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



 	$('.history_item').hover(function(){		$(this).attr({'animate':'true'})
		$(this).animate({
		    backgroundPosition: '-100px center'
  		    }, 100, function() {
		   		$(this).attr({'animate':'false'})
		});
 		$(this).children('.history_item_data').fadeIn(400);
 		$(this).children('.history_item_cost').fadeIn(400); 	},function(){ 		$(this).children('.history_item_data').css({'display':'none'})
 		$(this).children('.history_item_cost').css({'display':'none'}) 	})
});

