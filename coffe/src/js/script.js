$(document).ready(function(){
      $('.burger').click(function(event){
      	$('.burger, .navigation').toggleClass('active');
      	$('body').toggleClass('lock');
      });
  });

$(document).ready(function(){
  $('.branches').slick({
  	slidesToShow: 3,
    dots: false,
    arrows:false,
    autoplay:false,
    autoplaySpeed:4000,
    responsive: [
    {
      breakpoint: 1301,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }

    ]
  });
      let quertion = confirm(`Сегодня хорошая погода?`)
      alert(quertion)
});
        
