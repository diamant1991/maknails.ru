$(document).ready(function(){  $('#brand_logo_img').hover(function(){    	src=$(this).attr('src');
    	$(this).attr({'src':$(this).attr('alt_src')})
    	$(this).attr({'alt_src':src})  },function(){    	src=$(this).attr('src');
    	$(this).attr({'src':$(this).attr('alt_src')})
    	$(this).attr({'alt_src':src})  })
});