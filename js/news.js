$(document).ready(function(){
    $('#top_navigation').children('li').last().removeClass('top_navigation').addClass('top_navigation_last');
    $('#top_navigation').children('li').last().children('a').css({'color':'#a49fa0'})
    $('#top_navigation').css({'border':'none','margin-top':'-12px'})
    });