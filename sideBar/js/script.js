$(document).ready(function(){
      $('.burger').click(function(event){
      	$('.burger, .nav_header').toggleClass('active');
      	$('body').toggleClass('lock');
      });
    });