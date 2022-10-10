(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>","<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

	};
	carousel();

})(jQuery);



(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('#news-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:30,
	   
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
		items : 2,
		smartSpeed: 200,
	    // navText : ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>","<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
	    responsive: {
			0: {
				items: 1
			},

			600: {
				items: 1
			},

			820: {
				items: 2
			},

			1024: {
				items: 2
			},

			1366: {
				items: 3
			},
			1566: {
				items: 3
			}
		}
		});

	};
	carousel();

})(jQuery);






// $(document).ready(function() {
//     $("#news-slider").owlCarousel({
//         items : 3,
//         itemsDesktop:[1199,3],
//         itemsDesktopSmall:[980,2],
//         itemsMobile : [600,1],
//         navigation:true,
//         navigationText:["",""],
//         pagination:true,
//         autoPlay:true,
		
// 		loop:true,
//     });
// });


var tnum = 'fi';

$(document).ready(function(){
  
  $(document).click( function(e) {
       $('.translate_wrapper, .more_lang').removeClass('active');     
  });
  
  $('.translate_wrapper .current_lang').click(function(e){    
    e.stopPropagation();
    $(this).parent().toggleClass('active');
    
    setTimeout(function(){
      $('.more_lang').toggleClass('active');
    }, 5);
  });
  

  /*TRANSLATE*/
  translate(tnum);
  
  $('.more_lang .lang').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.more_lang').removeClass('active');  
    
    var img = $(this).find('img').attr('src');    
    var lang = $(this).attr('data-value');
    var tnum = lang;
    translate(tnum);
    
    $('.current_lang .lang-txt').text(lang);
    $('.current_lang img').attr('src', img);
    
    if(lang == 'ar'){
      $('body').attr('dir', 'rtl');
    }else{
      $('body').attr('dir', 'ltr');
    }
    
  });
});

function translate(tnum){
  $('.pl-caro-hd1').text(trans[0][tnum]);
  $('.pl-caro-tx1').text(trans[1][tnum]);

}


var trans = [ 
  { 
	fi: 'Hyvinvoiva Eurooppa kaikille, ei harvoille.',
    en : 'A prosperous Europe for all, not for the few.',
    pt : 'Uma Europa próspera para todos, não para poucos.',
    fr : 'Une Europe prospère pour tous, pas pour quelques-uns.',
    cn : '一个为所有人而不是少数人的繁荣的欧洲。',
  },
  { 
	fi: 'Olen tinkimätön ilmaston, ihmisoikeuksien ja sosiaalisen oikeudenmukaisuuden puolustaja. Haluan Euroopan, jossa hyvinvointi kuuluu kaikille, ei harvoille. Sen eteen teen töitä vasemmistoliiton europarlamentaarikkona. Ennen meppihommia toimin kansanedustajana ja kaupunginvaltuutettuna Helsingissä.',
    en : 'I am an uncompromising defender of the climate, human rights and social justice. I want a Europe where prosperity belongs to everyone, not the few. I work for that as an MEP of the Left Alliance. Before working as a member of parliament, I worked as an MP and a city councilor in Helsinki.',
    pt : 'Sou um defensor intransigente do clima, dos direitos humanos e da justiça social. Quero uma Europa onde a prosperidade pertença a todos, não a poucos. Trabalho para isso como eurodeputado da Aliança de Esquerda. Antes de trabalhar como parlamentar, trabalhei como parlamentar e vereador em Helsinque.',
    fr : 'Je suis un défenseur intransigeant du climat, des droits humains et de la justice sociale. Je veux une Europe où la prospérité appartient à tous, pas à quelques-uns. Je travaille pour cela en tant que député européen de l Alliance de gauche. Avant de devenir députée, j ai travaillé comme députée et conseillère municipale à Helsinki.',
    cn : '我是气候、人权和社会正义的坚定捍卫者。 我想要一个繁荣属于每个人而不是少数人的欧洲。 我作为左翼联盟的 MEP 为之工作。 在担任议会议员之前，我曾在赫尔辛基担任议员和市议员。',
  },

];
